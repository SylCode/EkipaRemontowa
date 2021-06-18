
import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { ScrollService } from 'src/scroll.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

  public mobileMenu: boolean = false;
  private screenWidth!: number;
  faBars=faBars;

  @HostListener('window:resize', ['$event'])
  onResize(event?: Event) {
    this.screenWidth = window.innerWidth;
    this.mobileMenu = this.screenWidth <=  1000;
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
    if(path == '')
      this.router.navigate([path]).then(() => {
        window.location.reload();
      });
      else this.router.navigate([path]);
  }
}
