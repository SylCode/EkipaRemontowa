import { AdminComponent } from './admin/admin.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainpageComponent } from './mainpage/mainpage/mainpage.component';
import { PricingComponent } from './mainpage/pricing/pricing.component';
import { PriceDataResolver } from './services/resolvers/price-data.resolver';
import { SlideshowComponent } from './mainpage/slideshow/slideshow.component';
import { ServicesComponent } from './mainpage/services/services.component';
import { SiteDataResolver } from './services/resolvers/site-data.resolver';

const routes: Routes = [
  {
    path: '',
    component: MainpageComponent,
    resolve: { siteData: SiteDataResolver },
  },
  {
    path: 'pricing',
    component: PricingComponent,
    resolve: { priceList: PriceDataResolver },
  },
  {
    path: 'app-services',
    component: ServicesComponent,
    resolve: { siteData: SiteDataResolver },
  },
  {
    path: 'app-slideshow',
    component: SlideshowComponent,
    resolve: { siteData: SiteDataResolver },
  },
  {
    path: 'contact',
    component: ContactComponent,
    resolve: { siteData: SiteDataResolver },
  },
  {
    path: 'about-us',
    component: AboutUsComponent,
    resolve: { siteData: SiteDataResolver },
  },
  {
    path: 'xf85ssn54937',
    component: AdminComponent,
    resolve: { siteData: SiteDataResolver },
  },
  {
    path: '**',
    component: MainpageComponent,
    resolve: { siteData: SiteDataResolver },
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
