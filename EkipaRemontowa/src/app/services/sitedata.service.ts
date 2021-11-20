import { catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { of, Observable, empty, Observer } from 'rxjs';
// @ts-ignore
import { SiteData } from 'SiteData';

@Injectable({
  providedIn: 'root',
})
export class SitedataService {
  constructor(private HttpClient: HttpClient) {}

  // public init() {
  //   if (this.siteData === undefined)
  //     this.HttpClient.get<SiteDataRoot>('/api/media/sitedata')
  //       .pipe(catchError((_: any) => of('Failed to get SiteData')))
  //       .subscribe((res: any) => {
  //         this.siteData = res;
  //         console.log(this.siteData);
  //       });
  // }

  public siteData: SiteData;

  public get SiteData(): Observable<SiteData> {
    if (this.siteData !== undefined) return of(this.siteData);
    console.log('Requesting site data');
    return this.HttpClient.get<SiteData>(
      '/api/media/sitedata'
    ) as Observable<SiteData>;
  }

  public updateSiteData(data: SiteData): Observable<any> {
    return this.HttpClient.post('api/media/update', data) as Observable<any>;
  }
}
