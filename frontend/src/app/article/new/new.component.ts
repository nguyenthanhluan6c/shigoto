import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../services/article.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent implements OnInit {
  myForm: FormGroup;
  article: {};

  constructor(private articleService: ArticleService, private route: ActivatedRoute,
    private router: Router, private fb: FormBuilder) {
    this.createForm();

  }

  createForm() {
    this.myForm = this.fb.group({
      title: ['', Validators.required],
      content: ['']
    });
  }


  create(form) {
    let { title, content } = form.value
    this.route.params.subscribe(params => {
      this.articleService.create(title, content)
        .subscribe(res => {
          if (res.success) {
            this.router.navigate(['articles/', res.data.id]);
          }
        });
    });
  }

  ngOnInit() {
  }

}
