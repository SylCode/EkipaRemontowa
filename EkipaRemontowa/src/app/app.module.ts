import { IoService } from 'src/app/io.service';
import { MainpageModule } from './mainpage/mainpage.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InView } from './in-view.directive';
import { HeaderComponent } from './mainpage/header/header.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InView,
    AboutUsComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MainpageModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [IoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
