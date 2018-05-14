import { ArticleAPIAction, ArticleAPIActions } from './actions';
import { IArticleList, IArticle } from '../model';
import { indexBy, prop, reject, propEq } from 'ramda';
import { Action } from 'redux';

export interface IArticleState {
  index: IArticleIndexState;
  show: IArticleShowState;
}

export interface IArticleIndexState {
  articles: IArticleList;
}

export interface IArticleShowState {
  article: IArticle;
}

const INITIAL_STATE_INDEX: IArticleIndexState = {
  articles: {
    articles: [],
    current_page: 0,
    count: 0,
    total_pages: 0,
    total_count: 0,
    loading: false,
    error: null
  }
}

const INITIAL_STATE_SHOW: IArticleShowState = {
  article: {
    id: null,
    title: null,
    content: null,
  }
}

const INITIAL_STATE: IArticleState = {
  index: INITIAL_STATE_INDEX,
  show: INITIAL_STATE_SHOW
}

// A higher-order reducer: accepts an animal type and returns a reducer
// that only responds to actions for that particular animal type.
export function createArticleAPIReducer() {
  return function articleReducer(state: IArticleState = INITIAL_STATE,
    a: Action): IArticleState {

    const action = a as ArticleAPIAction;

    switch (action.type) {
      case ArticleAPIActions.LOAD_STARTED:
        return {
          ...state,
          index: INITIAL_STATE_INDEX
        };
      case ArticleAPIActions.LOAD_ITEM_STARTED:
        return {
          ...state,
          show: INITIAL_STATE_SHOW
        };
      case ArticleAPIActions.LOAD_SUCCEEDED:
        return {
          ...state,
          index: {
            articles: {
              articles: indexBy(prop('id'), action.payload),
              current_page: 0,
              count: 0,
              total_pages: 0,
              total_count: 0,
              loading: false,
              error: null
            }
          }
        };
      case ArticleAPIActions.LOAD_ITEM_SUCCEEDED:
        return {
          ...state,
          show: {
            article: action.payload
          }
        };
      case ArticleAPIActions.LOAD_FAILED:
        return {
          ...state,
          index: {
            articles: {
              articles: [],
              current_page: 0,
              count: 0,
              total_pages: 0,
              total_count: 0,
              loading: false,
              error: action.error
            }
          }
        };
      case ArticleAPIActions.DELETE_SUCCEEDED:
        return {
          ...state,
          index: {
            articles: {
              articles: reject(propEq('id', action.meta.id), state.index.articles.articles),
              current_page: 0,
              count: 0,
              total_pages: 0,
              total_count: 0,
              loading: false,
              error: null,
            }
          }
        };
    }

    return state;
  };
}
