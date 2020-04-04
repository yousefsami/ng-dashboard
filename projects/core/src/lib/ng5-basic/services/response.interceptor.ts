import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { RouterService } from './router.service';

@Injectable()
export class ResponseInterceptor implements HttpInterceptor {
  constructor(private router: RouterService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      tap(
        (event) => {
          if (event instanceof HttpResponse) {
            // @cover response.error is gonna be by caller
          }
        },
        (error: HttpErrorResponse) => {
          if (error.status === 401) {
            this.router.navigatePublic('/login');
          }
        }
      )
    );
  }
}
