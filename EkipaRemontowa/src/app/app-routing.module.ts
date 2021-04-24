import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainpageComponent } from './mainpage/mainpage/mainpage.component';
import { PricingComponent } from './mainpage/pricing/pricing.component';

const routes: Routes = [
  { path: '', component: MainpageComponent },
  { path: 'pricing', component: PricingComponent },
  //{ path: 'contact', component: Ko },
  { path: '**', component: MainpageComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
