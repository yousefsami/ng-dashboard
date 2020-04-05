import { Component, OnInit } from '@angular/core';
import { sortBy } from 'lodash';
import { IInteractiveNote } from '../../../ng5-basic/definitions';

import { IProductActivation, IPackage, IProduct } from '../../team.definitions';

import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { PackagesStore } from '../../team.store';
import { TeamsCommonService } from '../../teamcommon.service';
import { NgdBaseComponent } from '../../../ng5-basic/services/ngd-base.component';
import { ConfigurationService } from '../../../ng5-basic/services/configuration.service';
import { RouterService } from '../../../ng5-basic/services/router.service';
import {
  CurrencyFormat,
  InteractiveButtons,
} from '../../../ng5-basic/services/common';
import { ConfirmService } from '../../../ng5-basic/services/confirm.service';
import { RequestsService } from '../../../ng5-basic/services/requests.service';

const NoServicePackages: IInteractiveNote = {
  description: 'no_service_package',
  animation: 'warning',
};

@Component({
  selector: 'ng-package-list',
  templateUrl: './package-list.component.html',
  styleUrls: ['./package-list.component.scss'],
})
export class PackageListComponent extends NgdBaseComponent implements OnInit {
  public CurrencyFormat = CurrencyFormat;
  public note: IInteractiveNote = null;

  public packages: Array<IProduct<IPackage>> = [];

  constructor(
    public requests: RequestsService,
    public http: HttpClient,
    public config: ConfigurationService,
    public route: ActivatedRoute,
    public ngdRouter: RouterService,
    public confirm: ConfirmService,
    public teamsCommon: TeamsCommonService
  ) {
    super();
  }

  ngOnInit() {
    this.ComponentSubscription(
      PackagesStore.subscribe((packages) => {
        this.packages = packages;
        if (this.packages.length === 0) {
          this.note = NoServicePackages;
        } else {
          this.note = null;
        }
      })
    );

    this.SetInteractiveButtons([
      InteractiveButtons.Refresh(this.GetPackages.bind(this)),
    ]);

    this.GetPackages();
  }
  public async DeactivatePackage(pack: IProduct<IPackage>) {
    this.confirm
      .open({
        content: 'Are you sure to deactive this service?',
        type: 'CONFIRMATION',
      })
      .subscribe(async (e) => {
        if (e.type === 'CONFIRMED') {
          const res = await this.StartRequest<IProductActivation>(() =>
            this.teamsCommon.DeactivateServicePackage(pack)
          );
          if (res.item) {
            if (res.item.activation_status === 'INACTIVE') {
              this.config.Notify({
                type: 'info',
                message: this.config.translate('package_deactivated', {
                  name: pack.name,
                }),
                date: new Date(),
                importance: 'IMPORTANT',
              });

              const activationItem: IProductActivation = res.item;
              PackagesStore.next(
                PackagesStore.value.map((p: any) => {
                  if (p.id === activationItem.product_id) {
                    p.activations.push(activationItem);
                  }
                  return pack;
                })
              );
            }
          }
        }
      });
  }

  public async GetPackages() {
    const res = await this.StartRequest<IProduct<IPackage>>(() =>
      this.requests.GetServicePackages()
    );
    if (res.items) {
      PackagesStore.next(res.items);
    }
  }

  public IsProductActive(product: IProduct<IPackage>) {
    if (!product.activations || product.activations.length === 0) {
      return false;
    }

    const activations = sortBy(product.activations, 'id').reverse();
    if (activations[0].activation_status === 'ACTIVE') {
      return true;
    }

    return false;
  }
}
