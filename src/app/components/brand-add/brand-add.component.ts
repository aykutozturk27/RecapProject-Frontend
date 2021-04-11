import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand-add',
  templateUrl: './brand-add.component.html',
  styleUrls: ['./brand-add.component.css']
})
export class BrandAddComponent implements OnInit {

  brandAddForm: FormGroup;
  
  constructor(
    private formBuilder: FormBuilder,
    private brandService: BrandService,
    private toastrService: ToastrService
  ) { }

  ngOnInit(): void {
    this.createbrandAddForm();
  }

  createbrandAddForm(){
    this.brandAddForm = this.formBuilder.group({
      name: ["", Validators.required]
    })
  }

  //Errors = ValidationErrors
  add(){
    if (this.brandAddForm.valid) {
      let brandModel = Object.assign({}, this.brandAddForm.value);
      this.brandService.add(brandModel).subscribe(response => {        
        this.toastrService.success(response.message,"Başarılı");
      }, responseError => {
        if (responseError.error.ValidationErrors.length > 0) {
          for (let i = 0; i < responseError.error.ValidationErrors.length; i++) {
            this.toastrService.error(responseError.error.ValidationErrors[i].ErrorMessage, "Doğrulama Hatası");
          }
        }
        
      })
    } else{
      this.toastrService.error("Formunuz eksik", "Dikkat");
    }
  }
}
