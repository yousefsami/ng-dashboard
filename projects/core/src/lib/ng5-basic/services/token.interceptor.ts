import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';
import 'rxjs/add/operator/catch';
import { Router } from '@angular/router';
import { ActionsService } from '../services/actions.service';
import { TranslateService } from './translate.service';
import { ConfigurationService } from './configuration.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(
    private user: UserService,
    private router: Router,
    private translate: TranslateService,
    private actions: ActionsService,
    private config: ConfigurationService
  ) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // this.actions.scrollTop();
    const headers = Object.assign(
      {
        'x-token': this.user.GetToken(),
        'x-lang': this.translate.currentLang
      },
      HeadersToObject(request.headers)
    );
    request = request.clone({ setHeaders: headers });
    return next.handle(request);
  }
}

function HeadersToObject(headers: HttpHeaders): any {
  const heads = {};
  headers.keys().forEach(key => {
    heads[key] = headers.get(key);
  });
  return heads;
}
