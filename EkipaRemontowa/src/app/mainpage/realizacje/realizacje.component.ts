import { Component, OnInit } from '@angular/core';
import { IoService } from 'src/app/services/io.service';
// @ts-ignore
import { SiteData } from 'SiteData';
import { SitedataService } from 'src/app/services/sitedata.service';

@Component({
  selector: 'app-realizacje',
  templateUrl: './realizacje.component.html',
  styleUrls: ['./realizacje.component.scss'],
})
export class RealizacjeComponent implements OnInit {
  public items: string[] = [];
  constructor(private siteDataService: SitedataService) {}

  ngOnInit(): void {
    this.siteDataService.SiteData.subscribe((res: SiteData) => {
      this.items = res.uslugi;
    });
  }
}
