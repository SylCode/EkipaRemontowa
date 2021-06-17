import { catchError, delay } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Field } from '../mainpage/pricing/fields/field';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private priceList: Map<string, Array<Field>> = new Map<
    string,
    Array<Field>
  >();

  private Lazienka: Array<Field> = [
    {
      id: 0,
      name: 'Powierszchnia podłogi',
      pricePerUnit: 10,
      unit: 'm2',
      visible: true,
    },
    {
      id: 1,
      name: 'Powierszchnia do płytek',
      pricePerUnit: 10,
      unit: 'm2',
      visible: true,
    },
    {
      id: 2,
      name: 'Gniazdka',
      pricePerUnit: 10,
      unit: 'szt',
      visible: true,
    },
    {
      id: 3,
      name: 'Bateria',
      pricePerUnit: 10,
      unit: 'szt',
      visible: true,
    },
    {
      id: 4,
      name: 'Wanna',
      pricePerUnit: 10,
      unit: 'szt',
      visible: true,
    },
    {
      id: 5,
      name: 'Prysznic',
      pricePerUnit: 10,
      unit: 'szt',
      visible: true,
    },
  ];

  constructor(private httpClient: HttpClient) {}

  public getPriceList(): Observable<Map<string, Array<Field>>> {
    return this.httpClient.get<Map<string, Array<Field>>>('/api/pricer').pipe(
      delay(1000),
      catchError((_: any) => of('Failed to get PriceList'))
    ) as Observable<Map<string, Array<Field>>>;
  }

  public getLazienkaFields(): Array<Field> {
    return this.Lazienka;
  }

  public setPriceList(priceList: Map<string, Array<Field>>): void {
    if (typeof priceList != typeof '') {
      priceList.forEach((value: any) => {
        this.priceList.set(value.key, value.value);
      });
    }
  }

  public getFieldsForType(type: string): Array<Field> | undefined {
    if (this.priceList.has(type.toString())) {
      return this.priceList.get(type.toString());
    } else return [];
  }
}
