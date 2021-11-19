import { SitedataService } from './services/sitedata.service';
import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
// @ts-ignore
import { SiteDataRoot } from 'SiteData';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(
    private titleService: Title,
    private siteDataService: SitedataService
  ) {
    this.siteDataService.SiteData.subscribe((res: SiteDataRoot) => {
      this.titleService.setTitle(res.Titles.title);
    });
  }
}
