import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainpageComponent } from './mainpage/mainpage/mainpage.component';
import { PricingComponent } from './mainpage/pricing/pricing.component';
import { DataResolver } from './services/resolvers/data.resolver';

const routes: Routes = [
  { path: '', component: MainpageComponent },
  {
    path: 'pricing',
    component: PricingComponent,
    resolve: { priceList: DataResolver },
  },
  { path: 'contact', component: ContactComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: '**', component: MainpageComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
