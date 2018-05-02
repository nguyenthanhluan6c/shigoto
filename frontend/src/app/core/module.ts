import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule, MatCheckboxModule, MatGridListModule, MatInputModule, MatIconModule } from '@angular/material';

@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    MatButtonModule, MatCheckboxModule, MatGridListModule, MatInputModule, MatIconModule
   ],
  exports: [
    MatButtonModule, MatCheckboxModule, MatGridListModule, MatInputModule, MatIconModule
  ],
})
export class CoreModule {}