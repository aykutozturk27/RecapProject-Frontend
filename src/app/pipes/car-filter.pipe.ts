import { Pipe, PipeTransform } from '@angular/core';
import { Car } from '../models/car';
import { CarDetailDto } from '../models/carDetailDto';

@Pipe({
  name: 'carFilter'
})
export class CarFilterPipe implements PipeTransform {

  transform(value: CarDetailDto[], filterText: string): CarDetailDto[] {
    filterText = filterText ? filterText.toLocaleLowerCase() : "";
    return filterText ? 
    value.filter((c: CarDetailDto) => c.carName.toLocaleLowerCase().indexOf(filterText) !== -1) 
    : value;
  }

}
