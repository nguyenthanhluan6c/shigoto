import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HeaderBasicService {
  commonHeader: HttpHeaders;
  baseUrl =  "http://localhost:3000/api"
  csrfTokenElm = document.getElementsByName('csrf-token');
  csrfToken = this.csrfTokenElm[0] ? this.csrfTokenElm[0].getAttribute('content') : '';

  cachedRequests: Array<HttpRequest<any>> = [];

  public collectFailedRequest(request): void {
    this.cachedRequests.push(request);
  }

  public retryFailedRequests(): void {
    let request = this.cachedRequests.pop();
    // retry the requests. this method can
    // be called after the token is refreshed
  }

  constructor(private http: HttpClient, private router: Router
  ){
    this.commonHeader = this.getHeaders();
  }

  getHeaders() {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'X-CSRF-Token': this.csrfToken,
      'Doorkeeper-Token': 'Bearer ' + this.getAccessToken(),
      'X-Locale': "en"
    });
  }

  currentUser() {
    return JSON.parse(localStorage.getItem('currentUser'))
  }

  getAccessToken(){
    return this.currentUser() ? this.currentUser().token : null;
  }

  refreshToken(): Observable<any> {
    let refresh_token = this.currentUser().refresh_token; //get refresh token from storage
    return this.http.post<any>(`http://localhost:3000/api/auth/sign_in`, { "grant_type": "refresh_token",
      refresh_token: refresh_token }).map(response => {
        if (response['success'])
          var user = response['data']
        localStorage.setItem('currentUser', JSON.stringify(user));
        return user;
      });
  }


  removeToken() {
    localStorage.removeItem('currentUser');
  }

  isLoggedIn() {
    return localStorage.getItem('currentUser') != null
  }

  // create(user: User) {
  //   return this.http.post(`${this.baseUrl}/auth/users`, user)
  //     .map(response => {
  //       let user_token = response["data"]
  //       if (user_token && user_token.token)
  //         this.loginStateSource.next('login');
  //       this.current_user.next(user);
  //       localStorage.setItem('currentUser', JSON.stringify(user_token));
  //       return user_token;
  //     });
  // }

  // handleError(error: any): Promise<any> {

  //   var UNAUTHORIZED = 401, TOKEN_REVOKED = 2605;
  //   if (error.status == UNAUTHORIZED)
  //     if (JSON.parse(error._body).errors[0].code == TOKEN_REVOKED)
  //       debugger
  //   this.tryRefresh();

  //   return Promise.reject(error.message || error);
  // }
}
