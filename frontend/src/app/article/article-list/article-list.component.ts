import { Component, OnInit, OnDestroy } from '@angular/core';
import { ArticleService } from '../services/article.service';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { subscribeOn } from 'rxjs/operator/subscribeOn';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit, OnDestroy {
  // public articles: Observable<any[]>;
  public articles: any[];
  public loading: boolean;
  public errors: any;

  subscription: Subscription;

  constructor(private articleService: ArticleService) { }

  ngOnInit() {
    this.loading = true
    this.articleService.getAll().subscribe((result: any) => {
      this.loading = false;
      this.articles =  result
    });

    let self = this;
    this.subscription = this.articleService.getSubject().subscribe(message => {

      this.articles = this.articles.filter(value => value.id !== message)
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
