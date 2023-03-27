import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RandomComponent } from '../random/random.component';



@NgModule({
  declarations: [RandomComponent],
  imports: [
    CommonModule
  ],
  exports: [RandomComponent]
})
export class SharedModule { }
