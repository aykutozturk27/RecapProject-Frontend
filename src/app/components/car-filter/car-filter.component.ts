import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/brand';
import { Car } from 'src/app/models/car';
import { Color } from 'src/app/models/color';
import { BrandService } from 'src/app/services/brand.service';
import { CarService } from 'src/app/services/car.service';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-car-filter',
  templateUrl: './car-filter.component.html',
  styleUrls: ['./car-filter.component.css']
})
export class CarFilterComponent implements OnInit {

  brands: Brand[] = [];
  colors: Color[] = [];

  selectedBrandId: number;
  selectedColorId: number;

  constructor(
    private brandService: BrandService,
    private colorService: ColorService
  ) { }

  ngOnInit(): void {
    this.getBrands();
    this.getColors();
  }

  getBrands() {
    this.brandService.getBrands().subscribe((response) => {
      this.brands = response.data;
    });
  }

  getColors() {
    this.colorService.getColors().subscribe((response) => {
      this.colors = response.data;
    });
  }

  IsCurrentBrandNull(){
    if(this.selectedBrandId){
      return true;
    }else{
      return false;
    }
  }

  getSelectedBrand(brandId:number){
    if (this.selectedBrandId == brandId) {
      return true;
    } else {
      this.selectedBrandId == -1
      return this.selectedBrandId;
    }
  }

  IsCurrentColorNull(){
    if(this.selectedColorId){
      return true;
    }else{
      return false;
    }
  }

  getSelectedColor(colorId:number){    
    if (this.selectedColorId == colorId) {
      return true;
    } else {
      return false;
    }
  }

  getRouterLink(){
    if(this.selectedBrandId && this.selectedColorId){
      return "/cars/filter/brand/"+this.selectedBrandId+"/color/"+this.selectedColorId;
    }else if(this.selectedBrandId){
      return "/cars/filter/brand/"+this.selectedBrandId;
    }else if(this.selectedColorId){
      return "/cars/filter/color/"+this.selectedColorId;
    }else{
      return "/cars";
    }
  }
}
