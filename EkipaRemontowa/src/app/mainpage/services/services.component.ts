import { SitedataService } from './../../services/sitedata.service';
import { IoService } from 'src/app/services/io.service';
import { Component, Input, OnInit } from '@angular/core';
// @ts-ignore
import { SiteData } from 'SiteData';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
})
export class ServicesComponent implements OnInit {
  public items: string[] = [];
  constructor(private siteDataService: SitedataService) {}

  ngOnInit(): void {
    this.siteDataService.SiteData.subscribe((res: SiteData) => {
      this.items = res.uslugi;
    });
  }
}
