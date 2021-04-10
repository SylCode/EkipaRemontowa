import { Component, OnInit } from '@angular/core';
import { IoService } from 'src/app/io.service';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent implements OnInit {

  constructor(private ioService: IoService) { }

  // public imageList: Array<string>;
  ngOnInit(): void {
    this.ioService.getGalleryList().subscribe(data =>{
      console.log(data);
      return data;
    })
  }

}
