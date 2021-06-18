import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { FieldComponent } from '../field/field.component';

@Component({
  selector: 'app-eletricity-field',
  templateUrl: '../field/field.component.html',
  styleUrls: ['../field/field.component.scss']
})
export class EletricityFieldComponent extends FieldComponent implements OnInit {
  constructor(private dataServ: DataService, private cdref: ChangeDetectorRef) {
    super(dataServ, cdref);
  }

  ngOnInit(): void {
  }

}
