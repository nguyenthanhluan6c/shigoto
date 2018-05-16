import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../api/article.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ArticleAPIActions } from '../api/actions';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  // constructor(private articleService: ArticleService, private route: ActivatedRoute,
  //   private router: Router, private fb: FormBuilder) {
  //   this.createForm();

  // }

  constructor(private actions: ArticleAPIActions, private route: ActivatedRoute, private router: Router) {

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

