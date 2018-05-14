import { Injectable } from '@angular/core';
import { dispatch } from '@angular-redux/store';
import { FluxStandardAction } from 'flux-standard-action';
import { IArticle } from '../model';

// Flux-standard-action gives us stronger typing of our actions.
type Payload = any //IArticle[] | IArticle;
interface MetaData { id?: number, redirect_path?: string };
export type ArticleAPIAction = FluxStandardAction<Payload, MetaData>;

const PREFIX = 'ARTICLE';

@Injectable()

export class ArticleAPIActions {
  static readonly LOAD_ITEMS = `${PREFIX}_LOAD_ITEMS`;
  static readonly LOAD_ITEMS_STARTED = `${PREFIX}_LOAD_ITEMS_STARTED`;
  static readonly LOAD_ITEMS_SUCCEEDED = `${PREFIX}_LOAD_ITEMS_SUCCEEDED`;
  static readonly LOAD_ITEMS_FAILED = `${PREFIX}_LOAD_ITEMS_FAILED`;

  static readonly DELETE_ITEM = `${PREFIX}_DELETE_ITEM`;
  static readonly DELETE_SUCCEEDED = `${PREFIX}_DELETE_SUCCEEDED`;

  static readonly LOAD_ITEM = `${PREFIX}_LOAD_ITEM`;
  static readonly LOAD_ITEM_STARTED = `${PREFIX}_LOAD_ITEM_STARTED`;
  static readonly LOAD_ITEM_SUCCEEDED = `${PREFIX}_LOAD_ITEM_SUCCEEDED`;

  static readonly SUBMIT_NEW_FORM = `${PREFIX}_SUBMIT_NEW_FORM`;
  static readonly SUBMIT_NEW_FORM_SUCCEEDED = `${PREFIX}_SUBMIT_NEW_FORM_SUCCEEDED`;

  static readonly LOAD_ITEM_EDIT = `${PREFIX}_LOAD_ITEM_EDIT`;
  static readonly LOAD_ITEM_EDIT_STARTED = `${PREFIX}_LOAD_ITEM_EDIT_STARTED`;
  static readonly LOAD_ITEM_EDIT_SUCCEEDED = `${PREFIX}_LOAD_ITEM_EDIT_SUCCEEDED`;
  static readonly SUBMIT_EDIT_FORM = `${PREFIX}_SUBMIT_EDIT_FORM`;
  static readonly SUBMIT_EDIT_FORM_SUCCEEDED = `${PREFIX}_SUBMIT_EDIT_FORM_SUCCEEDED`;

  // INDEX
  @dispatch()
  loadArticles = (): ArticleAPIAction => ({
    type: ArticleAPIActions.LOAD_ITEMS,
    meta: null,
    payload: null,
  });

  loadStarted = (): ArticleAPIAction => ({
    type: ArticleAPIActions.LOAD_ITEMS_STARTED,
    meta: null,
    payload: null,
  });

  loadSucceeded = (payload: Payload): ArticleAPIAction => ({
    type: ArticleAPIActions.LOAD_ITEMS_SUCCEEDED,
    meta: null,
    payload,
  });

  loadFailed = (error): ArticleAPIAction => ({
    type: ArticleAPIActions.LOAD_ITEMS_FAILED,
    meta: null,
    payload: null,
    error,
  });

  // DELETE
  @dispatch()
  deleteItem = (id, redirect_path?): ArticleAPIAction => ({
    type: ArticleAPIActions.DELETE_ITEM,
    meta: { id: id, redirect_path: redirect_path },
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

  //NEW
  @dispatch()
  submitFormNew = (value): ArticleAPIAction => ({
    type: ArticleAPIActions.SUBMIT_NEW_FORM,
    meta: null,
    payload: { value: value },
  });

  submitFormNewSucceeded = (payload: Payload): ArticleAPIAction => ({
    type: ArticleAPIActions.SUBMIT_NEW_FORM_SUCCEEDED,
    meta: null,
    payload,
  });

  //EDIT

  @dispatch()
  loadItemEdit = (id): ArticleAPIAction => ({
    type: ArticleAPIActions.LOAD_ITEM_EDIT,
    meta: { id: id },
    payload: null,
  });

  loadItemEditStarted = (): ArticleAPIAction => ({
    type: ArticleAPIActions.LOAD_ITEM_EDIT_STARTED,
    meta: null,
    payload: null,
  });

  loadItemEditSucceeded = (payload: Payload): ArticleAPIAction => ({
    type: ArticleAPIActions.LOAD_ITEM_EDIT_SUCCEEDED,
    meta: null,
    payload,
  });

  @dispatch()
  submitFormEdit = (value): ArticleAPIAction => ({
    type: ArticleAPIActions.SUBMIT_EDIT_FORM,
    meta: null,
    payload: { value: value },
  });

  submitFormEditSucceeded = (payload: Payload): ArticleAPIAction => ({
    type: ArticleAPIActions.SUBMIT_EDIT_FORM_SUCCEEDED,
    meta: null,
    payload,
  });

}
