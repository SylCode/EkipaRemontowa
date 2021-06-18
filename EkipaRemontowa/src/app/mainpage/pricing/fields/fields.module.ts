import { ComponentFactoryResolver, NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BathFieldComponent } from './bath-field/bath-field.component';
import { FieldComponent } from './field/field.component';
import { KafleFieldComponent } from './kafle-field/kafle-field.component';
import { BaseModule } from 'src/app/services/base/base.module';
import { EletricityFieldComponent } from './eletricity-field/eletricity-field.component';
import { MontazFieldComponent } from './montaz-field/montaz-field.component';
import { MalowanieFieldComponent } from './malowanie-field/malowanie-field.component';
import { GkFieldComponent } from './gk-field/gk-field.component';
import { RozbiorFieldComponent } from './rozbior-field/rozbior-field.component';
import { PodlogiFieldComponent } from './podlogi-field/podlogi-field.component';

@NgModule({
  declarations: [BathFieldComponent, KafleFieldComponent, FieldComponent, EletricityFieldComponent, MontazFieldComponent, MalowanieFieldComponent, GkFieldComponent, RozbiorFieldComponent, PodlogiFieldComponent],
  imports: [CommonModule],
})
export class FieldsModule extends BaseModule {
  protected dynamicComponents: Type<any>[] = [
    BathFieldComponent,
    KafleFieldComponent,
    EletricityFieldComponent,
    MontazFieldComponent,
    FieldComponent,
  ];

  constructor(componentFactoryResolver: ComponentFactoryResolver) {
    super(componentFactoryResolver);
  }
}
