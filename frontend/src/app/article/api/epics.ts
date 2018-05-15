import { Injectable } from '@angular/core';
import { Epic, createEpicMiddleware } from 'redux-observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/startWith';

import { IAppState } from '../../store/model';
import { ArticleAPIAction, ArticleAPIActions } from './actions';
import { ArticleService } from './article.service';

const articlesNotAlreadyFetched = (
  state: IAppState): boolean => !(
    state &&
    state.article.index &&
    state.article.index.articles &&
    Object.keys(state.article.index.articles.articles).length);

@Injectable()
export class ArticleAPIEpics {
  constructor(
    private service: ArticleService,
    private actions: ArticleAPIActions,
  ) { }

  public createEpics() {
    return [
      createEpicMiddleware(this.createLoadArticleEpic()),
      createEpicMiddleware(this.createLoadArticlesEpic()),
      createEpicMiddleware(this.createDeleteArticleEpic()),
    ];
  }

  private createLoadArticlesEpic(): Epic<ArticleAPIAction, IAppState> {
    return (action$, store) => action$
      .ofType(ArticleAPIActions.LOAD_ITEMS)
      // .filter(() => articlesNotAlreadyFetched(store.getState()))
      .switchMap(() => this.service.getAll()
        .map(data => this.actions.loadSucceeded(data))
        .catch(response => of(this.actions.loadFailed({
          status: '' + response.status,
        })))
        .startWith(this.actions.loadStarted()));
  }

  private createLoadArticleEpic(): Epic<ArticleAPIAction, IAppState> {
    return (action$, store) => action$
      .ofType(ArticleAPIActions.LOAD_ITEM)
      .switchMap((action) => this.service.get(action.meta.id)
        .map(data => this.actions.loadItemSucceeded(data))
        .catch(response => of(this.actions.loadFailed({
          status: '' + response.status,
        })))
        .startWith(this.actions.loadItemStarted()));
  }

  private createDeleteArticleEpic(): Epic<ArticleAPIAction, IAppState> {
    return (action$, store) => action$
      .ofType(ArticleAPIActions.DELETE_ITEM)
      .switchMap(action => this.service.delete(action.meta.id)
        .map((data) => this.actions.deleteSucceeded(action.meta.id))
        .catch(response => of(this.actions.loadFailed({
          status: '' + response.status,
        }))))
  }
}
