import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { empty } from 'rxjs';

@Component({
  selector: 'app-pricing-sidebar',
  templateUrl: './pricing-sidebar.component.html',
  styleUrls: ['./pricing-sidebar.component.scss'],
})
export class PricingSidebarComponent implements OnInit {
  @Output() createComponent = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  public createKafleComponent() {
    this.createComponent.emit([
      'app-kafle-field',
      'Kafelki',
      'Prace_kafelkarskie',
    ]);
  }
}
