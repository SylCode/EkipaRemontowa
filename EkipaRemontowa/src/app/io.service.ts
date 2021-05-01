import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IoService {

  constructor(private httpClient: HttpClient) {
  }

  public getGalleryList(): Observable<Array<string>>
  {
    return this.httpClient.get<Array<string>>('/api/media');
  }

  public getAboutInfo(): Observable<string>{
    return this.httpClient.get<string>('/api/media/about');
  }

  public getReservationDate(): Observable<string>{
    return this.httpClient.get<string>('api/media/reservation');
  }

  public getRealisations(): Observable<Array<string>>{
    return this.httpClient.get<Array<string>>('api/media/realisations');
  }
}
