import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { TeamsService } from './teams.service';
import { UserService } from './user.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private teams: TeamsService, private user: UserService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const headers: any = {};

    const team = this.teams.CurrentSelectedTeam;
    if (team) {
      headers['x-team'] = (team || '').toString();
    }

    const token = this.user.GetToken();
    if (token) {
      headers['x-token'] = (token || '').toString();
    }

    request = request.clone({
      setHeaders: {
        ...headers,
      },
    });
    return next.handle(request);
  }
}
