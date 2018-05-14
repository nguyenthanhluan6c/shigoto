import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../services/article.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  myForm: FormGroup;
  article: any;
  constructor(private articleService: ArticleService, private route: ActivatedRoute,
    private router: Router, private fb: FormBuilder) {
    this.createForm();

  }

  createForm() {
    this.myForm = this.fb.group({
      id: ['', Validators.required],
      title: ['', Validators.required],
      content: ['']
    });
  }

  update(form) {
    let { title, content } = form.value
    this.route.params.subscribe(params => {
      this.articleService.update(params['id'], title, content)
        .subscribe(res => {
          this.router.navigate(['articles/', params['id']]);
        });
    });
  }


  delete(id) {
    this.route.params.subscribe(params => {
      this.articleService.delete(id)
        .subscribe(res => {
          if (res.success) {
            this.router.navigate(['articles']);
          }
        });
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.article = this.articleService.get(params['id']).subscribe((result: any) => {
        this.article = result
      });
    });
  }

}
