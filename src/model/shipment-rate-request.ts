import { CustomsInvoice } from './customs-invoice';
import { LineItem } from './line-item';
import { Address } from './address';

export class ShipmentRateRequest {
    from!: Address;
    to!: Address;
    packageType!: string;
    lineItems!: LineItem[];
    unitOfMeasurement!: string;
    serviceOptions!: string[];
    shipDate!: string;
    insuranceType!: string;
    customsInvoice!: CustomsInvoice;
}
