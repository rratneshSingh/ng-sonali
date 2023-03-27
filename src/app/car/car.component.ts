import { Component, Input, OnInit } from '@angular/core';
import { Car, CarType } from '../models/car.model';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  @Input() car: Car | null = null;
  speed: number = 0;
  started = false;
  CarType = CarType;

  constructor() { }

  ngOnInit(): void {
  }

  incSpeed() {
    if ( this.started ) {
      this.speed += 1;
    }
  }

  decSpeed() {
    if ( this.started && this.speed > 0 ) {
      this.speed -= 1;
    }
  }

  start() {
    this.started = true;
  }
  
  stop() {
    this.started = false;
    this.speed = 0;
  }

}
