import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { IArticleList, IResponse, IArticle, fromServer } from '../model';
import { HeaderBasicService } from '../../auth/services/header-basic.service';

@Injectable()
export class ArticleService {
  readonly apiUrl = environment.apiUrl;

  constructor(private http: HttpClient, private headerBasicService: HeaderBasicService) { }

  getAll(): Observable<IArticle[]>{
  	var reqHeader = this.headerBasicService.getHeaders();
  	return this.http.get<IResponse>(`${this.apiUrl}/articles`, {headers : reqHeader})
      .map(response => response.data.articles.map(fromServer));
  }
     
}
