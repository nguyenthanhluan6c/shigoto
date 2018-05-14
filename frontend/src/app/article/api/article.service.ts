import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { IArticleList, IArticleListResponse, IArticleResponse, IArticle, fromServer } from '../model';
import { BackendApiService } from '../../base-api/backend-api-service';

@Injectable()
export class ArticleService extends BackendApiService {

  getAll(): Observable<IArticle[]> {
    return this.http.get(`/articles`)
      .map((response: IArticleListResponse) => response.data.articles.map(fromServer))
      .catch(this.errorHandler.handle)
  }

  get(id): Observable<IArticle> {
    return this.http.get(`/articles/${id}`)
      .map((response: IArticleResponse) => response.data)
      .catch(this.errorHandler.handle)
  }

  create(data) {
    return this.http.post(`/articles`, data)
      .catch(this.errorHandler.handle)
  }

  update(data) {
    return this.http.put(`/articles/${data.id}`, data)
      .catch(this.errorHandler.handle)
  }

  delete(id) {
    return this.http.delete(`/articles/${id}`)
      .catch(this.errorHandler.handle)
  }
}
