import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { CoreModule} from '../core/module';

import { SignInComponent } from './sign-in/sign-in.component';

import { UserService } from './services/user.service';

@NgModule({
  declarations: [SignInComponent],
  exports: [],
  imports: [CommonModule, CoreModule, BrowserModule, FormsModule, HttpClientModule],
  providers: [HttpClientModule, UserService],
})

export class AuthModule {}