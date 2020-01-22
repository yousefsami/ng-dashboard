import { Injectable, Inject, ApplicationRef } from '@angular/core';
import Toastify from 'toastify-js';

import {
  NgBasicConfig,
  INavigation,
  InteractiveButton,
  Team,
  TeamsConfig,
  DockedMenu,
  IToastMessage
} from '../definitions';
import { BehaviorSubject } from 'rxjs';
import { IAuthConfig } from '../../auth/definitions';
import { NgDashboardPl } from 'projects/core/src/translations/pl';
import { NgDashboardEn } from 'projects/core/src/translations/en';

const messageHistory = {};
export function ShowToast(data: IToastMessage) {
  const styles = {
    ERROR: '#9e4651',
    INFO: '#5586c0',
    SUCCESS: 'linear-gradient(to right, #61a372, #96c93d)',
    WARNING: '#ff7800'
  };

  const text = `${data.title || ''} ${data.message}`;
  const now = new Date().getTime();
  const expire = now + 1000;
  if (messageHistory[text] && messageHistory[text].expire > now) {
    return;
  }
  messageHistory[text] = {
    expire
  };

  const words = text.split(' ').length;
  const readingTime = 0.25 * words * 1000 + 1000;

  Toastify({
    text,
    duration: data.duration || readingTime,
    close: true,
    gravity: 'top', // `top` or `bottom`
    position: 'right', // `left`, `center` or `right`
    backgroundColor: styles[data.type || 'INFO'],
    stopOnFocus: true, // Prevents dismissing of toast on hover
    onClick: () => data.onClick(data) // Callback after click
  }).showToast();
}

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {
  public language = new BehaviorSubject('en');
  public NavbarInteractiveButtons: BehaviorSubject<
    InteractiveButton[]
  > = new BehaviorSubject([]);

  public SearchTerms: BehaviorSubject<Array<any>> = new BehaviorSubject([]);
  public NavigationItems: BehaviorSubject<
    Array<INavigation>
  > = new BehaviorSubject([]);
  public SelectedTeam: BehaviorSubject<Team> = new BehaviorSubject(null);
  public DockedMenu: BehaviorSubject<Array<DockedMenu>> = new BehaviorSubject(
    []
  );
  public TeamsConfig: BehaviorSubject<TeamsConfig> = new BehaviorSubject({});
  public Teams: BehaviorSubject<Array<Team>> = new BehaviorSubject([]);

  public translationsDictionary: BehaviorSubject<any> = new BehaviorSubject({});
  public get Config(): IAuthConfig {
    return this.config.auth || {};
  }

  public ShowToast = ShowToast;
  public SetInteractiveButtons(buttons: InteractiveButton[]) {
    this.NavbarInteractiveButtons.next(buttons);
  }

  constructor(
    @Inject('config') public config: NgBasicConfig,
    private ref: ApplicationRef
  ) {}

  private hasChangedSinceLastRefresh(data: any, key: string) {
    let cached;
    let raw;
    try {
      raw = localStorage.getItem(`change_detect_values_${key}`);
      cached = JSON.parse(raw);
    } catch (error) {}
    localStorage.setItem(`change_detect_values_${key}`, JSON.stringify(data));

    if (!cached || JSON.stringify(data) !== raw) {
      return true;
    }
    return false;
  }

  public getNavigationItems(): INavigation[] {
    const programDefaultNaviation = this.NavigationItems.value;

    if (
      this.hasChangedSinceLastRefresh(programDefaultNaviation, 'navigation')
    ) {
      localStorage.setItem(
        `sidebar_items`,
        JSON.stringify(programDefaultNaviation)
      );
      return programDefaultNaviation;
    }

    let menu;
    try {
      menu = JSON.parse(localStorage.getItem(`sidebar_items`));
    } catch (error) {}

    if (menu) {
      return menu;
    }
    return programDefaultNaviation;
  }

  public SetLanguage(lang: string, keys: any = {}) {
    this.translationsDictionary.next({
      ...keys
    });
    this.language.next(lang);
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
