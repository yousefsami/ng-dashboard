import { Injectable } from '@angular/core';
import {
  CanActivate,
  Router,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';

const TEAM_ID_INPATH_REGEX = /^\/([0-9]+)\/?(.+)?/;

@Injectable()
export class TeamGuardAuth implements CanActivate {
  constructor(private router: Router) {}

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
    return true;
  }
}
