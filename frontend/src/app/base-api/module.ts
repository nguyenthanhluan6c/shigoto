import { Injectable, Inject, Injector } from '@angular/core';
import {
  HttpClient,
  HttpBackend,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpEvent,
  HTTP_INTERCEPTORS
} from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { TokenInterceptor } from './token.interceptor';

export class HttpInterceptorHandler implements HttpHandler {
  constructor(private next: HttpHandler, private interceptor: HttpInterceptor) { }

  handle(req: HttpRequest<any>): Observable<HttpEvent<any>> {
    // execute an interceptor and pass the reference to the next handler
    return this.interceptor.intercept(req, this.next);
  }
}

export class Interceptor1 implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const modified = req.clone({ setHeaders: { 'Custom-Header-1': '2' } });
    return next.handle(modified);
  }
}

@Injectable()
export class CustomHttpClient extends HttpClient {
  constructor(handler: HttpBackend, interceptors: HttpInterceptor[]) {
    const chain = interceptors.reduceRight(
      (next, interceptor) => new HttpInterceptorHandler(next, interceptor), handler);
    super(chain);
  }
}

@Injectable()
export class MyCustomHttpClient extends CustomHttpClient {

  constructor(handler: HttpBackend, tokenInterceptor: TokenInterceptor, injector: Injector ) {
    let interceptors = injector.get(HTTP_INTERCEPTORS)

    const all_interceptors: HttpInterceptor[] = [...interceptors, tokenInterceptor];
    super(handler, all_interceptors);
  }
}
