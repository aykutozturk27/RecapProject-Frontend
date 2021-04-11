import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/ListResponseModel';
import { Rental } from '../models/rental';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class RentalService {
  apiUrl = "https://localhost:44330/api/";

  constructor(private httpClient: HttpClient) { }

  getRentals(): Observable<ListResponseModel<Rental>>{
    return this.httpClient.get<ListResponseModel<Rental>>(this.apiUrl + "rentals/getrentaldetails");
  }

  getByCarId(carId: number): Observable<SingleResponseModel<Rental>>{
    let newPath = this.apiUrl + "rentals/getByCarId?carId=" + carId;
    return this.httpClient.get<SingleResponseModel<Rental>>(newPath);
  }

  createRental(rental : Rental) : Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl + "rentals/update", rental);
  }
}
