import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Field } from 'src/app/mainpage/pricing/fields/field';
import { DataService } from '../data.service';

@Injectable({
  providedIn: 'root',
})
export class PriceDataResolver implements Resolve<Map<string, Array<Field>>> {
  constructor(private dataService: DataService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Map<string, Array<Field>>> {
    return this.dataService.getPriceList();
  }
}
