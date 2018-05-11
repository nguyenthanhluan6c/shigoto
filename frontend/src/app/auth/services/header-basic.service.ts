import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../../environments/environment';

@Injectable()
export class HeaderBasicService {
  commonHeader: HttpHeaders;
  baseUrl = environment.apiUrl
  csrfTokenElm = document.getElementsByName('csrf-token');
  csrfToken = this.csrfTokenElm[0] ? this.csrfTokenElm[0].getAttribute('content') : '';

  constructor(private http: HttpClient, private router: Router
  ) {
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

  getAccessToken() {
    return this.currentUser() ? this.currentUser().token : null;
  }

  refreshToken(): Observable<any> {
    let refresh_token = this.currentUser().refresh_token; //get refresh token from storage
    return this.http.post<any>(`${this.baseUrl}/auth/sign_in`, {
      "grant_type": "refresh_token",
      refresh_token: refresh_token
    }).map(response => {
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
}
