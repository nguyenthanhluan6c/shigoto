import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ArticleAPIActions } from '../api/actions';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewComponent implements OnInit {

  constructor(private actions: ArticleAPIActions) {

  }

  ngOnInit() {
  }

  submit(form) {
    this.actions.submitFormNew(form.value)
  }
}
