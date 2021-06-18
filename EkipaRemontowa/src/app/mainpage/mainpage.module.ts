import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { ContentComponent } from './content/content.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { PricingComponent } from './pricing/pricing.component';
import { InformationComponent } from './information/information.component';
import { RealizacjeComponent } from './realizacje/realizacje.component';
import { NgxSmoothScrollModule } from '@eunsatio/ngx-smooth-scroll';
import { ScrollableDirective } from '../scrollable.directive';
import { CarouselComponent } from '../carousel/carousel.component';
import { SharedModule } from '../shared/shared.module';
import { QuestComponent } from './pricing/quest/quest.component';
import { PricingSidebarComponent } from './pricing/pricing-sidebar/pricing-sidebar.component';
import { FieldsModule } from './pricing/fields/fields.module';

@NgModule({
  declarations: [
    SlideshowComponent,
    ContentComponent,
    MainpageComponent,
    PricingComponent,
    InformationComponent,
    RealizacjeComponent,
    ScrollableDirective,
    CarouselComponent,
    QuestComponent,
    PricingSidebarComponent
  ],
  imports: [
    CommonModule, 
    NgxSmoothScrollModule, 
    SharedModule, 
    FieldsModule,
    FontAwesomeModule
  ],
})
export class MainpageModule {}
