import { Component, OnInit } from '@angular/core';
import { NgxSmoothScrollDirectiveOption } from '@eunsatio/ngx-smooth-scroll';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss']
})
export class MainpageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public options: NgxSmoothScrollDirectiveOption = {
    duration: 1500, // Global option
    wheel: {
        duration: 1100, // This will override global option
    },
    keydown: {
    },
    stopOnArrival: true,
    timingFunction: '.08,-0.03,.04,.9'
}

}
