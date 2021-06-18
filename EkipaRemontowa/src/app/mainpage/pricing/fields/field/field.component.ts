import { Field } from '.';
import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  Inject,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { IField } from '../IField';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.scss'],
})
export class FieldComponent implements IField {
  public privateFields: Array<Field> = [];
  public publicFields: Array<Field> = [];
  public price = 1000;

  @Input() displayName!: string;
  @Input() pricelistName!: string;

  constructor(
    private dataService: DataService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  public init() {
    this.privateFields = this.dataService.getFieldsForType(this.pricelistName)!;
    this.publicFields = this.privateFields;
  }

  public calculatePrice(): void {}
}
