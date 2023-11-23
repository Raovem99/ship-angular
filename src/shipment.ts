import { Address } from './model/address';

export class Shipment {
    originAddress!: Address;
   destAddress!: Address;
    length!: number;
    width!: number;
    height!: number;
    weight!: number;
}
