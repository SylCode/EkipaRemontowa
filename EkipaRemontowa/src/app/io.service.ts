import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import * as fs from 'fs';

@Injectable({
  providedIn: 'root'
})
export class IoService {

  constructor(private httpClient: HttpClient) {
    //const fs = require('fs');
    //var text = fs.readFileSync('../../assets/about.txt','utf8');
  }

  public getGalleryList(): Observable<Object>
  {
    return new Observable<Object>();//this.httpClient.get("../../../assets/Gallery/galeryList.json");
  }
}
