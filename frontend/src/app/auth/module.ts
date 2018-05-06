import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpModule, Http } from '@angular/http';
import { CoreModule } from '../core/module';

import { SignInComponent } from './sign-in/sign-in.component';

import { UserService } from './services/user.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  declarations: [SignInComponent],
  exports: [],
  imports: [CommonModule, CoreModule, BrowserModule, FormsModule, HttpClientModule, HttpModule],
  providers: [HttpClientModule, UserService

  ],
})

export class AuthModule { }
