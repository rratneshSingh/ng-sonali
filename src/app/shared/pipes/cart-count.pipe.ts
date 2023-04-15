import { Injectable, Pipe, PipeTransform } from '@angular/core';
import { CartItem, Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Injectable()
@Pipe({
  name: 'cartCount',
  pure: false
})
export class CartCountPipe implements PipeTransform {

  constructor(private ps: ProductService) {
  }
  
  // transform(value: unknown, product: Product | null, count: number): unknown {
  //   if ( product ) {
  //     return 'You have ' + count + ' ' + product.title + ' in your cart';
  //   } else {
  //     return '';
  //   }
  // }

  transform(value: unknown): unknown {
    return this.ps.cart$.getValue().length + ' categories';
  }
}
