import { Address } from './address';
import { LineItem } from './line-item';
import { CustomsInvoice } from './customs-invoice';

export class RateRequest {
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
