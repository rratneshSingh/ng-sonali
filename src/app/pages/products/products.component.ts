import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  cart: { [id: string]: number } = {};

  get cartCount() {
    let count = 0;
    Object.keys(this.cart).forEach( id => {
      count = count + this.cart[id];
    });
    return count;
  }

  onAddToCart(id: string) {
    this.ps.onAddToCart(id);
  }

  onRemoveToCart(id: string) {
    this.ps.onRemoveToCart(id);
  }

  constructor(public ps: ProductService) { }

  ngOnInit(): void {
    this.ps.cart$.subscribe((cart)=>{
      debugger;
      this.cart = cart;
    });
  }

}
