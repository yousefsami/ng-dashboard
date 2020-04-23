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
import { ERROR_CODES } from '../../../ng5-basic/services/common';
import { IRole } from '../../../ng5-basic/definitions';
import { RoleService } from '../../role.service';
import { ModalService } from '../../../ng5-basic/services/modal.service';

function inviteFormValidate(form): IResponseErrorItem[] {
  const errors: IResponseErrorItem[] = [];
  if (!form.firstname) {
    errors.push({
      message: ERROR_CODES.REQUIRED_FIELD,
      location: 'firstname',
    });
  }
  if (!form.email) {
    errors.push({
      message: ERROR_CODES.REQUIRED_FIELD,
      location: 'email',
    });
  }
  if (!form.roles || form.roles.length === 0) {
    errors.push({
      message: ERROR_CODES.REQUIRED_FIELD,
      location: 'roles',
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
  public isEditing = true;
  public roles: Array<{ id: any; name: any }> = [];

  @ViewChild(NgMediaComponent, { static: false })
  public attachments: NgMediaComponent;
  public form = new FormGroup({
    firstname: new FormControl(''),
    id: new FormControl(null),
    lastname: new FormControl(''),
    team: new FormControl(''),
    roles: new FormControl([]),
    phone: new FormControl(''),
    email: new FormControl(''),
  });
  protected validator = inviteFormValidate;

  constructor(
    private requests: RequestsService,
    private route: ActivatedRoute,
    public config: ConfigurationService,
    private router: Router,
    public ngdRouter: RouterService,
    private roleService: RoleService,
    private confirm: ModalService
  ) {
    super();
    this.onSubmit = debounce(this.onSubmit, 250);
  }

  async ngOnInit() {
    this.ReactiveToFormChanges();
    this.fetchForm();

    const { teamId } = this.route.snapshot.queryParams;

    if (teamId) {
      this.form.patchValue({ team: +teamId });
    }

    this.ComponentSubscription(
      this.roleService.RolesStore.subscribe((roles: IRole[]) => {
        this.roles = roles.map((t) => {
          return {
            id: t.id,
            name: t.title,
          };
        });
      })
    );

    this.StartRequest<IRole>(() => this.requests.GetRoles()).then((result) => {
      if (result && result.items) {
        this.roleService.SetRoles(result.items);
      }
      this.formTouchedElements = {};
      this.res = null;
    });

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
        this.formTouchedElements = {};
        this.res = null;
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

  public deleteInvite() {
    const entity = this.Form;

    this.confirm
      .open({
        content: this.config.translate(
          'delete_invitation_confirmation',
          entity
        ),
      })
      .subscribe(async ({ type }) => {
        if (type !== 'CONFIRMED') {
          return;
        }

        const res = await this.StartRequest<any>(() =>
          this.requests.DeleteInvitation(this.Form.id)
        );
        if (res.item) {
          this.router.navigateByUrl('/teams');
        }
      });
  }

  public resendInvite() {
    this.confirm
      .open({
        content: this.config.translate(
          'resend_invitation_confirmation',
          this.Form
        ),
      })
      .subscribe(async ({ type }) => {
        if (type !== 'CONFIRMED') {
          return;
        }

        const res = await this.StartRequest<any>(() =>
          this.requests.ResendInvitation(this.Form.id)
        );
        if (res.item) {
          this.config.ShowToast({
            message: this.config.translate('invitation_has_been_resent'),
            type: 'SUCCESS',
          });
        }
      });
  }

  public CancelHandler() {
    this.router.navigateByUrl('/teams');
  }
}
