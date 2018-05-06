import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router'

import { MatButtonModule, MatCheckboxModule, MatGridListModule, MatInputModule, MatIconModule } from '@angular/material';

import { AuthModule } from './auth/module';
import { HomeModule } from './home/module';

import { appRoutes } from './routes';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TokenInterceptor } from './base-api/token.interceptor';
import { CoreModule } from './core/module';
import { NgProgressModule, NgProgress } from '@ngx-progressbar/core';
import { NgProgressHttpModule } from '@ngx-progressbar/http';
import { NgProgressRouterModule } from '@ngx-progressbar/router';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    NgProgressModule.forRoot(),
    NgProgressHttpModule,
    NgProgressRouterModule,
    MatButtonModule, MatCheckboxModule, MatGridListModule, MatInputModule, MatIconModule,
    AuthModule, CoreModule,
    HomeModule,
  ],
  providers: [TokenInterceptor],
  bootstrap: [AppComponent]
})
export class AppModule { }
