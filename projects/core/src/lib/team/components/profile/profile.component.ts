import { Component, OnInit, ViewChild } from '@angular/core';
import { debounce } from 'lodash';
import { IResponse } from 'response-type';
import { NgMediaComponent } from 'ng-media';

import { Router } from '@angular/router';
import { ProfileCommon } from '../profile.common';
import { ProfileService } from '../../profile.service';
import { HttpEvent, HttpEventType } from '@angular/common/http';
import { RequestsService } from '../../../ng5-basic/services/requests.service';
import { ConfigurationService } from '../../../ng5-basic/services/configuration.service';
import { UserService } from '../../../ng5-basic/services/user.service';
import { ConfirmService } from '../../../ng5-basic/services/confirm.service';
import { ModalService } from '../../../ng5-basic/services/modal.service';
import { ProfileAvatarComponent } from '../profile-avatar/profile-avatar.component';
import { RouterService } from '../../../ng5-basic/services/router.service';

@Component({
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  providers: [],
})
export class ProfileComponent extends ProfileCommon implements OnInit {
  @ViewChild(NgMediaComponent, { static: false })
  public attachments: NgMediaComponent;

  constructor(
    public requests: RequestsService,
    public user: UserService,
    public config: ConfigurationService,
    public confirm: ConfirmService,
    public modal: ModalService,
    public router: Router,
    public ngdRouter: RouterService,
    public profileService: ProfileService
  ) {
    super(requests, user, config, profileService);
  }

  async ngOnInit() {
    this.fetch();

    this.SetInteractiveButtons([
      {
        icon: 'icon-save',
        key: 'save',
        onPress: debounce(this.onSubmit.bind(this), 500),
      },
    ]);
  }

  private async fetch() {
    this.form.patchValue({
      ...this.user.UserSnapshot,
    });
  }

  public get language() {
    return this.config.language.value;
  }

  public changeLanguage(lang: string) {
    localStorage.setItem('language', JSON.stringify(lang));
    window.location.reload();
  }

  public async deleteAccount() {
    this.confirm
      .open({
        title: this.config.translate('delete_confirm'),
        content: this.config.translate('delete_confirm_message'),
      })
      .subscribe(async ({ type }) => {
        if (type === 'CANCELED') {
          return;
        }
        const res = await this.StartRequest<any>(() =>
          this.requests.DeleteUser()
        );
        if (res.item) {
          this.config.ShowToast({
            message: this.config.translate('your_account_deleted'),
            type: 'ERROR',
          });
          this.ngdRouter.navigatePublic('/login');
        }
      });
  }

  private onDialogConfirmed() {
    this.working = true;
    this.requests
      .UploadToCloud(this.profileService.lastCropData.file)
      .subscribe(
        (event: HttpEvent<any>) => {
          if (event.type === HttpEventType.Response) {
            const response: IResponse<any> = event.body;
            const items =
              response && response.data && response.data.items
                ? response.data.items
                : [];

            this.uploadFinish(items);
            this.working = false;
          }
          if (event.type === HttpEventType.UploadProgress) {
            // @todo: Ng Dashboard should cover the progress, not only working.
          }
        },
        (response) => {
          console.error(response);
          this.working = false;
        }
      );
  }

  public OpenAvatarDialog() {
    this.modal
      .open({
        title: 'Edit profile picture',
        content: ProfileAvatarComponent,
      })
      .subscribe(({ type }) => {
        if (type === 'CONFIRMED') {
          this.onDialogConfirmed();
        }
      });
  }

  public get Form() {
    return this.form.value;
  }
}
