import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpEvent, HttpEventType, HttpRequest } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/empty';
import 'rxjs/add/operator/retry';
import { IArticleList, IResponse, IArticle, fromServer } from '../model';
import { MyCustomHttpClient } from '../../base-api/module';

@Injectable()
export class ArticleService {
  readonly apiUrl = environment.apiUrl;
  public loading = false;
  public error = false;
  constructor(private http: MyCustomHttpClient) {
  }
  getAll(loading?: any): Observable<IArticle[]>{
    // const req = new HttpRequest('GET', `/articles`, {
    //   reportProgress: true,
    // });

    // this.http.get(`/articles`, {
    //   reportProgress: true,
    // }).subscribe((event: HttpEvent<any>) => {
    //   switch (event.type) {
    //     case HttpEventType.Sent:
    //       console.log('Request sent!');
    //       break;
    //     case HttpEventType.ResponseHeader:
    //       console.log('Response header received!');
    //       break;
    //     case HttpEventType.DownloadProgress:
    //       const kbLoaded = Math.round(event.loaded / 1024);
    //       console.log(`Download in progress! ${kbLoaded}Kb loaded`);
    //       break;
    //     case HttpEventType.Response:
    //       console.log('😺 Done!', event.body);
    //   }
    // });
    return this.http.get(`/articles`)
      .map((response: IResponse) => response.data.articles.map(fromServer))

      // .retry(3)
      .catch((error: any) => {
        if (error instanceof Error) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.message);
            return Observable.throw(error);
        } else if (error instanceof HttpErrorResponse) {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
          console.error(`Backend returned code ${error.status}, body was: ${error.error}`);
          }

          // ...optionally return a default fallback value so app can continue (pick one)
          // which could be a default value
          // return Observable.of<any>({my: "default value..."});
          // or simply an empty observable
          return Observable.empty<IArticle[]>();
        })

  }

  //   getAll(): Observable<IArticle[]>{
  // 	var reqHeader = this.headerBasicService.getHeaders();
  // 	return this.http.get<IResponse>(`${this.apiUrl}/articles`, {headers : reqHeader})
  //     .map(response => response.data.articles.map(fromServer))
  //     .retry(3)
  //     .catch((err: HttpErrorResponse) => {
  //       debugger
  //         if (err.error instanceof Error) {
  //           // A client-side or network error occurred. Handle it accordingly.
  //           console.error('An error occurred:', err.error.message);
  //         } else {
  //           // The backend returned an unsuccessful response code.
  //           // The response body may contain clues as to what went wrong,
  //           console.error(`Backend returned code ${err.status}, body was: ${err.error}`);
  //         }

  //         // ...optionally return a default fallback value so app can continue (pick one)
  //         // which could be a default value
  //         // return Observable.of<any>({my: "default value..."});
  //         // or simply an empty observable
  //         return Observable.empty<IArticle[]>();
  //       });
  // }


}
