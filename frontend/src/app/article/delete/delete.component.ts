import { Component, OnInit, Input } from '@angular/core';
import { IArticle } from '../model';
import { ArticleAPIActions } from '../api/actions';

@Component({
  selector: 'app-article-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {

  @Input() article: IArticle;

  delete = (id) => (this.actions.deleteItem(id))

  constructor(private actions: ArticleAPIActions) { }

  ngOnInit() { }
}
