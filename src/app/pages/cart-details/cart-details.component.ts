import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.css']
})
export class CartDetailsComponent implements OnInit {

  products: Product[] = [];
  cart: {[id: string]: number} = {};
  cartItems: Array<{ product: Product, count: number, totalPrice: number }> = [];

  constructor(public ps: ProductService) { }

  ngOnInit(): void {
    this.products = this.ps.products;
    this.ps.cart$.subscribe((cart)=>{
      this.cart = cart;
      this.cartItems = this.products.filter( ( p ) => this.cart[p.id || ''] ).map( p => {
        return {
          product: p,
          count: this.cart[p.id || ''],
          totalPrice: (p.price || 0)*this.cart[p.id||'']
        }
      })
    });
  }



  get cartCount() {
    let count = 0;
    Object.keys(this.cart).forEach( id => {
      count = count + this.cart[id];
    });
    return count;
  }

  
  get cartTotal() {
    let total = 0;
    this.cartItems.forEach( item => {
      total += item.totalPrice
    });
    return total;
  }
}
