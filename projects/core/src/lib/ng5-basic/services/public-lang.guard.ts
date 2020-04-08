import { Injectable } from '@angular/core';
import {
  CanActivate,
  Router,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { ConfigurationService } from './configuration.service';
import { ExtractLanguageFromPathname } from './common';

@Injectable()
export class PublicLangaugeAuth implements CanActivate {
  constructor(private router: Router, private config: ConfigurationService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const pathname = state.url;

    if (!ExtractLanguageFromPathname(pathname)) {
      // tslint:disable-next-line
      this.router.navigate(<any[]>(<unknown>''));
      return false;
    }

    this.config.SetLanguage(ExtractLanguageFromPathname(pathname));

    return true;
  }
}
