import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { MainpageComponent } from './mainpage/mainpage.component';



@NgModule({
  declarations: [
    HeaderComponent,
    SlideshowComponent,
    ContentComponent,
    FooterComponent,
    MainpageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MainpageModule { }
