import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { FieldComponent } from '../field/field.component';

@Component({
  selector: 'app-gk-field',
  templateUrl: './gk-field.component.html',
  styleUrls: ['./gk-field.component.scss']
})
export class GkFieldComponent  extends FieldComponent implements OnInit {
  constructor(private dataServ: DataService, private cdref: ChangeDetectorRef) {
    super(dataServ, cdref);
  }

  ngOnInit(): void {
  }

}
