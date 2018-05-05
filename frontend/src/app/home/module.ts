import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { CoreModule} from '../core/module';

import { ArticleService } from './services/article.service';
import { HeaderBasicService } from '../auth/services/header-basic.service';
import { ArticleComponent } from './article/article.component';
import { ArticleListComponent } from './article-list/article-list.component';

@NgModule({
  declarations: [ArticleComponent, ArticleListComponent],
  exports: [ArticleListComponent],
  imports: [CommonModule, CoreModule, BrowserModule, FormsModule, HttpClientModule],
  providers: [HttpClientModule, ArticleService, HeaderBasicService],
})

export class HomeModule {}