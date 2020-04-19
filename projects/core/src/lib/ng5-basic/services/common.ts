import { debounce, isArray } from 'lodash';
import { IResponse } from 'response-type';
import { Observable, of, BehaviorSubject } from 'rxjs';
import {
  HttpEvent,
  HttpHeaders,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { matchPattern } from 'url-matcher';
import { merge } from 'lodash';
import {
  DataSource,
  IWorkingState,
  InteractiveButton,
  ISmartNavigation,
  INavigation,
} from '../definitions';
import { UrlSegment, UrlSegmentGroup, Route } from '@angular/router';

export function GetNetworkError(): IResponse<any> {
  return {
    error: {
      code: 0,
      message:
        'It seems you are not connected to internet. Please check your connection and try again',
    },
  };
}

export function error(response: IResponse<any>, fieldName: string) {
  if (!response || !response.error || !response.error.errors) {
    return '';
  }
  const $error = response.error.errors.find((x) => x.location === fieldName);
  return $error ? $error.message : '';
}

export function IsSuccessEntity(response: IResponse<any>) {
  return (
    response && response.data && response.data.items && response.data.items[0]
  );
}

export function IsSuccessEmpty(response: IResponse<any>) {
  return (
    response &&
    response.data &&
    response.data.items &&
    response.data.items.length === 0
  );
}

export function IsDataSource(data: DataSource) {
  if (!data.value) {
    return false;
  }
  if (!data.dataSourceId) {
    return false;
  }
  return true;
}

export function handleRoute(
  req: HttpRequest<any>,
  routes,
  prefixAPI: string
): Observable<HttpEvent<any>> {
  const { url, match } = urlMatch(req.url, req.method, routes, prefixAPI);
  const action = routes[url];
  const result = this[action].call(this, req, match);

  const mockResponse = new HttpResponse({
    body: result,
    headers: new HttpHeaders(),
    status: result.data ? 200 : result.error.code,
    statusText: 'OK',
    url: req.url,
  });
  return of(mockResponse);
}

export function urlMatch(
  url: string,
  method: string = null,
  routes,
  prefixAPI
) {
  url = url.replace(prefixAPI, '');
  for (const route of Object.keys(routes)) {
    const urlMethod = route.split(' ');
    let result = '';
    if (urlMethod.length === 2) {
      if (method === null) {
        result = matchPattern(urlMethod[1], url);
      } else {
        if (urlMethod[0].toUpperCase() === method.toUpperCase()) {
          result = matchPattern(urlMethod[1], url);
        }
      }
    } else {
      result = matchPattern(route, url);
    }
    if (result) {
      return {
        url: route,
        match: result,
      };
    }
  }
  return null;
}

export function UpdateOrPrepend(
  element: any,
  context: Array<any>,
  compareKey: any
) {
  let updated = false;
  let newContext;
  newContext = context.map(($el) => {
    if ($el[compareKey] === element[compareKey]) {
      updated = true;
      return element;
    }
    return $el;
  });
  if (!updated) {
    newContext = [element].concat(context);
  }
  return newContext;
}

export function UpdateOrInsert(
  element: any,
  context: Array<any>,
  compareKey: any,
  mergeWithExisting = false
) {
  let updated = false;
  let newContext;
  newContext = context.map(($el) => {
    if ($el[compareKey] === element[compareKey]) {
      updated = true;
      if (mergeWithExisting) {
        return merge($el, element);
      }
      return element;
    }
    return $el;
  });
  if (!updated) {
    newContext = context.concat(element);
  }
  return newContext;
}

export const WorkingStates: BehaviorSubject<Array<
  IWorkingState
>> = new BehaviorSubject([]);

export function parseStorage(key: string) {
  try {
    let value = localStorage.getItem(key);
    if (value) {
      value = JSON.parse(value);
    }
    if (value) {
      return value;
    }
  } catch (error) {
    return null;
  }
  return null;
}

export const LocalStorageGetItem = parseStorage;

export function CurrencyFormat(value, currency = 'pln') {
  if (!currency) {
    console.warn(
      'You intent to format a value without a currency. This is severe issue, you need to track it why.',
      currency,
      value
    );
    return value;
  }
  currency = currency.toLowerCase();
  if (currency === 'pln') {
    return new Intl.NumberFormat('pl-PL', {
      style: 'currency',
      currency: 'PLN',
    }).format(value);
  }
  if (currency === 'euro' || currency === 'eur') {
    return new Intl.NumberFormat('de-DE', {
      style: 'currency',
      currency: 'EUR',
    }).format(value);
  }
}

export function getQuerystring(key) {
  const query = window.location.search.substring(1);
  const vars = query.split('&');

  /* tslint:disable */
  for (let i = 0; i < vars.length; i++) {
    const pair = vars[i].split('=');
    if (pair[0] === key) {
      return pair[1];
    }
  }
  /* tslint:enable */
}

export const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const InteractiveButtons = {
  /**
   * Export to ng-dashboard.
   * Builds a refresh button for the component.
   */
  Refresh: (onPress: (source?: string) => void) => {
    return {
      id: 'ngd-navbar-refresh-icon',
      rotates: true,
      icon: 'icon-refresh',
      key: 'refresh',
      keyboardShortcut: 'r',
      onPress,
    } as InteractiveButton;
  },
  /**
   * Export to ng-dashboard.
   * Builds a list button for component, useful for components that showing a single entity
   * of a list of elemets (a.k. a post of posts)
   */
  List: (onPress: (source?: string) => void) => {
    return {
      id: 'ngd-navbar-list-icon',
      icon: 'icon-list',
      key: 'list',
      keyboardShortcut: 'l',
      onPress,
    };
  },
  /**
   * Export to ng-dashboard.
   * Save button for any component that has a form. Also it will debounce amount
   * of types user presses enter.
   */
  SafeSave: (onPress: (source?: string) => void) => {
    return {
      id: 'ngd-navbar-save-icon',
      icon: 'icon-save',
      key: 'save',
      onPress: debounce(onPress, 500),
    };
  },

  BugReport: (onPress: (source?: string) => void) => {
    return {
      icon: 'icon-bug_report',
      title: 'bug_report',
      id: 'ngd-navbar-bug-report',
      key: 'bug_report_button',
      onPress,
      keyboardShortcut: 'b',
    };
  },
};

export function StoreActionDelete(state: Array<any>, action: any) {
  return state.filter(
    (t) => t.id !== (action.payload.id ? action.payload.id : +action.payload)
  );
}

export function StoreActionUpdate(state: Array<any>, action: any) {
  return state.map((t) => {
    if (t.id === action.payload.id) {
      return action.payload;
    }
    return t;
  });
}

/**
 * @description Returns the language within url (/en/... /pl/wewe)
 * and makes sure to get the 2 char lang correctly.
 */
export function ExtractLanguageFromPathname(url = '') {
  url = url.toLowerCase();

  if (!url.startsWith('/')) {
    return null;
  }

  if (url.length < 3) {
    return null;
  }

  if (url.length > 4 && url.substr(3, 1) !== '/') {
    return null;
  }

  if (url.length > 3) {
    url = url.substr(0, 3);
  }

  url = url.replace('/', '');

  if (url.match(/[a-z]{2}/)) {
    return url;
  }

  return null;
}

export function GetBestPossibleLanguage(pathname) {
  let lang = 'en';
  if (getQuerystring('language')) {
    return getQuerystring('language') as any;
  } else {
    lang = parseStorage('language') || 'en';
  }

  if (pathname && ExtractLanguageFromPathname(pathname)) {
    return ExtractLanguageFromPathname(pathname);
  }

  return lang;
}

/**
 * @description Converts ISmartNaivgation to SearchTerms item
 */
export function ToSearchTerms(
  items: Array<ISmartNavigation>,
  translationDictionary = {}
) {
  const data = CastTermsToSearch(items, translationDictionary);
  let flatten = [];
  data.forEach((item) => {
    if (isArray(item)) {
      flatten = [...flatten, ...item];
    }
  });

  return flatten;
}

export function CastTermsToSearch(
  items: Array<ISmartNavigation>,
  translationDictionary = {}
) {
  return items.map((item: ISmartNavigation) => {
    if (item.children) {
      return CastTermsToSearch(item.children, translationDictionary);
    }
    const id = `${Math.random()}`;
    return {
      id,
      key: id || item.title,
      title: translationDictionary[item.title] || '',
      navigatesByUri: item.link,
      description: translationDictionary[item.description] || '',
      keywords: translationDictionary[item.keywords] || '',
    };
  });
}

export function IsMobile() {
  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  ) {
    return true;
  }
  return false;
}

export function getMenuItemByKey(
  id: string,
  items: Array<INavigation>
): INavigation {
  for (const item of items) {
    if (item.children) {
      const t = getMenuItemByKey(id, item.children);
      if (t) {
        return t;
      }
    }
    if (item.id === id) {
      return item;
    }
  }
  return null;
}

export function ToArray(object): Array<{ key: any; value: any }> {
  if (!object) {
    return [];
  }
  const res = [];
  const keys = Object.keys(object);
  for (const key of keys) {
    res.push({
      key,
      value: object[key],
    });
  }
  return res;
}

export function LanguagePrefixMatcher(
  segments: UrlSegment[],
  segmentGroup: UrlSegmentGroup,
  route: Route
) {
  const parts = [/(en|pl)+/];
  const posParams: { [key: string]: UrlSegment } = {};
  const consumed: UrlSegment[] = [];

  let currentIndex = 0;

  for (const part of parts) {
    if (currentIndex >= segments.length) {
      return null;
    }
    const current = segments[currentIndex];

    if (!part.test(current.path)) {
      return null;
    }

    posParams.lang = current;
    consumed.push(current);
    currentIndex++;
  }

  if (
    route.pathMatch === 'full' &&
    (segmentGroup.hasChildren() || currentIndex < segments.length)
  ) {
    return null;
  }

  return { consumed, posParams };
}

export const ERROR_CODES = {
  REQUIRED_FIELD: 'required_field',
};

export function DateFormat(date) {
  return new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
}
