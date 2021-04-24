import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSmoothScrollDirectiveOption, NgxSmoothScrollOption } from '@eunsatio/ngx-smooth-scroll';
import { Subscription } from 'rxjs';
import { ScrollableDirective } from 'src/app/scrollable.directive';
import { ScrollService } from 'src/scroll.service';
import { HeaderComponent } from '../header/header.component';

interface ScrollProperty {
  [key: string]: any;
  options: NgxSmoothScrollOption | NgxSmoothScrollDirectiveOption;
}
@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss']
})
export class MainpageComponent implements OnInit,AfterViewInit, OnDestroy {
  @ViewChildren(ScrollableDirective) scrollableComponentList!: QueryList<ScrollableDirective>
  @ViewChild(HeaderComponent) header!: HeaderComponent
  @ViewChild('wrapper') basicScrollElRef!: ElementRef;

  sub: Subscription = new Subscription();

  constructor(private container: ElementRef,
    private scrollService: ScrollService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.scrollService.enableScroll();
  }

  ngAfterViewInit(): void {
    this.scrollService.scrollList = this.scrollableComponentList.toArray();
    this.scrollService.containerRef = this.basicScrollElRef;
    this.sub = this.route
    .queryParams
    .subscribe(params => {
      // Defaults to 0 if no query param provided.
        this.scrollService.scrollTo(params['scrollTo']!);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
      //window.removeEventListener('scroll', this.scroll, true);
  }
  
}
