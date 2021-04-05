import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/ListResponseModel';
import { Rental } from '../models/rental';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class RentalService {
  apiUrl = "https://localhost:44330/api/";

  constructor(private httpClient: HttpClient) { }

  getRentals(): Observable<ListResponseModel<Rental>>{
    return this.httpClient.get<ListResponseModel<Rental>>(this.apiUrl + "rentals/getrentaldetails");
  }

  addRental(rental : Rental) : Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl + "rentals/add", rental);
  }
}
