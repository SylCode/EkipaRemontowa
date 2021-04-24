import { ElementRef, Injectable, OnDestroy, OnInit } from '@angular/core';
import { NgxSmoothScrollDirectiveOption, NgxSmoothScrollService } from '@eunsatio/ngx-smooth-scroll';
import { ScrollableDirective } from './app/scrollable.directive';

@Injectable({
  providedIn: 'root'
})

export class ScrollService {

  constructor(private scollService: NgxSmoothScrollService) { }

  private currentFocusId: number = 0;
  private enabled: boolean = true;

  public scrollList: Array<ScrollableDirective> = [];
  public containerRef!: ElementRef<any>;

  private scrollbyElRef(source: ElementRef, destination: ElementRef):void {
    if (destination && source)
    {
      this.scollService.scrollToElement(source, destination, this.options);
      this.currentFocusId = this.scrollList.findIndex(element => element.componentRef.nativeElement.localName === destination.nativeElement.localName);
    }
  }

  public scrollTo(ComponentName: string): boolean {
    var destination = this.scrollList.find(element => element.componentRef.nativeElement.localName === ComponentName);
    if(destination && this.containerRef && this.enabled){
      this.scrollbyElRef(this.containerRef, destination.componentRef);
      return true;
    }
    else return false;
  }

  public scrollNext() {
    var nextFocusId = this.currentFocusId;
    if(this.currentFocusId < this.scrollList.length-1)
      nextFocusId+=1;
    else 
      nextFocusId=0;
    this.scrollTo(this.scrollList[nextFocusId].componentRef.nativeElement.localName);
  }

  public diableScroll(){
    this.enabled = false;
  }
  public enableScroll(){
    this.enabled = true;
  }

  public getScrollStatus(): boolean {
    return this.enabled;
  }

  public options: NgxSmoothScrollDirectiveOption = {
    duration: 1000, // Global option
    wheel: {
        duration: 1000, // This will override global option
    },
    keydown: {
    },
    stopOnArrival: true,
    timingFunction: '.08,-0.03,.04,.9'
  }
}
