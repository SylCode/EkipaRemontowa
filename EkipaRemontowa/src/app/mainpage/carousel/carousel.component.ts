declare var require: any;
import { Component, OnInit } from '@angular/core';
import { Image } from '@fnxone/ngx-photoswipe';
import { IoService } from 'src/app/services/io.service';
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {
  public slideIndex = 1;
  constructor(private ioService: IoService) {
    this.images = [];
  }

  public images: Image[];

  ngOnInit(): void {
    this.ioService.getGalleryList().subscribe((data) => {
      data.forEach((file: string) => {
        this.images.push({
          img: '../../assets/Galery/' + file,
          thumb: 'Image',
        });
      });
    });
  }
}
