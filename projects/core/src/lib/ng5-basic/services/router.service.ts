import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { TeamsService } from './teams.service';
import { ConfigurationService } from './configuration.service';

@Injectable({
  providedIn: 'root',
})
export class RouterService {
  constructor(
    private router: Router,
    private teams: TeamsService,
    private config: ConfigurationService
  ) {}

  public navigateTo(path: string, extras = {}) {
    this.router.navigateByUrl(this.routerLink(path), extras);
  }

  public navigatePublic(path: string, extras = {}) {
    this.router.navigateByUrl(this.publicLink(path), extras);
  }

  public routerLink(path: string = '', extras = {}): string {
    const team = this.teams.CurrentSelectedTeam;
    const t = `/${team || ''}${path}`;
    return t;
  }

  public publicLink(path: string) {
    return '/' + this.config.language.value + path;
  }
}
