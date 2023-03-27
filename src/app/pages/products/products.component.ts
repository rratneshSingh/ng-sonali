import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [
    {
      id: '1',
      title: 'Lenovo Laptop',
      price: 45000,
      description: '4GB Ram, 15 inch screen',
      stockCount: 9
    },
    {
      id: '2',
      title: 'Samsung Laptop',
      price: 90000,
      description: '4GB Ram, 15 inch screen',
      stockCount: 7
    },
    {
      id: '3',
      title: 'HP Laptop',
      price: 30000,
      description: '4GB Ram, 15 inch screen',
      stockCount: 0
    }
  ];

  cart: { [id: string]: number } = {};

  get cartCount() {
    let count = 0;
    Object.keys(this.cart).forEach( id => {
      count = count + this.cart[id];
    });
    return count;
  }

  onAddToCart(id: string) {
    this.cart[id] = (this.cart[id] || 0) + 1;
  }

  onRemoveToCart(id: string) {
    if ( this.cart[id] === 0) return;
    this.cart[id] -= 1;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
