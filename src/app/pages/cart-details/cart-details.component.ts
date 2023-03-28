import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.css']
})
export class CartDetailsComponent implements OnInit {

  cart: {[id: string]: number} = {};

  constructor(public ps: ProductService) { }

  ngOnInit(): void {
    this.ps.cart$.subscribe((cart)=>{
      debugger;
      this.cart = cart;
    });
  }

  get cartCount() {
    let count = 0;
    Object.keys(this.cart).forEach( id => {
      count = count + this.cart[id];
    });
    return count;
  }

}
