import { Field } from './../field';
import { DataService } from './../data.service';
import {
  Component,
  Inject,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.scss'],
})
export class FieldComponent implements OnInit, OnChanges {
  public fields: Array<Field> = [];
  public price = 5000;

  @Input() name!: string;

  constructor(private dataService: DataService) {
    this.fields = dataService.getFieldsForType(this.name);
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.fields = this.dataService.getFieldsForType(this.name);
    var r = () => {};
    if (r === null) {
    }
  }

  public calculatePrice(): void {}

  ngOnInit(): void {}
}
