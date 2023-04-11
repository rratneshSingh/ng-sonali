import { Component, OnInit } from '@angular/core';
import { CartItem, Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.css']
})
export class CartDetailsComponent implements OnInit {

  products: Product[] = [];
  cart: CartItem[] = [];
  cartItems: Array<{ product: Product, count: number, totalPrice: number }> = [];
  cartItemsIds: { [key:string]: number } = { };

  constructor(public ps: ProductService) { }

  ngOnInit(): void {
    this.ps.getAllProducts().subscribe( products => {
      this.products = products;
      this.cartItems = this.getCartItems();
    })
    this.ps.cart$.subscribe((cart)=>{
      this.cart = cart;
      this.cartItemsIds = this.cart.reduce( (acc: { [key: string]: number }, item) => {
        acc[item.id as number] = item.count;
        return acc;
      }, {});
      this.cartItems = this.getCartItems();
    });
  }

  getCartItems() {
    return this.products.filter( p => this.cartItemsIds[p.id as number]).map( p => {
      const count = this.cartItemsIds[p.id as number]
      return {
        count: count,
        totalPrice: (p?.price||0)*count,
        product: p
      }
    })
  }



  get cartCount() {
    let count = 0;
    this.cart.forEach( cartItem => {
      count = count + cartItem.count;
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
