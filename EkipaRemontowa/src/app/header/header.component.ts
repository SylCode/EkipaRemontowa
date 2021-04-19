
import { Component, ElementRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ScrollService } from 'src/scroll.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  @ViewChild('mainpage')
  mainpage!: ElementRef<HTMLElement>;

  constructor(
    private scrollService: ScrollService, 
    private ref: ElementRef) { }

  ngOnInit(): void { 
  }



  public scroll(el: string) {
    var destination = document.getElementById(el);
    this.scrollService.scrollbyElRef(this.ref, this.mainpage);
  }
}
