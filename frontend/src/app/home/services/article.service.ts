import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { IArticleList, IArticleListResponse, IArticle, fromServer } from '../model';
import { BackendApiService } from '../../base-api/backend-api-service';

@Injectable()
export class ArticleService extends BackendApiService{

  getAll(): Observable<IArticle[]> {
    return this.http.get(`/articles`)
      .map((response: IArticleListResponse) => response.data.articles.map(fromServer))
      .catch(this.errorHandler.handle)
  }
}
