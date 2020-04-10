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
    private roleService: RoleService
  ) {
    super();
    this.onSubmit = debounce(this.onSubmit, 250);
  }

  async ngOnInit() {
    this.fetchForm();

    this.ComponentSubscription(
      this.roleService.RolesStore.subscribe((roles: IRole[]) => {
        this.roles = roles.map((t) => {
          return {
            id: t.id,
            name: t.title,
          };
        });

        console.log(this.roles);
      })
    );

    this.StartRequest<IRole>(() => this.requests.GetRoles()).then((result) => {
      if (result && result.items) {
        this.roleService.SetRoles(result.items);
      }
    });

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
