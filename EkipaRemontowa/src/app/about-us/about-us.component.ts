import { IoService } from 'src/app/io.service';
import { Component, OnInit } from '@angular/core';
import { ScrollService } from 'src/scroll.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  public text = '';
  public imagePath='../../assets/about-us.jpg';

  constructor(public ioService: IoService,
    private scrollService: ScrollService) { }

  ngOnInit(): void {
    this.getAboutUsData();
    this.scrollService.diableScroll();
  }

  private getAboutUsData(){
    this.ioService.getAboutInfo().subscribe((data: string) => {
      this.text = data;
    })
  }

}
