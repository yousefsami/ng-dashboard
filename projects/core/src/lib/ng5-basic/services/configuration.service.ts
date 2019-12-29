import { Injectable, Inject, EventEmitter } from '@angular/core';
import { NgBasicConfig, INavigation, InteractiveButton } from '../definitions';
import { BehaviorSubject } from 'rxjs';
import { IAuthConfig } from '../../auth/definitions';
@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {
  public language = new BehaviorSubject('en');
  public NavbarInteractiveButtons: BehaviorSubject<
    InteractiveButton[]
  > = new BehaviorSubject([]);
  public translationsDictionary = {};
  public get Config(): IAuthConfig {
    return this.config.auth || {};
  }

  public SetInteractiveButtons(buttons: InteractiveButton[]) {
    this.NavbarInteractiveButtons.next(buttons);
  }

  constructor(@Inject('config') public config: NgBasicConfig) {}

  public getNavigationItems(): INavigation[] {
    return this.config.navigation;
  }

  public API(affix): string {
    return (this.config.api || '') + affix;
  }
  public get Github(): boolean {
    return this.config.github;
  }
  public get Navigation(): INavigation[] {
    return this.config.navigation;
  }
}
