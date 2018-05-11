import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpResponse,
  HttpErrorResponse,
  HttpInterceptor,
  HttpSentEvent,
  HttpHeaderResponse,
  HttpProgressEvent,
  HttpUserEvent
} from '@angular/common/http';
import { HeaderBasicService } from '../auth/services/header-basic.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/Rx';
import { Router } from '@angular/router';
import * as HttpStatus from 'http-status-codes'
import { environment } from '../../environments/environment';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(public auth: HeaderBasicService, private router: Router) { }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpSentEvent |
    HttpHeaderResponse | HttpProgressEvent | HttpResponse<any> | HttpUserEvent<any>> {

    request = request.clone({
      url: `${environment.apiUrl}${request.url}`,
      headers: this.auth.getHeaders()
    });

    return next.handle(request).catch((error, caught) => {
      if (error instanceof HttpErrorResponse) {
        return this.handleHttpErrorResponse(error, request, next)
      } else {
        return Observable.throw(error);
      }
    }) as any;
  }

  private handleHttpErrorResponse(error: HttpErrorResponse, request: HttpRequest<any>,
    next: HttpHandler): Observable<HttpEvent<any>> {
    switch (error.status) {
      case HttpStatus.UNAUTHORIZED:
        return this.handleUnauthorized(error, request, next);

      default:
        return Observable.throw(error);
    }
  }

  private handleUnauthorized(error: HttpErrorResponse, request: HttpRequest<any>,
    next: HttpHandler): Observable<HttpEvent<any>> {
    switch (error.error.errors[0]['key']) {
      case 'token_unknown':
      case 'token_revoked':
        this.auth.removeToken();
        this.router.navigate(['/login']);
        return Observable.throw(error);

      case 'token_expired':
        return this.auth.refreshToken().flatMap(t => {
          const authReq = request.clone({ headers: this.auth.getHeaders() });
          return next.handle(authReq);
        });

      default:
        return Observable.throw(error);
    }
  }
}
