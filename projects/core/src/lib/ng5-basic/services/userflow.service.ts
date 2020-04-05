import { Injectable } from '@angular/core';
import { IGeneralUserResponse } from '../definitions';
import { IResponse } from 'response-type';
import { IsSuccessEntity } from './common';
import { UserService } from './user.service';
import { TeamsService } from './teams.service';
import { CookiesService } from 'ngx-universal-cookies';
import { ConfigurationService } from './configuration.service';
import { RequestsService } from './requests.service';

@Injectable()
export class UserFlowService {
  constructor(
    private user: UserService,
    private teams: TeamsService,
    private cookie: CookiesService,
    private requests: RequestsService,
    private config: ConfigurationService
  ) {}

  /**
   * After any login, updating users, call this function
   * to update the team and user data.
   */
  async syncUserCoreAndTeams(): Promise<boolean> {
    const token = this.cookie.get('token');
    let res: IResponse<IGeneralUserResponse>;
    try {
      res = await this.requests.GetUserGeneralData(token);
    } catch (error) {
      console.warn('Network seems to be down - we cannot read the API.');
      return false;
    }

    if (IsSuccessEntity(res)) {
      this.WriteGeneralInformation(res.data.items[0]);
      return true;
    }
    return false;
  }

  public WriteGeneralInformation(data) {
    const { user, teams, notifications, token } = data;
    this.user.SetUser(user);
    this.user.SetToken(token);
    this.config.Notifications.next(notifications);
    this.teams.SetTeams(teams);
    this.teams.SelectTeam(teams[0].id);
  }
}
