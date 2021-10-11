import { SitedataService } from './services/sitedata.service';
import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(
    private titleService: Title,
    private siteDateService: SitedataService
  ) {
    this.titleService.setTitle(this.siteDateService.getCompanyTitle());
  }
}
