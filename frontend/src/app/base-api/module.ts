import { NgModule } from '@angular/core';
import { TokenInterceptor } from './token.interceptor';
import { BaseErrorHandler } from './base-error-handler';
import { MyCustomHttpClient, } from './my-custom-http-client';

@NgModule({
  declarations: [],
  imports: [],
  providers: [TokenInterceptor, BaseErrorHandler, MyCustomHttpClient],
  exports: [],
})

export class BaseApiModule { }
