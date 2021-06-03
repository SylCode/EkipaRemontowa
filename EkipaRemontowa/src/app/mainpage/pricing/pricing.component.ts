import { DataService } from './data.service';
import { FieldComponent } from './field/field.component';
import {
  Component,
  OnInit,
  ViewChildren,
  QueryList,
  ChangeDetectorRef,
} from '@angular/core';
import { ScrollService } from 'src/scroll.service';
import { ChildrenOutletContexts } from '@angular/router';
import { Field } from './field';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss'],
})
export class PricingComponent implements OnInit {
  @ViewChildren(FieldComponent) children!: QueryList<FieldComponent>;

  public items: Array<string> = [
    'Łazienka',
    'Podłogi',
    'Elektryka',
    'Ściany',
    'Kuchnia',
  ];
  public sum = 0;

  constructor(
    private scrollService: ScrollService,
    private dataService: DataService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.scrollService.diableScroll();
    this.children.forEach((field) => {
      this.sum += field.price;
    });
    this.cdr.detectChanges();
  }
}
