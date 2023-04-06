import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent implements OnInit {

  @Input() product: Product | null = null;
  @Input() cartCount: number = 0;

  @Output() onCartAdd = new EventEmitter<string>();
  @Output() onCartRemove = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }
}
