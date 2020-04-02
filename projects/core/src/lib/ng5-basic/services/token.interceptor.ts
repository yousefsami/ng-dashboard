import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

import { UserService } from './user.service';
import { TeamsService } from './teams.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private user: UserService, private teams: TeamsService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = this.user.GetToken();
    const team = this.teams.CurrentSelectedTeam;
    const headers: any = {};

    if (token) {
      headers['x-token'] = token.toString();
    }
    if (team) {
      headers['x-team'] = team.toString();
    }

    request = request.clone({
      setHeaders: headers
    });
    return next.handle(request);
  }
}
