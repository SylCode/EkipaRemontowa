import { ScrollService } from 'src/scroll.service';
import { Component, OnInit } from '@angular/core';
import { IoService } from 'src/app/services/io.service';
import { SitedataService } from 'src/app/services/sitedata.service';
// @ts-ignore
import { SiteData } from 'SiteData';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent implements OnInit {
  public availability: string = '';
  public offer: string = '';
  public left = 350;
  public siteData: SiteData;

  constructor(
    private scrollService: ScrollService,
    private siteDataService: SitedataService
  ) {}

  ngOnInit(): void {
    this.siteDataService.SiteData.subscribe((res: SiteData) => {
      this.availability = res.rezerwacja;
    });
  }

  public scrollTo(destination: string) {
    this.scrollService.scrollTo(destination);
  }
}
