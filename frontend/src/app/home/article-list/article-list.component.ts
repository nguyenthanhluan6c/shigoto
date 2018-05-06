import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../services/article.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit {
  public articles: any;
  public loading: boolean;
  public errors: any;
  constructor(private articleService: ArticleService) { }

  ngOnInit() {
    this.loading = true
    this.articles = this.articleService.getAll().delay(3000).map((result: any) => {
      this.loading = false;
      return result
    });
  }

}
