import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EinsteinQuotesComponent } from './components/einstein-quotes/einstein-quotes.component';
import { RandomQuoteComponent } from './components/random-quote/random-quote.component';
import { ShipperDetailsComponent } from './components/shipper-details/shipper-details.component';


const routes: Routes = [
  {path: 'einstein-quotes', component: EinsteinQuotesComponent },
  {path: 'random-quote', component: RandomQuoteComponent },
  {path: 'shipper-details', component: ShipperDetailsComponent },
  {path: '', component: RandomQuoteComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
