import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appChangeColor]'
})
export class ChangeColorDirective {

  constructor(el: ElementRef) { 
    this.changeColor(el);
  }

  changeColor(el: ElementRef) {
    el.nativeElement.style.color = '#FFA07A'
  }

}
