import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css'],
})
export class CarDetailComponent implements OnInit {
  car: Car;

  imageBasePath: string = 'https://localhost:44330/';

  defaultImage: string;
  dataLoaded = false;

  constructor(
    private carService: CarService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['carId']) {
        this.getcardetailbyid(params['carId']);
      }
    });
  }

  getcardetailbyid(id: number) {
    this.carService.getcardetailbyid(id).subscribe((response) => {
      this.car = response.data;
      this.dataLoaded = true;
      console.log(this.car);
      
    });
  }
}
