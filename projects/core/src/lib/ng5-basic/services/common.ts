import { debounce } from 'lodash';
import { IResponse, IResponseError } from 'response-type';
import { Observable, of, BehaviorSubject } from 'rxjs';
import {
  HttpEvent,
  HttpHeaders,
  HttpRequest,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { matchPattern } from 'url-matcher';
import { merge } from 'lodash';
import {
  DataSource,
  IWorkingState,
  StartRequestResponse
} from '../definitions';
import { OnDestroy } from '@angular/core';

export function GetNetworkError(): IResponse<any> {
  return {
    error: {
      code: 0,
      message:
        'It seems you are not connected to internet. Please check your connection and try again'
    }
  };
}

export function error(response: IResponse<any>, fieldName: string) {
  if (!response || !response.error || !response.error.errors) {
    return '';
  }
  const $error = response.error.errors.find(x => x.location === fieldName);
  return $error ? $error.message : '';
}

export function IsSuccessEntity(response: IResponse<any>) {
  return (
    response && response.data && response.data.items && response.data.items[0]
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
    url: req.url
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
        match: result
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
  newContext = context.map($el => {
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
  newContext = context.map($el => {
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

/**
 * @description Set of functions that every component needs.
 * You need to bind an instance of this component to your angular component.
 * Helps for http requests, working progress, managing response.
 */
export abstract class ComponentCommon implements OnDestroy {
  protected toastaService: any;
  public working: boolean;

  ngOnDestroy() {}
  public ResponseError(error2: HttpErrorResponse) {
    // const toastOptions: ToastOptions = {
    //   title: error2.status.toString(),
    //   msg: error2.statusText,
    //   showClose: true,
    //   timeout: 5000
    // };
    // this.toastaService.info(toastOptions);
  }
  public InternalError(error2: Error) {
    // const toastOptions: ToastOptions = {
    //   title: error2.name,
    //   msg: error2.message,
    //   showClose: true,
    //   timeout: 5000
    // };
    // this.toastaService.error(toastOptions);
  }
  public async StartRequest<T>(
    callableRequest: () => any
  ): Promise<StartRequestResponse<T>> {
    this.working = true;
    try {
      const response: IResponse<T> = await callableRequest();
      this.working = false;
      if (IsSuccessEntity(response)) {
        return {
          items: response.data.items,
          item: response.data.items[0]
        };
      } else {
        return {
          error: response.error
        };
      }
    } catch (error) {
      this.working = false;
      if (error instanceof HttpErrorResponse) {
        this.ResponseError(error);
      } else {
        this.InternalError(error);
      }
    }
  }
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
  currency = currency.toLowerCase();
  if (currency === 'pln') {
    return new Intl.NumberFormat('pl-PL', {
      style: 'currency',
      currency: 'PLN'
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
  'December'
];

export const InteractiveButtons = {
  /**
   * Export to ng-dashboard.
   * Builds a refresh button for the component.
   */
  Refresh: (onPress: (source?: string) => void) => {
    return {
      icon: 'icon-refresh',
      key: 'refresh',
      keyboardShortcut: 'r',
      onPress
    };
  },
  /**
   * Export to ng-dashboard.
   * Builds a list button for component, useful for components that showing a single entity
   * of a list of elemets (a.k. a post of posts)
   */
  List: (onPress: (source?: string) => void) => {
    return {
      icon: 'icon-list',
      key: 'list',
      keyboardShortcut: 'l',
      onPress
    };
  },
  /**
   * Export to ng-dashboard.
   * Save button for any component that has a form. Also it will debounce amount
   * of types user presses enter.
   */
  SafeSave: (onPress: (source?: string) => void) => {
    return {
      icon: 'icon-save',
      key: 'save',
      onPress: debounce(onPress, 500)
    };
  }
};

export function StoreActionDelete(state: Array<any>, action: any) {
  return state.filter(
    t => t.id !== (action.payload.id ? action.payload.id : +action.payload)
  );
}

export function StoreActionUpdate(state: Array<any>, action: any) {
  return state.map(t => {
    if (t.id === action.payload.id) {
      return action.payload;
    }
    return t;
  });
}
