import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { IArticleList, IArticleListResponse, IArticleResponse, IArticle, fromServer } from '../model';
import { BackendApiService } from '../../base-api/backend-api-service';

@Injectable()
export class ArticleService extends BackendApiService {
  private subject = new Subject<any>();

  getAll(): Observable<IArticle[]> {
    return this.http.get(`/articles`)
      .map((response: IArticleListResponse) => response.data.articles.map(fromServer))
      .catch(this.errorHandler.handle)
  }

  get(id) {
    return this.http.get(`/articles/${id}`)
      .map((response: IArticleResponse) => response.data)
      .catch(this.errorHandler.handle)
  }

  create(title, content) {
    let data = { title, content };
    return this.http.post(`/articles`, data)
      .catch(this.errorHandler.handle)
  }

  update(id, title, content) {
    let data = { id, title, content };
    return this.http.put(`/articles/${id}`, data)
      .catch(this.errorHandler.handle)
  }

  delete(id) {
    return this.http.delete(`/articles/${id}`)
      .map(res => {
        this.subject.next(id)
        return res;
      })
      .catch(this.errorHandler.handle)
  }

  getSubject(): Observable<any> {
    return this.subject.asObservable();
  }
}
