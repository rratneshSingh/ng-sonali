import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css'],
})
export class AddProductsComponent implements OnInit {

  @ViewChild('f') form: NgForm | null = null;

  constructor() { }

  ngOnInit(): void {
  }

  submit( form: NgForm) {
    console.log(form);
  }
}
