import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { FieldComponent } from '../field/field.component';

@Component({
  selector: 'app-malowanie-field',
  templateUrl: './malowanie-field.component.html',
  styleUrls: ['./malowanie-field.component.scss']
})
export class MalowanieFieldComponent  extends FieldComponent implements OnInit {
  constructor(private dataServ: DataService, private cdref: ChangeDetectorRef) {
    super(dataServ, cdref);
  }

  ngOnInit(): void {
  }

}
