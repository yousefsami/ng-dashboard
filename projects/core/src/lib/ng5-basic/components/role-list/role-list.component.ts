import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import {
  IResponsiveTableRow,
  IResponsiveTableAction,
  IInteractiveNote,
  IRole,
} from '../../definitions';
import { NgdRouteEntryPointComponent } from '../../services/NgdEntryRoute';
import { ConfigurationService } from '../../services/configuration.service';
import { ModalService } from '../../services/modal.service';
import { InteractiveButtons } from '../../services/common';
import { RequestsService } from '../../services/requests.service';
import { RouterService } from '../../services/router.service';
import { RoleService } from '../../../team/role.service';

const NoRolesNote: IInteractiveNote = {
  title: 'roles',
  description: 'no_roles_defined',
  animation: 'warning',
};

@Component({
  templateUrl: './role-list.component.html',
  styleUrls: ['./role-list.component.scss'],
})
export class RoleListComponent extends NgdRouteEntryPointComponent
  implements OnInit {
  public note: IInteractiveNote = null;
  public roles: IRole[] = [];
  public rows: IResponsiveTableRow[] = [];

  public actions: IResponsiveTableAction[] = [
    {
      title: 'delete_account',
      class: 'bank-account-delete-btn',
      icon: 'icon-delete',
      keyCode: 13,
      onClick: (row: IRole) => {
        if (row.readonly) {
          this.config.ShowToast({
            message: this.config.translate('readonly_roles_cannot_be_deleted'),
            type: 'ERROR',
          });
          return;
        }
        this.deleteRole(row);
      },
    },
  ];

  constructor(
    public title: Title,
    private requests: RequestsService,
    private ngdRouter: RouterService,
    private roleService: RoleService,
    private confirm: ModalService,
    public route: ActivatedRoute,
    public meta: Meta,
    public config: ConfigurationService
  ) {
    super(meta, title, route, config);
  }

  public RowRouterLink(row: IRole) {
    return this.ngdRouter.routerLink('/role/' + row.id);
  }

  public async deleteRole(role: IRole) {
    this.confirm
      .open({
        content: this.config.translate('delete_role_confirmation', {
          title: role.title,
        }),
      })
      .subscribe(async ({ type }) => {
        if (type === 'CONFIRMED') {
          const result = await this.StartListRequest<any>(() =>
            this.requests.DeleteRole(role.id)
          );
          if (result.items) {
            for (const item of result.items) {
              this.roleService.DeleteRole(item);
            }
          }
        }
      });
  }

  ngOnInit() {
    super.ngOnInit();

    this.SetInteractiveButtons([
      InteractiveButtons.Refresh(this.GetRoles.bind(this)),
      {
        icon: 'icon-add',
        key: 'add',
        keyboardShortcut: 'n',
        onPress: this.createNew.bind(this),
      },
    ]);

    this.GetRoles();
  }

  public createNew() {
    this.ngdRouter.navigateTo('/new-role');
  }

  public RolesToRows(roles: IRole[]): IResponsiveTableRow[] {
    return roles.map((role) => {
      const permissions = role.permissions || [];

      let value = permissions.length.toString();
      if (permissions.indexOf('TEAM:*') >= 0) {
        value = this.config.translate('super_user');
      }

      return {
        title: role.title,
        entity: role,
        cells: [
          {
            label: this.config.translate('permission_count'),
            value,
          },
        ],
        routerLink: this.RowRouterLink(role),
      };
    });
  }

  public async GetRoles() {
    this.ComponentSubscription(
      this.roleService.RolesStore.subscribe((roles) => {
        this.roles = roles;
        if (roles.length === 0) {
          this.note = NoRolesNote;
        } else {
          this.note = null;
        }
        this.rows = this.RolesToRows(roles);
      })
    );

    this.StartListRequest<IRole>(() => this.requests.GetRoles()).then(
      (result) => {
        if (result.items) {
          this.roleService.SetRoles(result.items);
        }
      }
    );
  }
}
