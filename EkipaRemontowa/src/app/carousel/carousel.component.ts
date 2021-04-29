import { Component, OnInit } from '@angular/core';
import { IoService } from '../io.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  constructor(private ioService: IoService) {

    this.images = [
    '../../assets/Galery/image7.jpg',
    '../../assets/Galery/image11.jpg',
    '../../assets/Galery/image4.jpg',
    '../../assets/Galery/image6.jpg',
    '../../assets/Galery/image5.jpg',
    '../../assets/Galery/image12.jpg',
    '../../assets/Galery/image1.jpg',
    '../../assets/Galery/image3.jpg',
    '../../assets/Galery/image8.jpg',
    '../../assets/Galery/image9.jpg',
    '../../assets/Galery/image10.jpg',
    '../../assets/Galery/image2.jpg',];}

  public images: Array<string>;
  ngOnInit(): void {
    // this.ioService.getGalleryList().subscribe(data =>{
    //   console.log(data);
    //   return data;
    // });
  }

}