import { Injectable, Inject, EventEmitter } from '@angular/core';
import {
  NgBasicConfig,
  INavigation,
  PagePointerPosition
} from '../definitions';
import { BehaviorSubject } from 'rxjs';
import { IAuthConfig } from '../../auth/definitions';
@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {
  public language = new BehaviorSubject('en');
  public translationsDictionary = {};
  public get Config(): IAuthConfig {
    return this.config.auth || {};
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
