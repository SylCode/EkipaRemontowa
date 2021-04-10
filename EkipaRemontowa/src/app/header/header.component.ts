
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public scroll(el: string) {
    var element = document.getElementById(el);
    if (element)
    {
      element.scrollIntoView({behavior: 'smooth'});
    }
}

}
