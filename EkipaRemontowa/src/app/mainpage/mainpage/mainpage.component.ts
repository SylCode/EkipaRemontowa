import { SitedataService } from './../../services/sitedata.service';
// @ts-ignore
import { SiteData } from 'SiteData';
import { ActivatedRoute } from '@angular/router';
import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
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
  public mobileMenu: boolean = window.innerWidth <= 1000;
  private screenWidth!: number;

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

  @HostListener('window:resize', ['$event'])
  onResize(event?: Event) {
    this.screenWidth = window.innerWidth;
    this.mobileMenu = this.screenWidth <= 1000;
  }

  scrollableComponentList!: QueryList<ScrollableDirective>;
  header!: HeaderComponent;
  basicScrollElRef!: ElementRef;
  sub: Subscription = new Subscription();

  private ActiveModules: Array<string> = new Array<string>();
  public siteData: SiteData;

  constructor(
    private scrollService: ScrollService,
    private activatedRoute: ActivatedRoute,
    private siteDataService: SitedataService
  ) {}

  ngAfterViewChecked(): void {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((data: any) => {
      this.siteData = data.siteData;
      this.siteDataService.siteData = this.siteData;
      this.ActiveModules = this.siteData.ActiveModules.Modules;
      this.activatedRoute.queryParams.subscribe((params) => {
        this.scrollService.pendingScroll = params['postScroll'];
      });
    });
  }

  ngAfterViewInit(): void {
    this.scrollService.containerRef = this.basicScrollElRef;
    this.scrollService.initScrollService(
      this.scrollableComponentList.toArray()
    );
    this.scrollService.enableScroll();
  }

  public moduleActive(name: string): boolean {
    return this.siteData.ActiveModules.Modules.indexOf(name) > -1;
  }

  ngOnDestroy() {}
}
