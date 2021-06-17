import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { FieldComponent } from '../field/field.component';

@Component({
  selector: 'app-kafle-field',
  templateUrl: '../field/field.component.html',
  styleUrls: ['../field/field.component.scss'],
})
export class KafleFieldComponent extends FieldComponent {
  constructor(private dataServ: DataService, private cdref: ChangeDetectorRef) {
    super(dataServ, cdref);
  }

  ngOnInit(): void {}
}
