import { Component, OnInit } from '@angular/core';
import { CartItem, Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  show = false;
  data1 = {
    name: 'Ram'
  }
  data2 = {
    name: 'Shyam'
  }
  products: Product[] = [];
  filteredProducts: Product[] = [];
  cart: CartItem[] = [];
  searchText = '';

  get cartCount() {
    let count = 0;
    this.cart.forEach( cartItem => {
      count = count + cartItem.count;
    });
    return count;
  }

  onAddToCart(id: number|null) {
    this.ps.addToCart(id);
  }

  onRemoveToCart(id: number|null) {
    this.ps.removeFromCart(id);
  }

  constructor(public ps: ProductService) { }

  ngOnInit(): void {
    this.ps.getAllProducts().subscribe( products => {
      this.products = products;
      this.filteredProducts = this.products;
    });
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

  getCartCountById(id: number | null) {
    const cartItem = this.cart.find( c => c.id === id );
    if ( cartItem ) {
      return cartItem.count;
    } else {
      return 0;
    }
  }
}
