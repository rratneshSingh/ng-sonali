import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddRemoveProductComponent } from './add-remove-product/add-remove-product.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductsComponent } from './products.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductGuard } from 'src/app/services/product.guard';

@NgModule({
  declarations: [
    ProductsComponent,
    ProductCardComponent,
    ProductDetailComponent,
    AddRemoveProductComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: '', component: ProductsComponent},
      { path: ':productId', component: ProductDetailComponent }
    ])
  ], 
})
export class ProductsModule { }
