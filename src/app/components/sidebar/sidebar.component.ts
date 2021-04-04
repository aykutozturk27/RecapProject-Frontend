import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car';
import { BrandService } from 'src/app/services/brand.service';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  cars: Car[] = [];
  currentCar: Car;

  constructor(
    private carService: CarService
  ) {}

  ngOnInit(): void {
    this.getCars();
  }

  getCars() {
    this.carService.getCars().subscribe((response) => {
      this.cars = response.data;
    });
  }

  setCurrentCars(car: Car) {
    this.currentCar = car;
  }

  getCurrentCarClass(car: Car){
    if (car == this.currentCar) {
      return "list-group-item list-group-item-primary active";
    } else {
      return "list-group-item list-group-item-primary";
    }
  }

  getAllCarClass(){
    if (!this.currentCar) {
      return "list-group-item list-group-item-primary active";
    } else {
      return "list-group-item list-group-item-primary";
    }
  }
}
