import { Observable, Subject } from 'rxjs';
import { ElementRef, Injectable, OnDestroy, OnInit } from '@angular/core';
import {
  NgxSmoothScrollDirectiveOption,
  NgxSmoothScrollService,
} from '@eunsatio/ngx-smooth-scroll';
import { ScrollableDirective } from './app/scrollable.directive';

@Injectable({
  providedIn: 'root',
})
export class ScrollService {
  private currentFocusId: number = 0;
  private enabled: boolean = true;
  public pendingScroll: string = '';
  public scrollEnabled: Subject<boolean> = new Subject<boolean>();
  public scrollList: Subject<Array<ScrollableDirective>> = new Subject<
    Array<ScrollableDirective>
  >();
  private _scrollList: Array<ScrollableDirective> = [];
  private _containerRef: ElementRef<any> = new ElementRef<any>(null);
  get containerRef(): ElementRef<any> {
    return this._containerRef;
  }
  set containerRef(ref: ElementRef<any>) {
    this._containerRef = ref;
  }

  constructor(private scollService: NgxSmoothScrollService) {
    this.scrollList.subscribe((value) => (this._scrollList = value));
    this.scrollEnabled.subscribe((value) => {
      this.enabled = value;
      if (this.pendingScroll != '' && this.pendingScroll != undefined) {
        this.scrollTo(this.pendingScroll);
        this.pendingScroll = '';
      }
    });
  }

  public initScrollService(scrollList: Array<ScrollableDirective>) {
    this.scrollList.next(scrollList);
  }

  private scrollbyElRef(source: ElementRef, destination: ElementRef): void {
    if (destination && source) {
      this.scrollList.subscribe((list) => {});
      this.scollService.scrollToElement(source, destination, this.options);
      this.currentFocusId = this._scrollList.findIndex(
        (element) =>
          element.componentRef.nativeElement.localName ===
          destination.nativeElement.localName
      );
    }
  }

  public scrollTo(ComponentName: string): boolean {
    var destination = this._scrollList.find(
      (element) =>
        element.componentRef.nativeElement.localName === ComponentName
    );
    if (destination && this.containerRef && this.enabled) {
      this.scrollbyElRef(this.containerRef, destination.componentRef);
      return true;
    } else return false;
  }

  public scrollNext() {
    var nextFocusId = this.currentFocusId;
    if (this.currentFocusId < this._scrollList.length - 1) nextFocusId += 1;
    else nextFocusId = 0;
    this.scrollTo(
      this._scrollList[nextFocusId].componentRef.nativeElement.localName
    );
  }

  public diableScroll() {
    this.scrollEnabled.next(false);
  }
  public enableScroll() {
    this.scrollEnabled.next(true);
  }

  public getScrollStatus(): boolean {
    return this.enabled;
  }

  public options: NgxSmoothScrollDirectiveOption = {
    duration: 1000, // Global option
    wheel: {
      duration: 1000, // This will override global option
    },
    keydown: {},
    stopOnArrival: true,
    timingFunction: '.08,-0.03,.04,.9',
  };
}
