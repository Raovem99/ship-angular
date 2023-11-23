import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Shipment } from '../shipment';
import { ShipmentRates } from '../shipment-rates';
import { ShipmentRateRequest } from '../model/shipment-rate-request';
import { ShipmentRateResponse } from '../model/shipment-rate-response';
import { ShipmentResponse } from '../model/shipment-response';
import { throwError, catchError } from 'rxjs'; 
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root'
})
export class ShipTimeService {

  shipmentRateResponse: any;
  shipmentRateRequest: any;
  shipmentResponse: any;
  private shipUrl: string;
  private saveShipUrl: string; 

  constructor(private http: HttpClient, private spinnerService: NgxSpinnerService) {
    this.shipUrl = 'http://localhost:8080/shipment/rates';
    this.saveShipUrl = 'http://localhost:8080/shipment/shipments';
  }

  public findAll(shipmentRateRequest: any): Observable<ShipmentRateResponse> {
    this.setRatesRequest(shipmentRateRequest);
    return this.http.post<any>(this.shipUrl, shipmentRateRequest).pipe(
      catchError(this.handleError)
    );
  }

  public saveAndGetShipment(shipmentRequest: any): Observable<ShipmentResponse> {
    return this.http.post<any>(this.saveShipUrl, shipmentRequest).pipe(
      catchError(this.handleError)
    );
  }

  setRatesRequest(shipmentRateRequest: any) {
    this.shipmentRateRequest = shipmentRateRequest;
  }
  getRatesRequest(): any {
    return this.shipmentRateRequest;
  }

  setRates(shipmentRateResponse: any) {
    this.shipmentRateResponse = shipmentRateResponse;
  }
  getRates(): any {
    return this.shipmentRateResponse; 
  }

  setShipmentDetailResponse(shipmentResponse: any) {
    this.shipmentResponse = shipmentResponse;
  }
  getShipmentDetailResponse(): any {
    return this.shipmentResponse; 
  }

  private handleError(error: HttpErrorResponse) {
    this.spinnerService.hide();
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

  

}
