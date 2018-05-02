import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Response } from "@angular/http";
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { User } from '../models/user.model';
import { environment } from '../../../environments/environment';

@Injectable()
export class UserService {
  readonly apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }

  userAuthentication(email, password) {
    let reqHeader = new HttpHeaders({ 'Content-Type': 'application/json','No-Auth':'True' });
    let data = {"grant_type": "password", email: email, password: password }
    return this.http.post(`${this.apiUrl}/auth/sign_in`, data, { headers: reqHeader });
  }
}
