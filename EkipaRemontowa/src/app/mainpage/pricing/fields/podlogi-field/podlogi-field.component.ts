import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { FieldComponent } from '../field/field.component';

@Component({
  selector: 'app-podlogi-field',
  templateUrl: './podlogi-field.component.html',
  styleUrls: ['./podlogi-field.component.scss']
})
export class PodlogiFieldComponent  extends FieldComponent implements OnInit {
  constructor(private dataServ: DataService, private cdref: ChangeDetectorRef) {
    super(dataServ, cdref);
  }

  ngOnInit(): void {
  }

}
