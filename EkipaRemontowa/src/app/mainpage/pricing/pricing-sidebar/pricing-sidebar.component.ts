import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faPlusSquare as farPlusSquare } from '@fortawesome/free-regular-svg-icons';

export interface CreateComponentEvent{
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

  faPlusSquare = farPlusSquare;

  constructor(iconLibrary: FaIconLibrary) {
    iconLibrary.addIcons(farPlusSquare)
  }

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
      componentId: 'app-gk-field',
      title:'G/K ściany, sufity',
      priceListName:'Prace_gk'
    };
    this.createComponent.emit(event);
  }

  public createMalowanieComponent(){
    var event: CreateComponentEvent = {
      componentId: 'app-malowanie-field',
      title:'Prace Malarskie',
      priceListName:'Prace_malarskie'
    };
    this.createComponent.emit(event);
  }

  public createMontazComponent(){
    var event: CreateComponentEvent = {
      componentId: 'app-montaz-field',
      title:'Prace montażowe',
      priceListName:'Prace_montażowe'
    };
    this.createComponent.emit(event);
  }

  public createPodlogiComponent(){
    var event: CreateComponentEvent = {
      componentId: 'app-podlogi-field',
      title:'Podłogi, posadzki, wylewki',
      priceListName:'Podłogi_posadzki_wylewki'
    };
    this.createComponent.emit(event);
  }

  public createRozbiorComponent(){
    var event: CreateComponentEvent = {
      componentId: 'app-rozbior-field',
      title:'Prace rozbiórkowe',
      priceListName:'Prace_rozbiórkowe'
    };
    this.createComponent.emit(event);
  }
}
