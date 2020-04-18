import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { NgdBaseComponent } from '../../../ng5-basic/services/ngd-base.component';
import { UserService } from '../../../ng5-basic/services/user.service';
import { TeamsService } from '../../../ng5-basic/services/teams.service';
import { ConfigurationService } from '../../../ng5-basic/services/configuration.service';
import { RequestsService } from '../../../ng5-basic/services/requests.service';
import { RouterService } from '../../../ng5-basic/services/router.service';
import { IResponseErrorItem } from 'response-type';
import { ERROR_CODES } from '../../../ng5-basic/services/common';
import { Router, ActivatedRoute } from '@angular/router';
import { RoleService } from '../../role.service';
import { IRole, IAccessKey } from '../../../ng5-basic/definitions';

function accessKeyValidator(form): IResponseErrorItem[] {
  const errors: IResponseErrorItem[] = [];

  if (!form.name) {
    errors.push({
      location: 'name',
      message: ERROR_CODES.REQUIRED_FIELD,
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
  selector: 'ng-access-key-form',
  templateUrl: './access-key-form.component.html',
  styleUrls: ['./access-key-form.component.scss'],
})
export class AccessKeyFormComponent extends NgdBaseComponent implements OnInit {
  public roles: Array<{ id: any; name: any }> = [];

  public isEditing = true;
  public validator = accessKeyValidator;
  public form = new FormGroup({
    name: new FormControl(''),
    id: new FormControl(null),
    description: new FormControl(''),
    user: new FormControl(),
    team: new FormControl(),
    roles: new FormControl([]),
  });

  constructor(
    public requests: RequestsService,
    public user: UserService,
    public config: ConfigurationService,
    public teams: TeamsService,
    public ngdRouter: RouterService,
    public router: Router,
    private route: ActivatedRoute,
    private roleService: RoleService
  ) {
    super();
  }

  ngOnInit() {
    this.fetchAccessKey();
    this.GetRoles();

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
  }

  async fetchAccessKey() {
    const { id } = this.route.snapshot.params;

    if (!id || isNaN(+id)) {
      return;
    }
    const res = await this.StartRequest(() => this.requests.GetAccessKey(id));

    if (res.item) {
      this.form.patchValue(res.item);
    }
  }

  private async GetRoles() {
    this.StartRequest<IRole>(() => this.requests.GetRoles()).then((result) => {
      if (result && result.items) {
        this.roleService.SetRoles(result.items);
      }
      this.formTouchedElements = {};
      this.res = null;
    });
  }

  public onSubmit() {
    this.StartValidatedRequest<IAccessKey>(() =>
      this.requests.PostAccessKey(this.form.value)
    ).then((result) => {
      if (!result.item) {
        return;
      }

      if (this.form.value.id) {
        this.user.UpdateAccessKey(result.item);
      } else {
        this.config.ShowToast({
          message: this.config.translate('access_key_created'),
          type: 'SUCCESS',
        });
        this.user.InsertAccessKey(result.item);
      }

      if (result.item) {
        this.router.navigateByUrl('/access-keys');
      }
    });
  }
}
