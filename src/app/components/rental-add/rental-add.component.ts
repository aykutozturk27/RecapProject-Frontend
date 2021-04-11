import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Rental } from 'src/app/models/rental';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-rental-add',
  templateUrl: './rental-add.component.html',
  styleUrls: ['./rental-add.component.css']
})
export class RentalAddComponent implements OnInit {

  rental: Rental;

  constructor(
    private rentalService: RentalService,
    private toastrService: ToastrService
  ) { }

  ngOnInit(): void {
  }

  addRental(){
    this.rentalService.createRental(this.rental).subscribe((response) => {
      this.toastrService.success(response.message, "Başarılı");
    }, responseError =>{
      this.toastrService.success(responseError.message, "Başarısız");
    })
  }

  getByCarId(carId: number){
    this.rentalService.getByCarId(carId).subscribe((response) => {
      this.rental = response.data;
      console.log(this.rental);
    });
  }
}
