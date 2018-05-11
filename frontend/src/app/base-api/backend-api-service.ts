import { Injectable } from '@angular/core';
import { MyCustomHttpClient } from './my-custom-http-client';
import { BaseErrorHandler } from './base-error-handler';

@Injectable()
export class BackendApiService {
  constructor(protected http: MyCustomHttpClient, protected errorHandler: BaseErrorHandler) {
  }
}
