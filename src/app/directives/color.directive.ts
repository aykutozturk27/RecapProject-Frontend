import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective {

  constructor(private item: ElementRef) { 
    item.nativeElement.style.color = "red";
  }

}
