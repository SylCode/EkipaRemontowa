import { ElementRef, Injectable } from '@angular/core';
import { NgxSmoothScrollDirectiveOption, NgxSmoothScrollOption, NgxSmoothScrollService } from '@eunsatio/ngx-smooth-scroll';

@Injectable({
  providedIn: 'root'
})

export class ScrollService {

  constructor(private scollService: NgxSmoothScrollService) { }

  public scrollById(sourceId: string, destinationId: string):void {
    var destination = document.getElementById(destinationId);
    var source = document.getElementById(sourceId);
    if (destination && source)
    {
      this.scollService.scrollToElement(source, destination, this.options).subscribe();
    }
  }

  public scrollbyElRef(source: ElementRef, destination: ElementRef):void {
    if (destination && source)
    {
      this.scollService.scrollToElement(source, destination, this.options).subscribe();
    }
  }

  public options: NgxSmoothScrollDirectiveOption = {
    duration: 1500, // Global option
    wheel: {
        duration: 1100, // This will override global option
    },
    keydown: {
    },
    stopOnArrival: true,
    timingFunction: '.08,-0.03,.04,.9'
  }
}
