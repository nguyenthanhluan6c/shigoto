import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { select$, select } from '@angular-redux/store';
import { pipe, values, sortBy, prop } from 'ramda';
import { ArticleAPIActions } from '../api/actions';
import { IArticle } from '../model';

export const sortArticles = (articleDictionary$: Observable<{}>) =>
  articleDictionary$.map(
    pipe(
      values,
      sortBy(prop('id'))));

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IndexComponent implements OnInit {

  @select$(['article', 'index', 'articles', 'articles'], sortArticles)
  readonly articles$: Observable<IArticle[]>;

  @select(['article', 'index', 'articles', 'articles', 'loading'])
  readonly loading$: Observable<boolean>;

  @select(['article', 'index', 'articles', 'articles', 'error'])
  readonly error$: Observable<any>;

  constructor(private actions: ArticleAPIActions) { }

  ngOnInit() {
    this.actions.loadArticles();
  }
}
