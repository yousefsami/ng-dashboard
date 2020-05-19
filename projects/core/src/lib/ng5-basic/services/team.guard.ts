import { Injectable } from '@angular/core';
import {
  CanActivate,
  Router,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { TeamsService } from './teams.service';

const TEAM_ID_INPATH_REGEX = /^\/([0-9]+)\/?(.+)?/;

@Injectable()
export class TeamGuardAuth implements CanActivate {
  constructor(private router: Router, private teams: TeamsService) {}

  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean> {
    const path = state.url;
    if (!path.match(TEAM_ID_INPATH_REGEX)) {
      // tslint:disable-next-line
      this.router.navigate(<any[]>(<unknown>''));
      return false;
    }

    // If there is a team in url, we should change it.
    const team = +path.match(TEAM_ID_INPATH_REGEX)[1];

    if (!isNaN(team)) {
      this.teams.SelectTeam(team);
    }
    return true;
  }
}
