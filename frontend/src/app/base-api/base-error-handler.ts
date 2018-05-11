import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Response } from "@angular/http";
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class BaseErrorHandler {
  constructor() { }

  handle(error: any, caught?: any): Observable<any> {
    if (error instanceof Error) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('Client error:', error.message);
    } else if (error instanceof HttpErrorResponse) {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.log(error);
      console.error(`Server error: Backend returned code ${error.status}, body was: ${error.error}`);
    }
    return Observable.throw(error);
  }
}
