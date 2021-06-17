import { Component, OnInit } from '@angular/core';
import { IoService } from 'src/app/services/io.service';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss'],
})
export class SlideshowComponent implements OnInit {
  constructor(private ioService: IoService) {
    this.images = [
      '../../../assets/bathroom-lighting-scheme.jpg',
      '../../../assets/Neve-Zedek-town-house-1-01.jpg',
      '../../../assets/stone-feature-wall.jpg',
      '../../../assets/x-11a-corunna-ave-16-copy.jpg',
      '../../../assets/y-3-Ensuite-small-copy.jpeg',
    ];
  }

  public images: Array<string>;
  ngOnInit(): void {
    // this.ioService.getGalleryList().subscribe(data =>{
    //   console.log(data);
    //   return data;
    // });
  }
}
