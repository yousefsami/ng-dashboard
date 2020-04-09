import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { IResponseErrorItem } from 'response-type';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { NgdRouteEntryPointComponent } from '../../services/NgdEntryRoute';
import { ConfigurationService } from '../../services/configuration.service';
import { InteractiveButtons } from '../../services/common';
import { RequestsService } from '../../services/requests.service';
import { RouterService } from '../../services/router.service';
import { ERROR_CODES } from '../../services/common';

import {
  IInteractiveNote,
  IResponsiveTableRow,
  IRole,
} from '../../definitions';

function roleValidator(role: IRole): IResponseErrorItem[] {
  const errors: IResponseErrorItem[] = [];

  if (!role.title) {
    errors.push({
      location: 'title',
      message: ERROR_CODES.REQUIRED_FIELD,
    });
  }

  if (!role.permissions || role.permissions.length === 0) {
    errors.push({
      location: 'permissions',
      message: 'role_permissions_at_least_one_is_required',
    });
  }

  return errors;
}

@Component({
  templateUrl: './role-form.component.html',
  styleUrls: ['./role-form.component.scss'],
})
export class RoleFormComponent extends NgdRouteEntryPointComponent
  implements OnInit {
  public note: IInteractiveNote = null;
  public roles: IRole[] = [];
  public permissions: Array<{ id: any; name: any }> = [];
  public rows: IResponsiveTableRow[] = [];
  public isEditing = true;
  public validator = roleValidator;

  public form = new FormGroup({
    id: new FormControl(null),
    title: new FormControl(null),
    readonly: new FormControl(false),
    permissions: new FormControl(['ADD_MEMBER_TO_TEAM']),
  });

  constructor(
    public title: Title,
    private requests: RequestsService,
    public ngdRouter: RouterService,
    public route: ActivatedRoute,
    public meta: Meta,
    public config: ConfigurationService
  ) {
    super(meta, title, route, config);
  }

  ngOnInit() {
    super.ngOnInit();

    this.SetInteractiveButtons([
      InteractiveButtons.SafeSave(this.onSubmit.bind(this)),
    ]);

    this.GetRole();
    this.GetPermissions();
  }

  public async onSubmit() {
    const result = await this.StartValidatedRequest<IRole>(() =>
      this.requests.PostRole(this.form.value)
    );

    if (result.item) {
      this.ngdRouter.navigateTo(`/roles?focus=${result.item.id}`);
    }
  }

  private async GetPermissions() {
    const res = await this.StartRequest<string>(() =>
      this.requests.GetPermissions()
    );

    if (res.items) {
      this.permissions = res.items.map((t) => {
        return {
          id: t,
          name: t,
        };
      });
    }
  }

  public async GetRole() {
    const { id } = this.route.snapshot.params;
    if (!id) {
      return;
    }
    const res = await this.StartRequest(() => this.requests.GetRole(id));

    if (res.item) {
      this.form.patchValue(res.item);
    }
  }
}
