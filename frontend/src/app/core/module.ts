import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule, MatCheckboxModule, MatGridListModule, MatInputModule, MatIconModule, MatOptionModule, MatSelectModule } from '@angular/material';

import { SpinnerComponent } from './spinner/component';
import { BaseApiModule } from '../base-api/module';

@NgModule({
  declarations: [
    SpinnerComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule, MatCheckboxModule, MatGridListModule, MatInputModule, MatIconModule,
    MatOptionModule, MatSelectModule
  ],
  exports: [
    MatButtonModule, MatCheckboxModule, MatGridListModule, MatInputModule, MatIconModule,
    MatOptionModule, MatSelectModule,
    SpinnerComponent, BaseApiModule
  ],
  providers: []
})
export class CoreModule { }
