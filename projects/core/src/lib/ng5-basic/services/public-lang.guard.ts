import { Injectable } from '@angular/core';
import {
  CanActivate,
  Router,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { ConfigurationService } from './configuration.service';
const REGEX_LANGUAGE = /^\/([a-z]{2})(\/.+?)?/;

@Injectable()
export class PublicLangaugeAuth implements CanActivate {
  constructor(private router: Router, private config: ConfigurationService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const path = state.url;

    const match = path.match(REGEX_LANGUAGE);
    if (!match) {
      // tslint:disable-next-line
      this.router.navigate(<any[]>(<unknown>''));
      return false;
    }

    this.config.SetLanguage(match[1]);

    return true;
  }
}
