import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class IoService {
  constructor(private httpClient: HttpClient) {}

  public getGalleryList(): Observable<Array<string>> {
    return this.httpClient
      .get<Array<string>>('/api/media')
      .pipe(
        catchError((_: any) => of('Failed to query Api mEdia'))
      ) as Observable<Array<string>>;
  }

  public getAboutInfo(): Observable<string> {
    return this.httpClient
      .get<string>('/api/media/about')
      .pipe(catchError((_: any) => of('Failed to get About info')));
  }

  public getReservationDate(): Observable<string> {
    return this.httpClient
      .get<string>('api/media/reservation')
      .pipe(catchError((_: any) => of('Failed to get reservation info')));
  }

  public getRealisations(): Observable<Array<string>> {
    return this.httpClient
      .get<Array<string>>('api/media/realisations')
      .pipe(
        catchError((_: any) => of('Failed to get realisations info'))
      ) as Observable<Array<string>>;
  }

  public getServices(): Observable<Array<string>> {
    return this.httpClient
      .get<Array<string>>('api/media/services')
      .pipe(
        catchError((_: any) => of('Failed to get services info'))
      ) as Observable<Array<string>>;
  }

  public getActiveModules(): Observable<Array<string>> | undefined {
    return this.httpClient
      .get<Array<string>>('/api/media/activemodules')
      .pipe(
        catchError((_: any) => of('Failed to get ActiveModulesList'))
      ) as Observable<Array<string>>;
  }
}
