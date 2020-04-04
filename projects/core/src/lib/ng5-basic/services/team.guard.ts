import { Injectable } from '@angular/core';
import {
  CanActivate,
  Router,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
const REGEX_LANGUAGE = /^\/([0-9]+)\/?(.+)?/;

@Injectable()
export class TeamGuardAuth implements CanActivate {
  constructor(private router: Router) {}

  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean> {
    const path = state.url;
    if (!path.match(REGEX_LANGUAGE)) {
      // tslint:disable-next-line
      this.router.navigate(<any[]>(<unknown>''));
      return false;
    }
    return true;
  }
}
