import { Component, OnInit } from '@angular/core';
import { ShipTimeService } from '../services/ship-time.service';
import { ShipmentResponse } from '../model/shipment-response';

@Component({
  selector: 'app-shipment-details',
  templateUrl: './shipment-details.component.html',
  styleUrl: './shipment-details.component.css'
})
export class ShipmentDetailsComponent  implements OnInit {
  
  shipmentResponse: any;

  constructor(private shipTimeService: ShipTimeService) {
  } 
  ngOnInit() {
    this.shipmentResponse = this.shipTimeService.getShipmentDetailResponse(); 
  }
}
