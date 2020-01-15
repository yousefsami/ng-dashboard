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
    request = request.clone({
      setHeaders: {
        'x-token': `${this.user.GetToken()}`,
        'x-lang': this.translate.currentLang,
        'x-team': '' + this.teams.CurrentSelectedTeam
      }
    });
    return next.handle(request);
  }
}
