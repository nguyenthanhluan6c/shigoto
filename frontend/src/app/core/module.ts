import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule, MatCheckboxModule, MatGridListModule, MatInputModule, MatIconModule } from '@angular/material';

import { SpinnerComponent } from './spinner/component';
import { BaseApiModule } from '../base-api/module';

@NgModule({
  declarations: [
    SpinnerComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule, MatCheckboxModule, MatGridListModule, MatInputModule, MatIconModule,
  ],
  exports: [
    MatButtonModule, MatCheckboxModule, MatGridListModule, MatInputModule, MatIconModule,
    SpinnerComponent, BaseApiModule
  ],
  providers: []
})
export class CoreModule { }
