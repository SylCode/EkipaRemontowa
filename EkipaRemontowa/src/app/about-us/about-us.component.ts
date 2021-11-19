import { Component, OnInit } from '@angular/core';
import { ScrollService } from 'src/scroll.service';
import { IoService } from '../services/io.service';
// @ts-ignore
import { SiteData } from 'SiteData';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
})
export class AboutUsComponent implements OnInit {
  public text = '';
  public imagePath = '../../assets/about-us.jpg';
  public siteData: SiteData;

  constructor(
    public ioService: IoService,
    private scrollService: ScrollService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((data: any) => {
      this.siteData = data.siteData;
      this.text = this.siteData.about;
    });
    this.scrollService.diableScroll();
  }
}
