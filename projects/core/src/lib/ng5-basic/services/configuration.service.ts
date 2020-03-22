import { Injectable, Inject, ApplicationRef } from '@angular/core';
import Toastify from 'toastify-js';

import {
  NgBasicConfig,
  INavigation,
  InteractiveButton,
  Team,
  TeamsConfig,
  DockedMenu,
  IToastMessage,
  INotification,
  INotificationEvent
} from '../definitions';
import { BehaviorSubject } from 'rxjs';
import { IAuthConfig } from '../../auth/definitions';

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
  public GlobalInteractiveButtons: BehaviorSubject<
    InteractiveButton[]
  > = new BehaviorSubject([]);

  public SearchTerms: BehaviorSubject<Array<any>> = new BehaviorSubject([]);
  public ToolbarComponent: BehaviorSubject<any> = new BehaviorSubject(null);
  public NotificationState: BehaviorSubject<
    'OPEN' | 'CLOSE'
  > = new BehaviorSubject('CLOSE');
  public Notifications: BehaviorSubject<
    Array<INotification>
  > = new BehaviorSubject([]);
  public NotificationEvent: BehaviorSubject<
    INotificationEvent
  > = new BehaviorSubject(null);
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

  /**
   * Any route in (navigateByUrl) will pass through here.
   */
  public RouteFilter(to, params = null) {
    return {
      to,
      params
    };
  }

  /**
   * @description Sets interactive buttons that should be available in every screen.
   */
  public SetGlobalInteractiveButtons(buttons: InteractiveButton[]) {
    this.GlobalInteractiveButtons.next(buttons);
  }

  constructor(
    @Inject('config') public config: NgBasicConfig,
    private ref: ApplicationRef
  ) {
    if (typeof window !== 'undefined') {
      // Helps developers to understand the missing translation keys
      /* tslint:disable */
      window['ngd_missing_translate'] = {};
      /* tslint:enable */
    }
  }

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

  public DismissToasts() {
    const toasts: Array<any> = Array.from(
      document.querySelectorAll('.toast-close')
    );
    for (const toast of toasts) {
      toast.click();
    }
  }

  /**
   * Send a notification to user dashboard. Call this function for adding a new notification to user,
   * it's our exported API
   * @param notification INotification
   */
  public Notify(notification: INotification | Array<INotification>) {
    let items = [];
    if (Array.isArray(notification)) {
      items = [...notification];
      if (notification.find(t => t.importance === 'IMPORTANT')) {
        this.ShowToast({
          message: `You have ${3} new notifications`,
          duration: 2000,
          onClick: () => {
            this.NotificationState.next('OPEN');
            this.DismissToasts();
          }
        });
      }
    } else {
      items = [notification];
      if (notification.importance === 'IMPORTANT') {
        this.ShowToast({
          title: notification.title,
          message: notification.message,
          onClick: () => {
            this.NotificationState.next('OPEN');
            this.DismissToasts();
          }
        });
      }
    }

    items = items.map(t => {
      return {
        ...t,
        icon: t.icon ? t.icon : 'icon-info',
        id: t.id ? t.id : 'auto_id_' + Math.random()
      };
    });

    this.Notifications.next([...items, ...this.Notifications.value]);
  }

  /**
   * @description Returns the object of translations, for bulk actions
   */
  public translations(): any {
    return this.translationsDictionary.value;
  }

  /**
   * @description Get translate key, and replace params (Objecy or Array) of placeholders
   */
  public translate(key: string, params: any = null): any {
    const dic = this.translationsDictionary.value;
    if (!key || typeof key !== 'string') {
      return '';
    }
    if (!dic[key]) {
      /* tslint:disable */
      window['ngd_missing_translate'][key] = false;
      /* tslint:enable */

      return key.split('_').join(' ');
    }

    if (
      params !== null &&
      typeof params === 'object' &&
      params.constructor.name === 'Array'
    ) {
      return replacePlaceHolderByArray(dic[key], params);
    } else if (params !== null && typeof params === 'object') {
      return replacePlaceHolderByObject(dic[key], params);
    }

    return dic[key];
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

function replacePlaceHolderByArray(phrase: string, args = []) {
  // Replaces the first %{} place holder occurence
  let str = phrase;
  const placeholders = phrase.match(/\%\{(.*?)\}/g);

  if (!placeholders || !placeholders.length) {
    return str;
  }
  const regex = /\%\{(.*?)\}/;

  for (let i = 1; i <= placeholders.length; i++) {
    str = str.replace(regex, args[i - 1] || '...');
  }
  return str;
}

function replacePlaceHolderByObject(phrase: string, args = {}) {
  let str = phrase;
  const keys = Object.keys(args);
  for (const key of keys) {
    str = str.replace(new RegExp(`%{${key}}`, 'g'), args[key] || '...');
  }
  return str;
}
