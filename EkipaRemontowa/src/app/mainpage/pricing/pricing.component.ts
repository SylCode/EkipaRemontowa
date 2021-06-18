import { DynamicComponentService } from './../../services/dynamic-component.service';
import { DataService } from 'src/app/services/data.service';
import { FieldComponent } from './fields/field/field.component';
import {
  Component,
  OnInit,
  ViewChildren,
  QueryList,
  ChangeDetectorRef,
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver,
  ComponentRef,
} from '@angular/core';
import { ScrollService } from 'src/scroll.service';
import { Field } from './fields/field';
import { ActivatedRoute, Data } from '@angular/router';
import { BathFieldComponent } from './fields/bath-field/bath-field.component';
import { KafleFieldComponent } from './fields/kafle-field/kafle-field.component';
import { CreateComponentEvent } from './pricing-sidebar/pricing-sidebar.component';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss'],
})
export class PricingComponent implements OnInit {
  @ViewChildren(FieldComponent) children!: QueryList<FieldComponent>;
  @ViewChild('container', { read: ViewContainerRef, static: true })
  container!: ViewContainerRef;

  public sum = 0;

  constructor(
    private scrollService: ScrollService,
    private cdr: ChangeDetectorRef,
    private route: ActivatedRoute,
    private dataService: DataService,
    private componentService: DynamicComponentService
  ) {}

  ngOnInit(): void {
    this.dataService.setPriceList(this.route.snapshot.data.priceList);
  }

  
  ngAfterViewInit(): void {
    this.scrollService.diableScroll();
    this.children.forEach((field) => {
      this.sum += field.price;
    });
    this.cdr.detectChanges();
  }

  public createComponent(event: CreateComponentEvent) {
    this.componentService
      .getComponentBySelector(event.componentId, () =>
        import('./fields/fields.module').then((m) => m.FieldsModule)
      )
      .then((componentRef) => {
        console.log(componentRef);
          var fc = componentRef as ComponentRef<FieldComponent>;
          fc.instance.pricelistName = event.priceListName;
          fc.instance.displayName = event.title;
          fc.instance.init();
          this.container.insert(fc.hostView);
          this.cdr.detectChanges();
      });
  }
}
