import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule, MatCheckboxModule, MatGridListModule, MatInputModule, MatIconModule } from '@angular/material';

import { MyCustomHttpClient } from '../base-api/module';
import { SpinnerComponent } from './spinner/component';
import { ErrorWellComponent } from './error-well/component';

@NgModule({
  declarations: [
    SpinnerComponent,
    ErrorWellComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule, MatCheckboxModule, MatGridListModule, MatInputModule, MatIconModule,
  ],
  exports: [
    MatButtonModule, MatCheckboxModule, MatGridListModule, MatInputModule, MatIconModule,
    SpinnerComponent,
    ErrorWellComponent,

  ],
  providers: [MyCustomHttpClient]
})
export class CoreModule { }
