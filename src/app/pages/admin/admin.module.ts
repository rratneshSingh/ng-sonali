import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddProductsComponent } from './add-products/add-products.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddUserComponent } from './add-user/add-user.component';



@NgModule({
  declarations: [
    AddProductsComponent,
    ProductsListComponent,
    AddUserComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: '', component: ProductsListComponent },
      { path: 'product/create', component: AddProductsComponent },
      { path: 'product/edit', component: AddProductsComponent },
      { path: 'user/create', component: AddUserComponent },
      { path: 'user/edit', component: AddUserComponent }
    ])
  ]
})
export class AdminModule { }
