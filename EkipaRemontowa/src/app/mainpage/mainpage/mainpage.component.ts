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
import { ScrollService } from 'src/scroll.service';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss'],
})
export class MainpageComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChildren(ScrollableDirective)
  scrollableComponentList!: QueryList<ScrollableDirective>;
  @ViewChild(HeaderComponent) header!: HeaderComponent;
  @ViewChild('wrapper') basicScrollElRef!: ElementRef;

  sub: Subscription = new Subscription();

  constructor(private scrollService: ScrollService) {}

  ngOnInit(): void {
    this.scrollService.enableScroll();
  }

  ngAfterViewInit(): void {
    this.scrollService.scrollList = this.scrollableComponentList.toArray();
    this.scrollService.containerRef = this.basicScrollElRef;
  }

  ngOnDestroy() {}
}
