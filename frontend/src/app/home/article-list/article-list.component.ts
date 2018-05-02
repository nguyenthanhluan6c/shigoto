import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit {
  private articles: any;
  constructor(private articleService: ArticleService) { }

  ngOnInit() {
  	this.articles = this.articleService.getAll();
  }

}
