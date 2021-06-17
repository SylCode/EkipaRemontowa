declare var require: any;
import { Component, OnInit } from '@angular/core';
import { IoService } from '../services/io.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {
  constructor(private ioService: IoService) {
    const carousel = require('../../carousel.js');
    this.images = [];
  }

  public images: Array<string>;
  ngOnInit(): void {
    this.ioService.getGalleryList().subscribe((data) => {
      data.forEach((file: string) => {
        this.images.push('../../assets/Galery/' + file);
      });
    });
  }
}
