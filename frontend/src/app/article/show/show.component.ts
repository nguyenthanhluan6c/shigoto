import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { select$, select } from '@angular-redux/store';
import { ArticleAPIActions } from '../api/actions';
import { IArticle } from '../../home/model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShowComponent implements OnInit {
  @select(['article', 'show', 'article'])
  readonly article$: Observable<IArticle>

  constructor(private actions: ArticleAPIActions, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => this.actions.loadArticle(params['id']));
  }
}
