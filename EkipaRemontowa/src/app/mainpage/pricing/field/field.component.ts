import { Field } from './../field';
import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.scss'],
})
export class FieldComponent implements OnInit {
  public name: string = 'Łazienka';
  public fields: Array<Field> = [
    { name: 'Powierszchnia podłogi', pricePerUnit: 10, unit: 'm2' },
    { name: 'Powierszchnia do płytek', pricePerUnit: 10, unit: 'm2' },
    { name: 'Gniazdka', pricePerUnit: 10, unit: 'szt' },
    { name: 'Bateria', pricePerUnit: 10, unit: 'szt' },
    { name: 'Wanna', pricePerUnit: 10, unit: 'szt' },
    { name: 'Przysznic', pricePerUnit: 10, unit: 'szt' },
  ];
  public price = 3000;

  constructor(private dataService: DataService) {
    //this.fields = dataService.
  }

  public calculatePrice(): void {}

  ngOnInit(): void {}
}
