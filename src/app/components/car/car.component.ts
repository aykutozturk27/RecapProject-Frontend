import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarDetailDto } from 'src/app/models/carDetailDto';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent implements OnInit {
  cars: CarDetailDto[] = [];

  dataLoaded = false;
  isDetail = false;

  filterText = "";

  constructor(
    private carService: CarService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['brandId']) {
        this.getallbranddetailbybrandid(params['brandId']);
      } else if (params['colorId']) {
        this.getallcolordetailbycolorid(params['colorId']);
      } else {
        this.getCars();
      }
    });
  }

  getallbranddetailbybrandid(brandId: number) {
    this.carService.getallbranddetailbybrandid(brandId).subscribe((response) => {
      this.cars = response.data;
      this.dataLoaded = true;
    });
  }

  getallcolordetailbycolorid(colorId: number) {
    this.carService.getallcolordetailbycolorid(colorId).subscribe((response) => {
      this.cars = response.data;
      this.dataLoaded = true;
    });
  }

  getCars() {
    this.carService.getCars().subscribe((response) => {
      this.cars = response.data;
      this.dataLoaded = true;
      this.isDetail = true;
    });
  }
}
