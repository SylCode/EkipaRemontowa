import { DataService } from './data.service';
import { FieldComponent } from './field/field.component';
import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { ScrollService } from 'src/scroll.service';
import { ChildrenOutletContexts } from '@angular/router';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss'],
})
export class PricingComponent implements OnInit {
  @ViewChildren(FieldComponent) children!: QueryList<FieldComponent>;
  public items: Array<FieldComponent> = [
    new FieldComponent(this.dataService),
    new FieldComponent(this.dataService),
    new FieldComponent(this.dataService),
    new FieldComponent(this.dataService),
    new FieldComponent(this.dataService),
    new FieldComponent(this.dataService),
    new FieldComponent(this.dataService),
  ];

  constructor(
    private scrollService: ScrollService,
    private dataService: DataService
  ) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.scrollService.diableScroll();
  }
}
