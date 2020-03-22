import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ConfigurationService } from './configuration.service';

@Injectable({
  providedIn: 'root'
})
export class RouterService {
  constructor(private router: Router, private config: ConfigurationService) {}

  public navigateTo(path: string, extras = null) {
    const { to, params } = this.config.RouteFilter(path, extras);
    this.router.navigateByUrl(to, params);
  }

  public routerLink(path: string = '', extras = null): string {
    const { to } = this.config.RouteFilter(path, extras);
    return to;
  }
}
