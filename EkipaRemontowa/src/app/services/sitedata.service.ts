import { HttpClient } from '@angular/common/http';
import { StringMap } from '@angular/compiler/src/compiler_facade_interface';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SitedataService {
  constructor() {}

  private title =
    'Wrocław - Realizacje dla firm, Wykończenia wnętrz, Malowanie, Remonty';
  private companyName = 'EKIPA REMONTOWA';

  public getCompanyName(): string {
    return this.companyName;
  }

  public getCompanyTitle(): string {
    return `${this.companyName} ${this.title}`;
  }
}
