import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ShipTimeService } from '../services/ship-time.service';
import { Router } from '@angular/router';
import { Shipment } from '../shipment';
import { ShipmentRates } from '../shipment-rates';
import { ShipmentRateRequest } from '../model/shipment-rate-request';
import { Address } from '../model/address';
import { LineItem } from '../model/line-item';
import { DeclaredValue } from '../model/declared-value';
import { CustomsInvoice } from '../model/customs-invoice';
import { InvoiceContact } from '../model/invoice-contact';
import { ShipmentRateResponse } from '../model/shipment-rate-response';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-ship-time',
  templateUrl: './ship-time.component.html',
  styleUrl: './ship-time.component.css'
})
export class ShipTimeComponent implements OnInit {
  shipment: Shipment = new Shipment();
  destAddress: Address = new Address();
  originAddress: Address = new Address();
  dataLoaded = false;

  constructor(private formBuilder: FormBuilder, private shipTimeService: ShipTimeService, private router: Router, private spinnerService: NgxSpinnerService ) {
  }

  shipmentRateRequest: ShipmentRateRequest = new ShipmentRateRequest();
  lineItems: LineItem[] = new Array();
  lineItem: LineItem = new LineItem();
  declaredValue: DeclaredValue = new DeclaredValue();
  invoiceContact: InvoiceContact = new InvoiceContact();
  customsInvoice: CustomsInvoice = new CustomsInvoice();
  //shipmentRateResponse: ShipmentRateResponse = new ShipmentRateResponse();
  shipmentRateResponse: any;
  

  
  shipmentForm = new FormGroup({
    originAddress: new FormGroup({
      addressLine1: new FormControl('123Enclave'),
      city: new FormControl('Aurora'),
      postalCode: new FormControl('L4G0J4'),
      province: new FormControl('ON'),
      country: new FormControl('CA'),
      companyName: new FormControl('Abcd'),
      phoneNumber: new FormControl('778 302 7883'),
      attention: new FormControl('Anna'),
    }),
    destAddress: new FormGroup({
      addressLine1: new FormControl('1589Blvd'),
      city: new FormControl('Vancouver'),
      postalCode: new FormControl('V5P2G8'),
      province: new FormControl('BC'),
      country: new FormControl('CA'),
      companyName: new FormControl('Ritz'),
      phoneNumber: new FormControl('236 889 2626'),
      attention: new FormControl('Van'),
    }),
    length: new FormControl(12.34),
    width: new FormControl(18.26),
    height: new FormControl(19.32),
    weight: new FormControl(20.42)
  });

  ngOnInit() {
  }
  onSubmit(){
    this.showSpinner();
    console.log(this.shipmentForm.value);
    console.log(this.shipmentForm.value.destAddress?.addressLine1);
 
    //console.log(this.shipmentForm.destAddress[0]);
    //to Address
    this.destAddress.companyName = this.shipmentForm.value.destAddress?.companyName || '';
    this.destAddress.streetAddress = this.shipmentForm.value.destAddress?.addressLine1 || '';
    this.destAddress.city = this.shipmentForm.value.destAddress?.city || '';
    this.destAddress.countryCode = this.shipmentForm.value.destAddress?.country || '';
    this.destAddress.state = this.shipmentForm.value.destAddress?.province || '';
    this.destAddress.postalCode = this.shipmentForm.value.destAddress?.postalCode || '';
    this.destAddress.attention = this.shipmentForm.value.destAddress?.attention || '';
    this.destAddress.email = 'Anna@gmail.com';
    this.destAddress.phone = this.shipmentForm.value.destAddress?.phoneNumber || '';
    this.destAddress.instructions = 'Crosscheck';
    this.destAddress.residential = true;
    this.destAddress.notify = true;
    this.shipmentRateRequest.to = this.destAddress || '';

    //from Address
    this.originAddress.companyName = this.shipmentForm.value.originAddress?.companyName || '';
    this.originAddress.streetAddress = this.shipmentForm.value.originAddress?.addressLine1 || '';
    this.originAddress.city = this.shipmentForm.value.originAddress?.city || '';
    this.originAddress.countryCode = this.shipmentForm.value.originAddress?.country || '';
    this.originAddress.state = this.shipmentForm.value.originAddress?.province || '';
    this.originAddress.postalCode = this.shipmentForm.value.originAddress?.postalCode || '';
    this.originAddress.attention = this.shipmentForm.value.originAddress?.attention || '';
    this.originAddress.email = 'Anna@gmail.com';
    this.originAddress.phone = this.shipmentForm.value.originAddress?.phoneNumber || '';
    this.originAddress.instructions = 'Crosscheck';
    this.originAddress.residential = true;
    this.originAddress.notify = true;
    this.shipmentRateRequest.from = this.originAddress || '';

    this.shipmentRateRequest.packageType = 'PACKAGE';

    // //LineItems
    this.lineItem.length = this.shipmentForm.value.length || 0;
    this.lineItem.width = this.shipmentForm.value.width || 0;
    this.lineItem.height = this.shipmentForm.value.height || 0;
    this.lineItem.weight = this.shipmentForm.value.weight || 0;
    this.declaredValue.currency = 'CAD';
    this.declaredValue.amount = 12568;
    this.lineItem.declaredValue = this.declaredValue || '';
    this.lineItems[0] = this.lineItem;
    this.shipmentRateRequest.lineItems = this.lineItems || '';

    this.shipmentRateRequest.unitOfMeasurement = 'IMPERIAL';
    this.shipmentRateRequest.serviceOptions = ['APPOINTMENT'];
    this.shipmentRateRequest.shipDate = new Date().toISOString();
    this.shipmentRateRequest.insuranceType = 'SHIPTIME';

    //customsInvoice
    this.invoiceContact.companyName = this.shipmentForm.value.originAddress?.companyName || '';
    this.invoiceContact.streetAddress = this.shipmentForm.value.originAddress?.addressLine1 || '';
    this.invoiceContact.city = this.shipmentForm.value.originAddress?.city || '';
    this.invoiceContact.countryCode = this.shipmentForm.value.originAddress?.country || '';
    this.invoiceContact.state = this.shipmentForm.value.originAddress?.province || '';
    this.invoiceContact.postalCode = this.shipmentForm.value.originAddress?.postalCode || '';
    this.invoiceContact.attention = this.shipmentForm.value.originAddress?.attention || '';
    this.invoiceContact.email = 'Anna@gmail.com';
    this.invoiceContact.phone = this.shipmentForm.value.originAddress?.phoneNumber || '';
    this.invoiceContact.instructions = 'Crosscheck';
    this.invoiceContact.residential = true;
    this.invoiceContact.notify = true;
    this.customsInvoice.invoiceContact = this.invoiceContact || ''; 

    //this.shipmentRateRequest.customsInvoice = this.customsInvoice || '';

   //this.shipTimeService.findAll(this.shipmentRateRequest).subscribe(result => this.gotoShipmentRates());
   this.shipTimeService.findAll(this.shipmentRateRequest).subscribe((data: any) => {
       this.shipmentRateResponse = data;
       this.gotoShipmentRates(data);
       this.dataLoaded = true;
    });
  }

  gotoShipmentRates(data: any): void{ 
    console.log('data' + JSON.stringify(data));
    this.shipmentRateResponse = data;
    this.shipTimeService.setRates(data);
    this.router.navigate(['/rates']);

  }

  public showSpinner(): void {
    this.spinnerService.show();
    setTimeout(() => {
      this.spinnerService.hide();
    }, 7000);
  }

}
