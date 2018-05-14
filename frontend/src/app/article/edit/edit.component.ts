import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { select$, select } from '@angular-redux/store';
import { ArticleAPIActions } from '../api/actions';
import { IArticle } from '../../home/model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditComponent implements OnInit {
  @select(['article', 'edit', 'article'])
  readonly article$: Observable<IArticle>
  constructor(private actions: ArticleAPIActions, private route: ActivatedRoute) {

  }

  // update(form) {
  //   let { title, content } = form.value
  //   this.route.params.subscribe(params => {
  //     this.articleService.update(params['id'], title, content)
  //       .subscribe(res => {
  //         this.router.navigate(['articles/', params['id']]);
  //       });
  //   });
  // }

  submit(form) {
    this.actions.submitFormEdit(form.value)
  }

  delete(id) {
    // this.route.params.subscribe(params => {
    //   this.articleService.delete(id)
    //     .subscribe(res => {
    //       if (res.success) {
    //         this.router.navigate(['articles']);
    //       }
    //     });
    // });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.actions.loadItemEdit(params['id'])
    });
  };
}

