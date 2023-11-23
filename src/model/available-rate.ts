import { DeclaredValue } from './declared-value';
import { Surcharge } from './surcharge';

export class AvailableRate {
    baseCharge!: DeclaredValue;
    surcharges!: Surcharge[];
    taxes!: Surcharge[];
    totalCharge!: DeclaredValue;
    DtotalBeforeTaxes!: DeclaredValue;
    exchangeRate!: number;
    carrierId!: string;
    carrierName!: string;
    serviceId!: string;
    serviceName!: string;
    transitDays!: number;
    cutoffTime!: string;
    accessTimeInterval!: string;
    quoteId!: string;
}
