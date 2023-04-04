import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartDetailsComponent } from './cart-details.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    CartDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: CartDetailsComponent }
    ])
  ]
})
export class CartDetailsModule { }
