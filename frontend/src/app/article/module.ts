import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { CoreModule } from '../core/module';

import { ArticleService } from './api/article.service';
import { HeaderBasicService } from '../auth/services/header-basic.service';
import { ArticleComponent } from './article/article.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { IndexComponent } from './index/index.component';
import { ShowComponent } from './show/show.component';
import { EditComponent } from './edit/edit.component';
import { NewComponent } from './new/new.component';
import { DeleteComponent } from './delete/delete.component';
import { RouterModule } from '@angular/router';
import { ArticleAPIActions } from './api/actions';
import { ArticleAPIEpics } from './api/epics';
import { StoreModule } from '../store/module';

@NgModule({
  declarations: [
    IndexComponent, ShowComponent, EditComponent, NewComponent, DeleteComponent,
    ArticleComponent, ArticleListComponent
  ],
  exports: [],
  imports: [CommonModule, CoreModule, BrowserModule, FormsModule, HttpClientModule, ReactiveFormsModule, RouterModule, StoreModule],
  providers: [
    HttpClientModule,
    HeaderBasicService,
    ArticleAPIActions,
    ArticleAPIEpics,
    ArticleService,
  ],
})

export class ArticleModule { }
