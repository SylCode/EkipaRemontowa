import { CopyClipboardDirective } from './directives/copy-to-clipboard.directive';
import { SitedataService } from './services/sitedata.service';
import { SharedModule } from './shared/shared.module';
import { MainpageModule } from './mainpage/mainpage.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InView } from './in-view.directive';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { IoService } from './services/io.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MapsComponent } from './contact/maps/maps.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AdminComponent } from './admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    InView,
    AboutUsComponent,
    ContactComponent,
    MapsComponent,
    AdminComponent,
    CopyClipboardDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MainpageModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SharedModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    GoogleMapsModule,
  ],
  providers: [
    IoService,
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    { provide: SitedataService },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
