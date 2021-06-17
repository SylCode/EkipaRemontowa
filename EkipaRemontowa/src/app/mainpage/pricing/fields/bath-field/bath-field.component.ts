import { DataService } from 'src/app/services/data.service';
import { FieldComponent } from './../field/field.component';
import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-bath-field',
  templateUrl: '../field/field.component.html',
  styleUrls: ['../field/field.component.scss'],
})
export class BathFieldComponent extends FieldComponent {
  constructor(private dataServ: DataService, private cdref: ChangeDetectorRef) {
    super(dataServ, cdref);
  }

  ngOnInit(): void {}
}
