import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { ScrollableDirective } from 'src/app/scrollable.directive';
import { IoService } from 'src/app/services/io.service';
import { ScrollService } from 'src/scroll.service';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss'],
})
export class MainpageComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChildren(ScrollableDirective)
  set ele1 (v: QueryList<ScrollableDirective>){
    console.log('This element is set when ngIf = true');
    this.scrollableComponentList = v;
  };
  @ViewChild(HeaderComponent) set ele2(v:HeaderComponent){
    console.log('This element is set when ngIf = true');
    this.header = v;
  };
  @ViewChild('wrapper') set ele3(v:ElementRef){
    console.log('This element is set when ngIf = true');
    this.basicScrollElRef = v;
  };

  scrollableComponentList!: QueryList<ScrollableDirective>;
  header!: HeaderComponent;
  basicScrollElRef!: ElementRef;
  sub: Subscription = new Subscription();
  
  private ActiveModules: Array<string> = new Array<string>();

  constructor(private scrollService: ScrollService,
    private ioService: IoService) {}

  ngOnInit(): void {
    this.scrollService.enableScroll();
    this.ioService.getActiveModules()?.subscribe((res) => {
      this.ActiveModules = res;
    });
    console.log('++++ngOnInit++++');
    console.log(this.scrollableComponentList);
    console.log(this.basicScrollElRef);
  }

  ngAfterViewInit(): void {
    console.log('++++ngAfterViewInit++++');
    this.scrollService.scrollList = this.scrollableComponentList.toArray();
    this.scrollService.containerRef = this.basicScrollElRef;
    console.log(this.scrollableComponentList);
    console.log(this.basicScrollElRef);
  }

  public moduleActive(name: string): boolean {
    return this.ActiveModules.indexOf(name) > -1;
  }


  ngOnDestroy() {}
}
