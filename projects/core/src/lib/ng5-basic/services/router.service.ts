import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { TeamsService } from './teams.service';

@Injectable({
  providedIn: 'root',
})
export class RouterService {
  public CurrentLanguage: BehaviorSubject<string> = new BehaviorSubject('en');

  constructor(private router: Router, private teams: TeamsService) {}

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
    return '/' + this.CurrentLanguage.value + path;
  }
}
