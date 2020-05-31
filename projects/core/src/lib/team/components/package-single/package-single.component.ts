import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { sortBy } from 'lodash';
import { combineLatest } from 'rxjs';
declare var Stripe: any;

import {
  IPackage,
  IProduct,
  IPayment,
  IProductActivation,
} from '../../team.definitions';

import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { PackagesStore } from '../../team.store';
import { TeamsCommonService } from '../../teamcommon.service';
import { NgdBaseComponent } from '../../../ng5-basic/services/ngd-base.component';
import { ConfigurationService } from '../../../ng5-basic/services/configuration.service';
import { RouterService } from '../../../ng5-basic/services/router.service';
import { ModalService } from '../../../ng5-basic/services/modal.service';
import { CurrencyFormat } from '../../../ng5-basic/services/common';
import { RequestsService } from '../../../ng5-basic/services/requests.service';

@Component({
  selector: 'ng-package-single',
  templateUrl: './package-single.component.html',
  styleUrls: ['./package-single.component.scss'],
})
export class PackageSingleComponent extends NgdBaseComponent implements OnInit {
  public accessScopeInformation = [];
  public CurrencyFormat = CurrencyFormat;
  private loadedScripts = {};

  public form = new FormGroup({
    name: new FormControl(),
    id: new FormControl(),
    description: new FormControl(),
    available_countries: new FormControl(),
    meta_data: new FormControl(),
    price: new FormControl(),
    currency: new FormControl(),
    activations: new FormControl(),
  });

  public PackageSettings = new FormGroup({
    company: new FormControl(),
  });

  constructor(
    public requests: RequestsService,
    public http: HttpClient,
    public config: ConfigurationService,
    public route: ActivatedRoute,
    public ngdRouter: RouterService,
    public confirm: ModalService,
    public teamsCommon: TeamsCommonService
  ) {
    super();
  }

  public get Form() {
    return this.form.value;
  }

  public get package() {
    return this.form.value;
  }

  async ngOnInit() {
    const id = +this.route.snapshot.params.id;

    this.ComponentSubscription(
      combineLatest(PackagesStore.asObservable()).subscribe(([packages]) => {
        const pack = packages.find((t) => t.id === id);
        if (pack) {
          this.form.patchValue(pack);
        }
      })
    );

    const res = await this.StartListRequest<IProduct<IPackage>>(() =>
      this.requests.GetServicePackage(id)
    );
    if (res.items) {
      this.form.patchValue(res.items[0]);
      this.accessScopeInformation = Object.keys(
        res.items[0].meta_data.access_scope || {}
      ).map((scope) => this.config.translate(`access_${scope}`));
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

  public loadScript(name: string, scriptSrc: string) {
    if (this.loadedScripts[name]) {
      return;
    }

    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = scriptSrc;
      script.type = 'text/javascript';
      script.async = true;
      script.charset = 'utf-8';
      script.onload = () => {
        this.loadedScripts[name] = true;
        resolve();
      };
      script.onerror = () => {
        reject();
      };
      document.getElementsByTagName('head')[0].appendChild(script);
    });
  }

  public async ActivatePackage(pack: IProduct<IPackage>) {
    await this.loadScript('stripe', 'https://js.stripe.com/v3/');

    const res = await this.StartSingleRequest<IPayment>(() =>
      this.teamsCommon.ActivateServicePackage(pack)
    );

    if (!res.item || !res.item.external_key) {
      this.config.ShowToast({
        message: this.config.translate('we_cannot_do_payment_at_this_moment'),
      });
      return;
    }

    // In cypress testing, we cannot do navigation to stripe.
    // We just test reset of the process after stripe.
    /* tslint:disable */
    if (window['cypress_test']) {
      window['strip_data'] = res.item;
      return;
    }
    /* tslint:enable */

    const API_KEY = window.location.host.includes('localhost')
      ? 'pk_test_0fMMX14qRTejPxdZyZmorqCW009kNsHf7P'
      : 'pk_live_hqOQJKFUlt1tz5KNaw3PCVpB00M03MCM1v';

    const stripe = await Stripe(API_KEY);

    try {
      stripe.redirectToCheckout({
        sessionId: res.item.external_key,
      });
    } catch (error) {
      console.error(error);
      this.config.ShowToast({
        title: this.config.translate('stripe_has_failed'),
        message: error.message,
        type: 'ERROR',
      });
    }
  }

  public async DeactivatePackage(pack: IProduct<IPackage>) {
    this.confirm
      .open({
        content: this.config.translate('service_deactive_confirmation'),
        type: 'CONFIRMATION',
      })
      .subscribe(async (e) => {
        if (e.type === 'CONFIRMED') {
          const res = await this.StartSingleRequest<IProductActivation>(() =>
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
                    p.activations = [...p.activations, activationItem];
                    return {
                      ...p,
                    };
                  }
                  return p;
                })
              );
            }
          }
        }
      });
  }

  public CancelHandler() {
    this.ngdRouter.navigateTo('/packages');
  }
}
