import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ArticleService } from '../services/article.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-article-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {

  @Input() id: any;
  @Output() deleteEvent = new EventEmitter<string>();

  callParent() {
    this.deleteEvent.next(this.id);
  }

  constructor(private articleService: ArticleService, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
  }


  delete() {
    this.articleService.delete(this.id)
      .subscribe(res => {
        if (res.success) {
          this.callParent();
          this.router.navigate(['articles']);
        }
      });
  }

}
