import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticleListComponent implements OnInit {
  @Input()
  readonly articles$: Observable<any[]>;

  @Input()
  readonly loading$: Observable<boolean>;

  @Input()
  readonly error$: Observable<any>;

  constructor() { }

  ngOnInit() { }
}
