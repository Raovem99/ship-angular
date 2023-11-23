import { ShipmentRateRequest } from './shipment-rate-request';
import { PickupDetail } from './pickup-detail';

export class ShipmentRequest {
    rateRequest!: ShipmentRateRequest;
    carrierId!: string;
    serviceId!: string;
    quoteId!: string;
    pickupDetail!: PickupDetail;
    ref1!: string;
    ref2!: string;
}
