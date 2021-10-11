declare var require: any;
import { Component, OnInit } from '@angular/core';
import { Image } from '@fnxone/ngx-photoswipe';
import { IoService } from 'src/app/services/io.service';
import flickity from 'flickity';
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {
  public slideIndex = 1;
  public imagesLoaded: Promise<boolean> | undefined;
  public flick!: flickity;
  public images: Image[];

  constructor(private ioService: IoService) {
    this.images = [];
    this.GetImagesSubscription();
  }

  GetImagesSubscription(): void {
    this.ioService.getGalleryList().subscribe((data) => {
      data.forEach((file: string) => {
        this.images.push({
          img: '../assets/Galery/' + file,
          thumb: 'Image',
        });
      });

      this.imagesLoaded = Promise.resolve(true);
    });
  }

  ngOnInit(): void {}
}
