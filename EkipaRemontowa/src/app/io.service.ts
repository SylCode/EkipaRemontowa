import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IoService {

  constructor(private httpClient: HttpClient) { 
  }

  public getGalleryList(): Observable<Object>
  {
    return new Observable<Object>();//this.httpClient.get("../../../assets/Gallery/galeryList.json");
  }
}
