import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// @ts-ignore
import { SiteData } from 'SiteData';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  public data: any;
  public siteData: SiteData;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((data: any) => {
      this.siteData = data.siteData;
      console.log(data.siteData);
      console.log(this.siteData.Titles);
      this.data = this.siteData.Titles.title;
    });
  }
}
