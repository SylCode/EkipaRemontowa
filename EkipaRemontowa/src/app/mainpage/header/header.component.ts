import { IoService } from 'src/app/services/io.service';
import { DataService } from './../../services/data.service';

import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { ScrollService } from 'src/scroll.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public mobileMenu: boolean = false;
  private screenWidth!: number;
  faBars = faBars;
  private ActiveModules: Array<string> = new Array<string>();

  @HostListener('window:resize', ['$event'])
  onResize(event?: Event) {
    this.screenWidth = window.innerWidth;
    this.mobileMenu = this.screenWidth <= 1000;
  }

  constructor(
    public scrollService: ScrollService,
    private router: Router,
    private ioService: IoService
  ) {}

  ngOnInit(): void {
    this.ioService.getActiveModules()?.subscribe((res) => {
      this.ActiveModules = res;
    });
  }

  public moduleActive(name: string): boolean {
    return this.ActiveModules.indexOf(name) > -1;
  }

  public scroll(el: string) {
    if (!this.scrollService.scrollTo(el)) this.navigateTo('', el);
  }

  public navigateTo(path: string, postScroll: string) {
    if (path == '') {
      this.router.navigate([path]).then(() => {
        //window.location.reload();
        this.scrollService.pendingScroll = postScroll;
        this.scrollService.enableScroll();
      });
    } else {
      this.scrollService.diableScroll();
      this.router.navigate([path]);
    }
  }
}
