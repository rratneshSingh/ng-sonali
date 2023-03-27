import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add-remove-product',
  templateUrl: './add-remove-product.component.html',
  styleUrls: ['./add-remove-product.component.css']
})
export class AddRemoveProductComponent implements OnInit {

  @Input() count = 0;
  @Output() onAdd = new EventEmitter();
  @Output() onSubstract = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
