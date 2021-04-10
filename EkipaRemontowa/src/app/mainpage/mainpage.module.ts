import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { PricingComponent } from './pricing/pricing.component';
import { InformationComponent } from './information/information.component';
import { RealizacjeComponent } from './realizacje/realizacje.component';



@NgModule({
  declarations: [
    SlideshowComponent,
    ContentComponent,
    FooterComponent,
    MainpageComponent,
    PricingComponent,
    InformationComponent,
    RealizacjeComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MainpageModule { }
