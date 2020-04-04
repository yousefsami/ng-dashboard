import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookiesService } from 'ngx-universal-cookies';
import { TeamsService } from './teams.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private cookie: CookiesService, private teams: TeamsService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const headers = {
      'x-token': this.cookie.get('token') || '',
      'x-team': this.cookie.get('team') || this.teams.CurrentSelectedTeam || '',
    };

    request = request.clone({
      setHeaders: {
        ...headers,
      },
    });
    return next.handle(request);
  }
}
