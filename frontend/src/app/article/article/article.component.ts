import { Input, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IArticle } from '../../home/model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  @Input() readonly article: IArticle;
  constructor() { }

  ngOnInit() {
  }
}
