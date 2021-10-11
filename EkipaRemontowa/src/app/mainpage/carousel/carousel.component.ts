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
          img: 'assets/Galery/' + file,
          thumb: 'Image',
        });
      });

      this.imagesLoaded = Promise.resolve(true);
      // var carousel = document.getElementById('carousel');
      // console.log(carousel);
      // if (carousel) {
      //   console.log(carousel);

      //   this.flick = new flickity(carousel, {
      //     imagesLoaded: true,
      //     wrapAround: true,
      //   });

      //   var imgs = carousel.querySelectorAll('img');
      //   console.log(imgs);
      //   var docStyle = document.documentElement.style;
      //   var transformProp =
      //     typeof docStyle.transform == 'string'
      //       ? 'transform'
      //       : 'WebkitTransform';

      //   this.flick.on('scroll', function () {
      //     this.flick.slides.forEach(function (slide, i) {
      //       var img = imgs[i];
      //       var x = ((slide.target + this.flick.x) * -1) / 3;
      //       img.style[transformProp] = 'translateX(' + x + 'px)';
      //     });
      //   });
      // }
    });
  }

  ngOnInit(): void {}
}
