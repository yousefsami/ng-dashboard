import { Component } from '@angular/core';
import { ProfileCommon } from '../profile.common';
import { ProfileService } from '../../profile.service';
import { CookiesService } from 'ngx-universal-cookies';
import { ConfigurationService } from '../../../ng5-basic/services/configuration.service';
import { UserService } from '../../../ng5-basic/services/user.service';
import { RequestsService } from '../../../ng5-basic/services/requests.service';

@Component({
  selector: 'ng-profile-avatar',
  templateUrl: './profile-avatar.component.html',
  styleUrls: ['./profile-avatar.component.scss'],
})
export class ProfileAvatarComponent extends ProfileCommon {
  constructor(
    public requests: RequestsService,
    public user: UserService,
    public config: ConfigurationService,
    public profileService: ProfileService,
    public cookie: CookiesService
  ) {
    super(requests, user, config, profileService, cookie);
  }

  public get API() {
    return this.config.config.api + '/api';
  }

  public cropChange(event: any) {
    this.profileService.lastCropData = event;
  }
}
