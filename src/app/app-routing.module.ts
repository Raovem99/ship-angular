import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShipTimeRatesComponent } from '../ship-time-rates/ship-time-rates.component';
import { ShipmentDetailsComponent } from '../shipment-details/shipment-details.component';
import { ShipTimeComponent } from '../ship-time/ship-time.component';


const routes: Routes = [
  {path: '', component: ShipTimeComponent},
  { path: 'rates', component: ShipTimeRatesComponent},
  { path: 'shipment', component: ShipmentDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
