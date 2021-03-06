import { Injectable } from '@angular/core';
import { IGeneralUserResponse } from '../definitions';
import { IResponse, IsSuccess } from 'response-type';
import { UserService } from './user.service';
import { TeamsService } from './teams.service';
import { CookiesService } from 'ngx-universal-cookies';
import { ConfigurationService } from './configuration.service';
import { RequestsService } from './requests.service';
import { Location } from '@angular/common';
import { AuthPublicService } from '../../auth/auth-public.service';
import { RouterService } from './router.service';

const URL_WITH_TEAM_REGEX = /\/([\d]+)\/(.+)/;

@Injectable()
export class UserFlowService {
  constructor(
    private user: UserService,
    private teams: TeamsService,
    private cookie: CookiesService,
    private requests: RequestsService,
    public auth: AuthPublicService,
    public location: Location,
    private config: ConfigurationService,
    private ngdRouter: RouterService
  ) {}

  /**
   * After any login, updating users, call this function
   * to update the team and user data.
   */
  async syncUserCoreAndTeams(): Promise<boolean> {
    const token = this.user.GetToken();
    let res: IResponse<IGeneralUserResponse>;
    try {
      res = await this.requests.GetUserGeneralData(token);
    } catch (error) {
      console.warn('Network seems to be down - we cannot read the API.');
      return false;
    }

    if (IsSuccess(res)) {
      this.WriteGeneralInformation(res.data);
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

    if (!this.teams.CurrentSelectedTeam) {
      this.teams.SelectTeam(teams[0].id);
    }
  }

  /**
   * @description Use this function when the application starts,
   * if there is a token, it will communicate with server to get the teams information
   */
  public async CollectInformationFromToken() {
    const token = this.user.GetToken();
    if (!token) {
      return;
    }
    this.user.SetToken(token);

    if (this.syncUserCoreAndTeams()) {
      const params = this.location.path().match(URL_WITH_TEAM_REGEX);
      if (!params) {
        return;
      }
      if (!isNaN(+params[1])) {
        const teamId = +params[1];

        if (this.teams.TeamsStore.value.find((team) => team.id === teamId)) {
          this.teams.SelectTeam(teamId);
        }
      }
    }
  }

  public SubscribeToAuthentication(
    onLogin = (event: any) => {},
    onRevoke = (event: any) => {},
    onTokenDestroied = (res: any) => {}
  ) {
    this.auth.events.subscribe((event) => {
      if (event.type === 'SIGNUP_SUCCESS') {
        this.config.ShowToast({
          title: this.config.translate('signup_success_title'),
          message: this.config.translate('signup_success_message'),
          type: 'SUCCESS',
        });
      }

      if (event.type === 'LOGIN_SUCCESS' || event.type === 'SIGNUP_SUCCESS') {
        if (onLogin) {
          onLogin(event);
        }
        const { teams } = event.payload;
        if (teams && teams[0]) {
          this.teams.SelectTeam(teams[0].id);
        }
        this.ngdRouter.navigateTo('/dashboard');
      }
      if (event.type === 'REVOKE' && this.cookie.get('token')) {
        if (onRevoke) {
          onRevoke(event);
        }
        this.requests.UserSignout(this.cookie.get('token')).then((res) => {
          if (onTokenDestroied) {
            onTokenDestroied(res);
          }
        });

        localStorage.clear();
        this.cookie.remove('token');
      }
    });
  }
}
