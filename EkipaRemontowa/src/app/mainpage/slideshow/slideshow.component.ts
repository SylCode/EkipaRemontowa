import { Component, OnInit } from '@angular/core';
import { IoService } from 'src/app/services/io.service';
import { ScrollService } from 'src/scroll.service';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss'],
})
export class SlideshowComponent implements OnInit {
  constructor(private scrollService: ScrollService) {}
  ngOnInit(): void {}

  public scrollTo(destination: string) {
    this.scrollService.scrollTo(destination);
  }
}
