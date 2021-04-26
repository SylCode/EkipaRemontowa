import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { PricingComponent } from './pricing/pricing.component';
import { InformationComponent } from './information/information.component';
import { RealizacjeComponent } from './realizacje/realizacje.component';
import { NgxSmoothScrollModule } from '@eunsatio/ngx-smooth-scroll';
import { ScrollableDirective } from '../scrollable.directive';
import { CarouselComponent } from '../carousel/carousel.component';



@NgModule({
  declarations: [
    SlideshowComponent,
    ContentComponent,
    FooterComponent,
    MainpageComponent,
    PricingComponent,
    InformationComponent,
    RealizacjeComponent,
    ScrollableDirective,
    CarouselComponent
  ],
  imports: [
    CommonModule,
    NgxSmoothScrollModule
  ]
})
export class MainpageModule { }
