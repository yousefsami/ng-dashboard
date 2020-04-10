import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { NgMediaComponent } from 'ng-media';
import { ActivatedRoute, Router } from '@angular/router';
import { IResponseErrorItem } from 'response-type';
import { debounce } from 'lodash';
import { RouterService } from '../../../ng5-basic/services/router.service';
import { ConfigurationService } from '../../../ng5-basic/services/configuration.service';
import { NgdBaseComponent } from '../../../ng5-basic/services/ngd-base.component';
import { RequestsService } from '../../../ng5-basic/services/requests.service';

function validateBankAccount(form): IResponseErrorItem[] {
  const errors: IResponseErrorItem[] = [];
  if (!form.firstname) {
    errors.push({
      message: 'At least add user first name to be invited.',
      location: 'firstname',
    });
  }
  return errors;
}

@Component({
  selector: 'ng-invite-form',
  templateUrl: './invite-form.component.html',
  styleUrls: ['./invite-form.component.scss'],
})
export class InviteFormComponent extends NgdBaseComponent implements OnInit {
  @ViewChild(NgMediaComponent, { static: false })
  public attachments: NgMediaComponent;
  public form = new FormGroup({
    firstname: new FormControl(''),
    id: new FormControl(null),
    lastname: new FormControl(''),
    team: new FormControl(''),
    phone: new FormControl(''),
    email: new FormControl(''),
  });
  protected validator = validateBankAccount;

  constructor(
    private requests: RequestsService,
    private route: ActivatedRoute,
    public config: ConfigurationService,
    private router: Router,
    public ngdRouter: RouterService
  ) {
    super();
    this.onSubmit = debounce(this.onSubmit, 250);
  }

  async ngOnInit() {
    this.fetchForm();

    const { teamId } = this.route.snapshot.params;
    if (teamId) {
      this.form.patchValue({
        team: teamId,
      });
    }

    this.SetInteractiveButtons([
      {
        icon: 'icon-list',
        key: 'list',
        keyboardShortcut: 'l',
        onPress: this.goToList.bind(this),
      },
      {
        icon: 'icon-save',
        key: 'save',
        keyboardShortcut: 'Enter',
        onPress: this.onSubmit.bind(this),
      },
    ]);
  }

  public goToList() {
    this.ngdRouter.navigateTo('/teams');
  }

  private async fetchForm() {
    const { id } = this.route.snapshot.params;
    if (!id) {
      return;
    }
    this.StartRequest<any>(() => this.requests.GetInvitation(id)).then(
      (result) => {
        if (result && result.item) {
          this.form.patchValue({
            ...result.item,
          });
        }
      }
    );
  }

  public async onSubmit() {
    this.StartValidatedRequest<any>(() =>
      this.requests.PostInvitation(this.form.value)
    ).then((result) => {
      if (result.item) {
        this.router.navigateByUrl(`/teams?modified=${result.item.id}`);
      }
    });
  }
}
