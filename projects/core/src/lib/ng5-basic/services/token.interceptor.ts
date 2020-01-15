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
import { TranslateService } from './translate.service';
import { TeamsService } from './teams.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(
    private user: UserService,
    private translate: TranslateService,
    private teams: TeamsService
  ) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const headers = Object.assign(
      {
        'x-token': this.user.GetToken(),
        'x-lang': this.translate.currentLang,
        'x-team': this.teams.CurrentSelectedTeam
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
