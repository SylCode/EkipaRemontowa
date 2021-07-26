import { ActivatedRoute } from '@angular/router';
import {
  AfterViewChecked,
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
export class MainpageComponent
  implements OnInit, AfterViewInit, AfterViewChecked, OnDestroy
{
  @ViewChildren(ScrollableDirective)
  set ele1(v: QueryList<ScrollableDirective>) {
    this.scrollableComponentList = v;
  }

  @ViewChild(HeaderComponent) set ele2(v: HeaderComponent) {
    this.header = v;
  }

  @ViewChild('wrapper') set ele3(v: ElementRef) {
    this.basicScrollElRef = v;
  }

  scrollableComponentList!: QueryList<ScrollableDirective>;
  header!: HeaderComponent;
  basicScrollElRef!: ElementRef;
  sub: Subscription = new Subscription();

  private ActiveModules: Array<string> = new Array<string>();

  constructor(
    private scrollService: ScrollService,
    private ioService: IoService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngAfterViewChecked(): void {
    console.log('View Rendered');
    this.scrollService.enableScroll();
  }

  ngOnInit(): void {
    this.ioService.getActiveModules()?.subscribe((res) => {
      this.ActiveModules = res;
    });
    this.activatedRoute.queryParams.subscribe((params) => {
      //this.scrollService.pendingScroll = params['postScroll'];
    });
  }

  ngAfterViewInit(): void {
    this.scrollService.containerRef = this.basicScrollElRef;
    this.scrollService.initScrollService(
      this.scrollableComponentList.toArray()
    );
  }

  public moduleActive(name: string): boolean {
    return this.ActiveModules.indexOf(name) > -1;
  }

  ngOnDestroy() {}
}
