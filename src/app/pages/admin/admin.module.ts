import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddProductsComponent } from './add-products/add-products.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AddProductsComponent,
    ProductsListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: '', component: ProductsListComponent },
      { path: 'create', component: AddProductsComponent },
      { path: 'edit', component: AddProductsComponent }
    ])
  ]
})
export class AdminModule { }
