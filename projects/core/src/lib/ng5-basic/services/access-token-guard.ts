import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { CookiesService } from 'ngx-universal-cookies';
import { RouterService } from './router.service';
import { TeamsService } from './teams.service';

@Injectable()
export class AccessWithTokenGuard implements CanActivate {
  constructor(private teams: TeamsService, private cookie: CookiesService) {}

  async canActivate(): Promise<boolean> {
    try {
      const team = this.teams.CurrentSelectedTeam || this.cookie.get('team');
      const token = this.cookie.get('token');

      if (!token) {
        return false;
      }

      if (!team || this.teams.TeamsStore.value.length === 0) {
        return true;
        // return this.config.syncUserCoreAndTeams();
      }

      return true;
    } catch (error) {
      console.error('Here we got an error because of API request');
      // Intentionally left blank. If cookie is wrong, no errors should happen
      console.error(error);
    }
  }
}

@Injectable()
export class NoAccessTokenGuard implements CanActivate {
  constructor(
    private accessTokenGuard: AccessWithTokenGuard,
    private ngdRouter: RouterService
  ) {}

  async canActivate(): Promise<boolean> {
    if (await this.accessTokenGuard.canActivate()) {
      this.ngdRouter.navigateTo('/dashboard');
      return false;
    }
    return true;
  }
}
