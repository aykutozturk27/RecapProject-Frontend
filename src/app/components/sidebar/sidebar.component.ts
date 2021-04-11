import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car';
import { CarDetailDto } from 'src/app/models/carDetailDto';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  cars: CarDetailDto[] = [];
  currentMenu: string;
  menus : string [] = [
    "cars", "brands", "colors", "rentals", "customers"
  ]
  index : number;

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

  setCurrentMenu(index: number) {
    this.currentMenu = this.menus[index];
  }

  getCurrentMenuClass(index: number){
    if (this.menus[index] == this.currentMenu) {
      return "list-group-item list-group-item-info active";
    } else {
      return "list-group-item list-group-item-info";
    }
  }
}
