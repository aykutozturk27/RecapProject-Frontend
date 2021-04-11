import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { CarDetailDto } from '../models/carDetailDto';
import { ListResponseModel } from '../models/ListResponseModel';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  apiUrl = "https://localhost:44330/api/";

  constructor(private httpClient: HttpClient) { }

  getCars(): Observable<ListResponseModel<CarDetailDto>>{
    let newPath = this.apiUrl + "cars/getcardetails";
    return this.httpClient.get<ListResponseModel<CarDetailDto>>(newPath);
  }

  getcardetailbyid(carId:number): Observable<ListResponseModel<CarDetailDto>> {
    let newPath = this.apiUrl + "cars/getcardetailbyid?carId=" + carId;
    return this.httpClient.get<ListResponseModel<CarDetailDto>>(newPath);
  }

  getallbranddetailbybrandid(brandId:number): Observable<ListResponseModel<CarDetailDto>> {
    let newPath = this.apiUrl + "cars/getallbranddetailbybrandid?brandId=" + brandId;
    return this.httpClient.get<ListResponseModel<CarDetailDto>>(newPath);
  }

  getallcolordetailbycolorid(colorId:number): Observable<ListResponseModel<CarDetailDto>> {
    let newPath = this.apiUrl + "cars/getallcolordetailbycolorid?colorId=" + colorId;
    return this.httpClient.get<ListResponseModel<CarDetailDto>>(newPath);
  }

  add(car: Car) : Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl + "cars/add", car);
  }
}
