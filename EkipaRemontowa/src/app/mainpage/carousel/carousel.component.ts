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
  public imagesLoaded: Promise<boolean> | undefined;
  constructor(private ioService: IoService) {
    this.images = [];
    this.GetImagesSubscription();
  }

  public images: Image[];

  GetImagesSubscription(): void {
    this.ioService.getGalleryList().subscribe((data) => {
      data.forEach((file: string) => {
        this.images.push({
          img: '../../Galery/' + file,
          thumb: 'Image',
        });
      });
      console.log(this.images);
      this.imagesLoaded = Promise.resolve(true);
    });
  }

  ngOnInit(): void {}
}
