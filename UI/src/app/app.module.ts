import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShipperDetailsComponent } from './components/shipper-details/shipper-details.component';
import { RandomQuoteComponent } from './components/random-quote/random-quote.component';
import { EinsteinQuotesComponent } from './components/einstein-quotes/einstein-quotes.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ShipperDetailsComponent,
    RandomQuoteComponent,
    EinsteinQuotesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
