import { InvoiceContact } from './invoice-contact';
import { DutiesAndTaxes } from './duties-and-taxes';
import { InvoiceItems } from './invoice-items';

export class CustomsInvoice {
    invoiceContact!: InvoiceContact;
    dutiesAndTaxes!: DutiesAndTaxes;
    currency!: string;
    invoiceItems!: InvoiceItems[];
    reasonForExport!: string;
}
