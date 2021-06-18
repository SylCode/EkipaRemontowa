import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { FieldComponent } from '../field/field.component';

@Component({
  selector: 'app-rozbior-field',
  templateUrl: './rozbior-field.component.html',
  styleUrls: ['./rozbior-field.component.scss']
})
export class RozbiorFieldComponent  extends FieldComponent implements OnInit {
  constructor(private dataServ: DataService, private cdref: ChangeDetectorRef) {
    super(dataServ, cdref);
  }

  ngOnInit(): void {
  }

}
