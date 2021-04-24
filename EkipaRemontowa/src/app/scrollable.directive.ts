import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appScrollable]'
})
export class ScrollableDirective {

  public componentRef: ElementRef<HTMLElement>
  constructor(elementRef: ElementRef<HTMLElement>) {
    this.componentRef = elementRef;
   }

}
