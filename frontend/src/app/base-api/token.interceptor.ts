import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpResponse,
  HttpErrorResponse,
  HttpInterceptor
} from '@angular/common/http';
import { HeaderBasicService } from '../auth/services/header-basic.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/Rx';
import { Router } from '@angular/router';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(public auth: HeaderBasicService, private router: Router) { }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    request = request.clone({
      url: `http://localhost:3000/api${request.url}`,
      headers: this.auth.getHeaders()
    });

    return next.handle(request).catch((err, caught) => {
      if (err instanceof HttpErrorResponse) {
        if (err.status === 401) {
          switch (err.error.errors[0]['key']) {
            case 'token_unknown':
            case 'token_revoked':
              this.auth.removeToken();
              this.router.navigate(['/login']);
              return Observable.throw(err);

            case 'token_expired':
              return this.auth.refreshToken().flatMap(t => {
                const authReq = request.clone({ headers: this.auth.getHeaders() });
                return next.handle(authReq);
              });

            default:
              this.auth.collectFailedRequest(request);
              return Observable.throw(err);
          }

        }
      }

      else {
        return Observable.throw(err);
      }
    }) as any;

    // .do((event: HttpEvent<any>) => {
    //   if (event instanceof HttpResponse) {
    //     debugger
    //     // do stuff with response if you want
    //   }
    // }, (err: any) => {
    //   if (err instanceof HttpErrorResponse) {
    //     if (err.status === 401) {
    //       switch (err.error.errors[0]['key']) {
    //         case "token_unknown":

    //         break;
    //         case "token_expired":
    //           debugger
    //         return this.auth.refreshToken().subscribe(t => {
    //             debugger
    //             // this.inflightAuthRequest = null;
    //             const authReq = request.clone({ headers: this.auth.getHeaders() });
    //             return next.handle(authReq); //refresh was success, resend the original request
    //           });
    //           break;

    //         default:
    //           this.auth.collectFailedRequest(request);
    //           break;
    //       }

    //     }
    //   }
    // });
  }
}
