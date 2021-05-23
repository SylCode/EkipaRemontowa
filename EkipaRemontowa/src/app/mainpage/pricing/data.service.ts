import { Injectable } from '@angular/core';
import { Field } from './field';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}

  public getElectricityList(): Array<Field> {
    return new Array<Field>();
  }
}
