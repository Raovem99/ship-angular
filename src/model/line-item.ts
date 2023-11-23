import { DeclaredValue } from './declared-value';

export class LineItem {
    length!: number;
    width!: number;
    height!: number;
    weight!: number;
    description!: string;
    nmfcCode!: string;
    freightClass!: string;
    declaredValue!: DeclaredValue;
}
