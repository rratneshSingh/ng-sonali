import { Component, Input, OnInit, Output, EventEmitter, ViewChild, AfterViewInit, ContentChild, AfterContentInit, ViewChildren, QueryList, OnChanges, SimpleChanges, OnDestroy, AfterViewChecked, AfterContentChecked, DoCheck } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { AddRemoveProductComponent } from '../add-remove-product/add-remove-product.component';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent implements OnInit, AfterViewInit, AfterContentInit, OnChanges, OnDestroy, DoCheck, AfterViewChecked, AfterContentChecked {

  @Input() product: Product | null = null;
  @Input() cartCount: number = 0;

  @Output() onCartAdd = new EventEmitter<number|null>();
  @Output() onCartRemove = new EventEmitter<number|null>();

  @ViewChildren(AddRemoveProductComponent) arc: QueryList<AddRemoveProductComponent> | null = null;
  @ContentChild('btn') button: HTMLButtonElement | null = null;

  constructor() {
    console.log('constructor')
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges')
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }
  ngDoCheck(): void {
    console.log('ngDoCheck')
  }

  ngOnInit(): void {
    // console.log('ngOnInit',this.arc?.get(0));
    console.log('ngOnInit');
  }

  ngAfterContentInit(): void {
    // console.log('ngAfterContentInit', this.button);
    console.log('ngAfterContentInit');
  }

  ngAfterViewInit(): void {
    // console.log('ngAfterContentInit', this.button);
    console.log('ngAfterViewInit');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }

}
