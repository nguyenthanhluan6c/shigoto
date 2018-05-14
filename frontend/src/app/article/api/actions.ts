import { Injectable } from '@angular/core';
import { dispatch } from '@angular-redux/store';
import { FluxStandardAction } from 'flux-standard-action';
import { IArticle } from '../model';

// Flux-standard-action gives us stronger typing of our actions.
type Payload = any //IArticle[] | IArticle;
interface MetaData { id?: number };
export type ArticleAPIAction = FluxStandardAction<Payload, MetaData>;

@Injectable()

export class ArticleAPIActions {
  static readonly LOAD_ITEMS = 'LOAD_ITEMS';
  static readonly LOAD_STARTED = 'LOAD_STARTED';
  static readonly LOAD_SUCCEEDED = 'LOAD_SUCCEEDED';
  static readonly LOAD_FAILED = 'LOAD_FAILED';

  static readonly DELETE_ITEM = 'DELETE_ITEM';
  static readonly DELETE_SUCCEEDED = 'DELETE_SUCCEEDED';

  static readonly LOAD_ITEM = 'LOAD_ITEM';
  static readonly LOAD_ITEM_STARTED = 'LOAD_ITEM_STARTED';
  static readonly LOAD_ITEM_SUCCEEDED = 'LOAD_ITEM_SUCCEEDED';

  // INDEX
  @dispatch()
  loadArticles = (): ArticleAPIAction => ({
    type: ArticleAPIActions.LOAD_ITEMS,
    meta: null,
    payload: null,
  });

  loadStarted = (): ArticleAPIAction => ({
    type: ArticleAPIActions.LOAD_STARTED,
    meta: null,
    payload: null,
  });

  loadSucceeded = (payload: Payload): ArticleAPIAction => ({
    type: ArticleAPIActions.LOAD_SUCCEEDED,
    meta: null,
    payload,
  });

  loadFailed = (error): ArticleAPIAction => ({
    type: ArticleAPIActions.LOAD_FAILED,
    meta: null,
    payload: null,
    error,
  });

  // DELETE
  @dispatch()
  deleteItem = (id): ArticleAPIAction => ({
    type: ArticleAPIActions.DELETE_ITEM,
    meta: { id: id },
    payload: null,
  });

  deleteSucceeded = (id): ArticleAPIAction => ({
    type: ArticleAPIActions.DELETE_SUCCEEDED,
    meta: { id: id },
    payload: null,
  });

  // SHOW
  @dispatch()
  loadArticle = (id): ArticleAPIAction => ({
    type: ArticleAPIActions.LOAD_ITEM,
    meta: { id: id },
    payload: null,
  });

  loadItemStarted = (): ArticleAPIAction => ({
    type: ArticleAPIActions.LOAD_ITEM_STARTED,
    meta: null,
    payload: null,
  });

  loadItemSucceeded = (payload: Payload): ArticleAPIAction => ({
    type: ArticleAPIActions.LOAD_ITEM_SUCCEEDED,
    meta: null,
    payload,
  });
}
