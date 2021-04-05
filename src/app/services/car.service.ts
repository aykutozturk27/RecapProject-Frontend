import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { CarDetailDto } from '../models/carDetailDto';
import { ListResponseModel } from '../models/ListResponseModel';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  apiUrl = "https://localhost:44330/api/";

  constructor(private httpClient: HttpClient) { }

  getCars(): Observable<ListResponseModel<Car>>{
    let newPath = this.apiUrl + "cars/getcardetails";
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getcardetailbyid(carId:number): Observable<SingleResponseModel<Car>> {
    let newPath = this.apiUrl + "cars/getcardetailbyid?carId=" + carId;
    return this.httpClient.get<SingleResponseModel<Car>>(newPath);
  }

  getallbranddetailbybrandid(brandId:number): Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl + "cars/getallbranddetailbybrandid?brandId=" + brandId;
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getallcolordetailbycolorid(colorId:number): Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl + "cars/getallcolordetailbycolorid?colorId=" + colorId;
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }
}
