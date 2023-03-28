import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './pages/products/products.component';
import { ProductCardComponent } from './pages/products/product-card/product-card.component';
import { CartComponent } from './pages/products/cart/cart.component';
import { AddRemoveProductComponent } from './pages/products/add-remove-product/add-remove-product.component';
import { CartDetailsComponent } from './pages/cart-details/cart-details.component';
import { ProductService } from './services/product.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductCardComponent,
    CartComponent,
    AddRemoveProductComponent,
    CartDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
