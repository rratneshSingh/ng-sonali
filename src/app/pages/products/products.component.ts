import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];
  filteredProducts: Product[] = [];
  cart: { [id: string]: number } = {};
  searchText = '';

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
    this.products = [...this.ps.products];
    this.filteredProducts = [...this.products];
    this.ps.cart$.subscribe((cart)=>{
      this.cart = cart;
    });
  }

  search() {
    if ( this.searchText.trim() ) {
      this.filteredProducts = this.products.filter( p => {
        return p.title?.toLowerCase().includes(this.searchText.toLowerCase());
      });
    } else {
      this.filteredProducts = [...this.products];
    }
  }
}
