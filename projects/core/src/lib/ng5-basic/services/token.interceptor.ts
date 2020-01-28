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
    request = request.clone({
      setHeaders: {
        'x-token': `${this.user.GetToken()}`,
        'x-team': '' + this.teams.CurrentSelectedTeam
      }
    });
    return next.handle(request);
  }
}
