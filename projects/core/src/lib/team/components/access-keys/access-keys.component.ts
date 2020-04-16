import { Component, OnInit } from '@angular/core';

import {
  PageContainerAction,
  IInteractiveNote,
  IAccessKey,
} from '../../../ng5-basic/definitions';
import { NgdBaseComponent } from '../../../ng5-basic/services/ngd-base.component';
import { TeamsService } from '../../../ng5-basic/services/teams.service';
import { ConfirmService } from '../../../ng5-basic/services/confirm.service';
import { ConfigurationService } from '../../../ng5-basic/services/configuration.service';
import { RequestsService } from '../../../ng5-basic/services/requests.service';
import { RouterService } from '../../../ng5-basic/services/router.service';
import { Router } from '@angular/router';
import { UserService } from '../../../ng5-basic/services/user.service';

const NoAccessKey: IInteractiveNote = {
  description: 'no_access_keys',
  animation: 'warning',
};

@Component({
  selector: 'ng-access-keys',
  templateUrl: './access-keys.component.html',
  styleUrls: ['./access-keys.component.scss'],
})
export class AccessKeysComponent extends NgdBaseComponent implements OnInit {
  public accessKeys = [];
  public shortMode = true;

  public note: IInteractiveNote;
  public defaultActions: Array<PageContainerAction> = [
    {
      type: 'ICON',
      icon: 'icon-settings',
      className: 'key-edit-icon',
      onClick: (params) => {
        this.editAccessKey(params.accessKey);
      },
      title: this.config.translate('edit_access_key'),
    },
    {
      type: 'ICON',
      onClick: (params) => {
        this.deleteAccessKey(params.accessKey);
      },
      className: 'access-key-delete-icon',
      icon: 'icon-delete',
      title: this.config.translate('delete_accessـkey'),
    },
  ];

  public teamActions: Array<PageContainerAction> = [];

  constructor(
    public teamsService: TeamsService,
    public requests: RequestsService,
    public config: ConfigurationService,
    public ngdRouter: RouterService,
    public user: UserService,
    public router: Router,
    public confirm: ConfirmService
  ) {
    super();
  }

  public toggle() {
    this.shortMode = !this.shortMode;
  }

  editAccessKey(id: number) {
    this.router.navigateByUrl('/access-key/' + id);
  }

  ngOnInit() {
    this.ComponentSubscription(
      this.user.AccessKeys.subscribe((accessKeys) => {
        this.accessKeys = accessKeys;
        this.teamActions = this.defaultActions;

        if (this.accessKeys.length === 0) {
          this.note = NoAccessKey;
        } else {
          this.note = null;
        }
      })
    );
    this.SetInteractiveButtons([
      {
        icon: 'icon-add',
        key: 'add',
        keyboardShortcut: 'n',
        onPress: this.createAccessToken.bind(this),
      },
    ]);

    this.StartRequest<IAccessKey>(() => this.requests.GetAccessKeys()).then(
      (result) => {
        if (result && result.items) {
          this.user.AccessKeys.next([]);
          for (const key of result.items) {
            this.user.InsertAccessKey(key);
          }
        }
      }
    );
  }

  public deleteAccessKey(team) {
    this.confirm
      .open({
        content: this.config.translate('delete_access_key_confirmation'),
      })
      .subscribe(({ type }) => {
        if (type !== 'CONFIRMED') {
          return;
        }
        this.StartRequest<any>(() =>
          this.requests.DeleteAccessKey(team.key)
        ).then((result) => {
          if (result.item) {
            this.config.ShowToast({
              message: this.config.translate('access_key_has_been_deleted'),
              type: 'WARNING',
            });

            this.user.DeleteAccessKey(result.item);
          }
        });
      });
  }

  public createAccessToken() {
    this.router.navigateByUrl('/new-access-key');
  }
}
