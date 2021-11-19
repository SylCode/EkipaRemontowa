import { SitedataService } from './../../services/sitedata.service';

import { Component, OnInit, HostListener, Input } from '@angular/core';
import { Router } from '@angular/router';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { ScrollService } from 'src/scroll.service';
// @ts-ignore
import { SiteData } from 'SiteData';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public mobileMenu: boolean = window.innerWidth <= 1000;
  private screenWidth!: number;
  faBars = faBars;
  private ActiveModules: Array<string> = new Array<string>();
  private siteData: SiteData;

  @HostListener('window:resize', ['$event'])
  onResize(event?: Event) {
    this.screenWidth = window.innerWidth;
    this.mobileMenu = this.screenWidth <= 1000;
    if (this.mobileMenu) console.log('Mobile Menu');
  }

  public siteName: string;

  constructor(
    public scrollService: ScrollService,
    private router: Router,
    private siteDataService: SitedataService
  ) {}

  ngOnInit(): void {
    if (this.siteData == undefined) {
      this.siteDataService.SiteData.subscribe((res: SiteData) => {
        this.siteName = res.Titles.companyName;
        this.ActiveModules = res.ActiveModules.Modules;
      });
    } else {
      this.siteName = this.siteData.Titles.companyName;
      this.ActiveModules = this.siteData.ActiveModules.Modules;
    }
  }

  public moduleActive(name: string): boolean {
    return this.ActiveModules.indexOf(name) > -1;
  }

  public scroll(el: string) {
    document.getElementById('header').focus();
    if (!this.scrollService.scrollTo(el)) this.navigateTo('', el);
  }
  public openMobileMenu(): void {}

  public navigateTo(path: string, postScroll: string) {
    if (path == '') {
      this.router.navigate([path]).then(() => {
        //window.location.reload();
        this.scrollService.pendingScroll = postScroll;
      });
    } else {
      this.scrollService.diableScroll();
      this.router.navigate([path]);
    }
  }
}
