
import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { ScrollService } from 'src/scroll.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

  public mobileMenu: boolean = false;
  private screenWidth!: number;

  @HostListener('window:resize', ['$event'])
  onResize(event?: Event) {
    this.screenWidth = window.innerWidth;
    this.mobileMenu = this.screenWidth <=  860;
}

  constructor(
    public scrollService: ScrollService, private router: Router) {}

  ngOnInit(): void {
  }
  
  public scroll(el: string) {
    if(!this.scrollService.scrollTo(el))
    this.navigateTo('', el);
  }

  public navigateTo(path: string, postScroll: string){
    this.router.navigate([path], {queryParams: {scrollTo: postScroll}});
  }
}
