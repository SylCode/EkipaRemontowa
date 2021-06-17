import { ComponentFactoryResolver, NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BathFieldComponent } from './bath-field/bath-field.component';
import { FieldComponent } from './field/field.component';
import { KafleFieldComponent } from './kafle-field/kafle-field.component';
import { BaseModule } from 'src/app/services/base/base.module';

@NgModule({
  declarations: [BathFieldComponent, KafleFieldComponent, FieldComponent],
  imports: [CommonModule],
})
export class FieldsModule extends BaseModule {
  protected dynamicComponents: Type<any>[] = [
    BathFieldComponent,
    KafleFieldComponent,
    FieldComponent,
  ];

  constructor(componentFactoryResolver: ComponentFactoryResolver) {
    super(componentFactoryResolver);
  }
}
