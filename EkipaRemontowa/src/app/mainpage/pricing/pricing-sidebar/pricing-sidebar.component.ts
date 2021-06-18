import { Component, EventEmitter, OnInit, Output } from '@angular/core';

interface CreateComponentEvent{
  componentId: string;
  title: string;
  priceListName: string;
}
@Component({
  selector: 'app-pricing-sidebar',
  templateUrl: './pricing-sidebar.component.html',
  styleUrls: ['./pricing-sidebar.component.scss'],
})
export class PricingSidebarComponent implements OnInit {
  @Output() createComponent = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  public createLazienkaComponent() {
    var event: CreateComponentEvent = {
      componentId: 'app-bath-field',
      title:'Łazienka',
      priceListName:'Prace_w_łazience'
    };
    this.createComponent.emit(event);
  }


  public createKafleComponent() {
    var event: CreateComponentEvent = {
      componentId: 'app-kafle-field',
      title:'Kafelki',
      priceListName:'Prace_kafelkarskie'
    };
    this.createComponent.emit(event);
  }

  public createElectroComponent(){
    var event: CreateComponentEvent = {
      componentId: 'app-eletricity-field',
      title:'Elektryka',
      priceListName:'Prace_elektryczne'
    };
    this.createComponent.emit(event);
  }

  public createGKComponent(){
    var event: CreateComponentEvent = {
      componentId: 'app-kafle-field',
      title:'Kafelki',
      priceListName:'Prace_kafelkarskie'
    };
    this.createComponent.emit(event);
  }

  public createMalowanieComponent(){
    var event: CreateComponentEvent = {
      componentId: 'app-kafle-field',
      title:'Kafelki',
      priceListName:'Prace_kafelkarskie'
    };
    this.createComponent.emit(event);
  }

  public createMontazComponent(){
    var event: CreateComponentEvent = {
      componentId: 'app-kafle-field',
      title:'Kafelki',
      priceListName:'Prace_kafelkarskie'
    };
    this.createComponent.emit(event);
  }

  public createPodlogiComponent(){
    var event: CreateComponentEvent = {
      componentId: 'app-kafle-field',
      title:'Kafelki',
      priceListName:'Prace_kafelkarskie'
    };
    this.createComponent.emit(event);
  }

  public createRozbiorComponent(){
    var event: CreateComponentEvent = {
      componentId: 'app-kafle-field',
      title:'Kafelki',
      priceListName:'Prace_kafelkarskie'
    };
    this.createComponent.emit(event);
  }
}
