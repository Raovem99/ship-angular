import { Component, Input, OnInit } from '@angular/core';
import { ShipTimeService } from '../services/ship-time.service';
import {ActivatedRoute, Router} from '@angular/router';
import { ShipmentRateResponse } from '../model/shipment-rate-response';
import { AvailableRate } from '../model/available-rate';
import { ShipmentRequest } from '../model/shipment-request';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-ship-time-rates',
  templateUrl: './ship-time-rates.component.html',
  styleUrl: './ship-time-rates.component.css'
})
export class ShipTimeRatesComponent implements OnInit{
  //shipmentRateResponse: ShipmentRates[]; 
 
  @Input()
  shipTimeToRate: any;  

  availableRates: AvailableRate[] = []; 
  shipmentRequest: ShipmentRequest  = new ShipmentRequest();
  shipmentRateResponse: any;
  shipmentRateRequest: any;
  dataLoaded = false;

  constructor(private shipTimeService: ShipTimeService, private route: ActivatedRoute, private router: Router, private spinnerService: NgxSpinnerService) {
  } 

  ngOnInit() {
    this.spinnerService.hide()
    console.log('shipmentRateResponse '+JSON.stringify(this.shipTimeToRate));
    this.shipmentRateResponse = this.shipTimeService.getRates();
    this.availableRates = this.shipmentRateResponse.availableRates;
  }

  saveAndGetShipment(shipment: any) {
    this.showSpinner();
    console.log('Selected::>>>>> '+ JSON.stringify(shipment));
    this.shipmentRequest.rateRequest = this.shipTimeService.getRatesRequest();
    this.shipmentRequest.carrierId = shipment!.carrierId; 
    this.shipmentRequest.serviceId = shipment!.serviceId;
    this.shipmentRequest.quoteId = 'fon';
    this.shipmentRateRequest = this.shipTimeService.getRatesRequest();
    console.log('Selected::>>>>>this.shipmentRateRequest '+ JSON.stringify(this.shipmentRateRequest))
    console.log('*************************>>>>>>>>>>')

    console.log('Selected::>>>>>this.shipmentRequest '+ JSON.stringify(this.shipmentRequest))
    this.shipTimeService.saveAndGetShipment(this.shipmentRequest).subscribe((data: any) => {
     // this.shipmentRateResponse = data;
      this.gotoShipmentDetails(data);
      this.dataLoaded = true;
      //console.log(this.shipmentRateResponse);
   });
  }

  gotoShipmentDetails(data: any): void{ 
    console.log('data' + JSON.stringify(data));
    this.shipmentRateResponse = data;
    this.shipTimeService.setShipmentDetailResponse(data);
    this.router.navigate(['/shipment']);

  }

  public showSpinner(): void {
    this.spinnerService.show();

     setTimeout(() => {
       this.spinnerService.hide();
     }, 8000);
  }
}
