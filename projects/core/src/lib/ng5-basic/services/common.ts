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

export function ResponseContent(response: IResponse<any>) {
  return response &&
    response.data &&
    response.data.items &&
    response.data.items[0]
    ? response.data.items[0]
    : null;
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
      type: item.type,
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

export const TimeZoneArray: Array<{ label: string; value: string }> = [
  { label: '(GMT-12:00) International Date Line West', value: 'Etc/GMT+12' },
  { label: '(GMT-11:00) Midway Island, Samoa', value: 'Pacific/Midway' },
  { label: '(GMT-10:00) Hawaii', value: 'Pacific/Honolulu' },
  { label: '(GMT-09:00) Alaska', value: 'US/Alaska' },
  {
    label: '(GMT-08:00) Pacific Time (US & Canada)',
    value: 'America/Los_Angeles',
  },
  { label: '(GMT-08:00) Tijuana, Baja California', value: 'America/Tijuana' },
  { label: '(GMT-07:00) Arizona', value: 'US/Arizona' },
  {
    label: '(GMT-07:00) Chihuahua, La Paz, Mazatlan',
    value: 'America/Chihuahua',
  },
  { label: '(GMT-07:00) Mountain Time (US & Canada)', value: 'US/Mountain' },
  { label: '(GMT-06:00) Central America', value: 'America/Managua' },
  { label: '(GMT-06:00) Central Time (US & Canada)', value: 'US/Central' },
  {
    label: '(GMT-06:00) Guadalajara, Mexico City, Monterrey',
    value: 'America/Mexico_City',
  },
  { label: '(GMT-06:00) Saskatchewan', value: 'Canada/Saskatchewan' },
  {
    label: '(GMT-05:00) Bogota, Lima, Quito, Rio Branco',
    value: 'America/Bogota',
  },
  { label: '(GMT-05:00) Eastern Time (US & Canada)', value: 'US/Eastern' },
  { label: '(GMT-05:00) Indiana (East)', value: 'US/East-Indiana' },
  { label: '(GMT-04:00) Atlantic Time (Canada)', value: 'Canada/Atlantic' },
  { label: '(GMT-04:00) Caracas, La Paz', value: 'America/Caracas' },
  { label: '(GMT-04:00) Manaus', value: 'America/Manaus' },
  { label: '(GMT-04:00) Santiago', value: 'America/Santiago' },
  { label: '(GMT-03:30) Newfoundland', value: 'Canada/Newfoundland' },
  { label: '(GMT-03:00) Brasilia', value: 'America/Sao_Paulo' },
  {
    label: '(GMT-03:00) Buenos Aires, Georgetown',
    value: 'America/Argentina/Buenos_Aires',
  },
  { label: '(GMT-03:00) Greenland', value: 'America/Godthab' },
  { label: '(GMT-03:00) Montevideo', value: 'America/Montevideo' },
  { label: '(GMT-02:00) Mid-Atlantic', value: 'America/Noronha' },
  { label: '(GMT-01:00) Cape Verde Is.', value: 'Atlantic/Cape_Verde' },
  { label: '(GMT-01:00) Azores', value: 'Atlantic/Azores' },
  {
    label: '(GMT+00:00) Casablanca, Monrovia, Reykjavik',
    value: 'Africa/Casablanca',
  },
  {
    label:
      '(GMT+00:00) Greenwich Mean Time : Dublin, Edinburgh, Lisbon, London',
    value: 'Etc/Greenwich',
  },
  {
    label: '(GMT+01:00) Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna',
    value: 'Europe/Amsterdam',
  },
  {
    label: '(GMT+01:00) Belgrade, Bratislava, Budapest, Ljubljana, Prague',
    value: 'Europe/Belgrade',
  },
  {
    label: '(GMT+01:00) Brussels, Copenhagen, Madrid, Paris',
    value: 'Europe/Brussels',
  },
  {
    label: '(GMT+01:00) Sarajevo, Skopje, Warsaw, Zagreb',
    value: 'Europe/Warsaw',
  },
  { label: '(GMT+01:00) West Central Africa', value: 'Africa/Lagos' },
  { label: '(GMT+02:00) Amman', value: 'Asia/Amman' },
  { label: '(GMT+02:00) Athens, Bucharest, Istanbul', value: 'Europe/Athens' },
  { label: '(GMT+02:00) Beirut', value: 'Asia/Beirut' },
  { label: '(GMT+02:00) Cairo', value: 'Africa/Cairo' },
  { label: '(GMT+02:00) Harare, Pretoria', value: 'Africa/Harare' },
  {
    label: '(GMT+02:00) Helsinki, Kyiv, Riga, Sofia, Tallinn, Vilnius',
    value: 'Europe/Helsinki',
  },
  { label: '(GMT+02:00) Jerusalem', value: 'Asia/Jerusalem' },
  { label: '(GMT+02:00) Minsk', value: 'Europe/Minsk' },
  { label: '(GMT+02:00) Windhoek', value: 'Africa/Windhoek' },
  { label: '(GMT+03:00) Kuwait, Riyadh, Baghdad', value: 'Asia/Kuwait' },
  {
    label: '(GMT+03:00) Moscow, St. Petersburg, Volgograd',
    value: 'Europe/Moscow',
  },
  { label: '(GMT+03:00) Nairobi', value: 'Africa/Nairobi' },
  { label: '(GMT+03:00) Tbilisi', value: 'Asia/Tbilisi' },
  { label: '(GMT+03:30) Tehran', value: 'Asia/Tehran' },
  { label: '(GMT+04:00) Abu Dhabi, Muscat', value: 'Asia/Muscat' },
  { label: '(GMT+04:00) Baku', value: 'Asia/Baku' },
  { label: '(GMT+04:00) Yerevan', value: 'Asia/Yerevan' },
  { label: '(GMT+04:30) Kabul', value: 'Asia/Kabul' },
  { label: '(GMT+05:00) Yekaterinburg', value: 'Asia/Yekaterinburg' },
  { label: '(GMT+05:00) Islamabad, Karachi, Tashkent', value: 'Asia/Karachi' },
  {
    label: '(GMT+05:30) Chennai, Kolkata, Mumbai, New Delhi',
    value: 'Asia/Calcutta',
  },
  { label: '(GMT+05:30) Sri Jayawardenapura', value: 'Asia/Calcutta' },
  { label: '(GMT+05:45) Kathmandu', value: 'Asia/Katmandu' },
  { label: '(GMT+06:00) Almaty, Novosibirsk', value: 'Asia/Almaty' },
  { label: '(GMT+06:00) Astana, Dhaka', value: 'Asia/Dhaka' },
  { label: '(GMT+06:30) Yangon (Rangoon)', value: 'Asia/Rangoon' },
  { label: '(GMT+07:00) Bangkok, Hanoi, Jakarta', value: 'Asia/Bangkok' },
  { label: '(GMT+07:00) Krasnoyarsk', value: 'Asia/Krasnoyarsk' },
  {
    label: '(GMT+08:00) Beijing, Chongqing, Hong Kong, Urumqi',
    value: 'Asia/Hong_Kong',
  },
  { label: '(GMT+08:00) Kuala Lumpur, Singapore', value: 'Asia/Kuala_Lumpur' },
  { label: '(GMT+08:00) Irkutsk, Ulaan Bataar', value: 'Asia/Irkutsk' },
  { label: '(GMT+08:00) Perth', value: 'Australia/Perth' },
  { label: '(GMT+08:00) Taipei', value: 'Asia/Taipei' },
  { label: '(GMT+09:00) Osaka, Sapporo, Tokyo', value: 'Asia/Tokyo' },
  { label: '(GMT+09:00) Seoul', value: 'Asia/Seoul' },
  { label: '(GMT+09:00) Yakutsk', value: 'Asia/Yakutsk' },
  { label: '(GMT+09:30) Adelaide', value: 'Australia/Adelaide' },
  { label: '(GMT+09:30) Darwin', value: 'Australia/Darwin' },
  { label: '(GMT+10:00) Brisbane', value: 'Australia/Brisbane' },
  {
    label: '(GMT+10:00) Canberra, Melbourne, Sydney',
    value: 'Australia/Canberra',
  },
  { label: '(GMT+10:00) Hobart', value: 'Australia/Hobart' },
  { label: '(GMT+10:00) Guam, Port Moresby', value: 'Pacific/Guam' },
  { label: '(GMT+10:00) Vladivostok', value: 'Asia/Vladivostok' },
  {
    label: '(GMT+11:00) Magadan, Solomon Is., New Caledonia',
    value: 'Asia/Magadan',
  },
  { label: '(GMT+12:00) Auckland, Wellington', value: 'Pacific/Auckland' },
  { label: '(GMT+12:00) Fiji, Kamchatka, Marshall Is.', value: 'Pacific/Fiji' },
  { label: `(GMT+13:00) Nuku'alofa`, value: 'Pacific/Tongatapu' },
];
