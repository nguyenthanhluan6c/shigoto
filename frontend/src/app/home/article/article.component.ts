import { Input, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  @Input("id") readonly id: string;
  @Input("title") readonly title: string;
  @Input("content") readonly content: string;

  constructor() { }

  ngOnInit() {
  }

}
