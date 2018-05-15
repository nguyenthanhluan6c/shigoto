import { IArticleState } from '../article/api/reducer';

export interface IAppState {
  article?: IArticleState;
  routes?: any;
}
