import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShipTimeComponent } from '../ship-time/ship-time.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShipTimeService } from '../services/ship-time.service';
import { ShipTimeRatesComponent } from '../ship-time-rates/ship-time-rates.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ShipmentDetailsComponent } from '../shipment-details/shipment-details.component';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  declarations: [
    AppComponent, ShipTimeComponent, ShipTimeRatesComponent, ShipmentDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxSpinnerModule.forRoot({ type: 'square-jelly-box' }),
  ],
  providers: [
    provideClientHydration(),
    ShipTimeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
