import { Component } from '@angular/core';
import { Car, CarType } from './models/car.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo';

  cars: Car[] = [
    {
      price: 500,
      brand: 'Maruti',
      color: 'Red',
      outOfStock: false,
      type: CarType.SUV,
    },
    {
      price: 1000,
      brand: 'Fortuner',
      color: 'Black',
      outOfStock: true,
      type: CarType.LEMO
    },
    new Car()
  ]
}
