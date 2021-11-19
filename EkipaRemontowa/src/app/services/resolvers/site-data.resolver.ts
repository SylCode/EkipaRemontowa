// @ts-ignore
import { SiteData } from 'SiteData';
import { catchError, map } from 'rxjs/operators';
import { SitedataService } from './../sitedata.service';
import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { EMPTY } from 'rxjs';
// @ts-ignore
import { SiteData } from 'SiteData';

@Injectable({
  providedIn: 'root',
})
export class SiteDataResolver implements Resolve<SiteData> {
  constructor(private dataService: SitedataService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    console.log('SiteData Resolved');
    return this.dataService.SiteData.pipe(
      catchError((error) => {
        console.log(error);
        return EMPTY;
      })
    );
  }
}
