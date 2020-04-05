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
    let team = this.cookie.get('team');
    if (!team) {
      const currentTeam = this.teams.CurrentSelectedTeam;
      if (currentTeam) {
        team = currentTeam.toString();
      }
    }
    const headers: any = {};

    if (team) {
      headers['x-team'] = team;
    }

    const token = this.cookie.get('token');
    if (token) {
      headers['x-token'] = token.toString();
    }

    request = request.clone({
      setHeaders: {
        ...headers,
      },
    });
    return next.handle(request);
  }
}
