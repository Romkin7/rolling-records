import {
    Document,
    HookNextFunction,
    model,
    Schema,
    SchemaDefinitionProperty,
} from 'mongoose';
import { IDeliveryCostModel } from '../../../../@types';
// Declare model interface
export interface DeliveryCostDoc extends IDeliveryCostModel, Document {}

const deliveryCostSchemaDef: SchemaDefinitionProperty = {
    name: { type: String },
    variant: { type: String },
    tracking: { type: String },
    formats: { type: [String] },
    format: { type: String, default: 'lp' },
    range: { type: [String] },
    countries: { type: [String] },
    unit_type: {
        type: String,
        default: 'shipping_fee' /* Required by Klarna */,
    },
    unit_price: { type: Number, default: 0 },
    tax_rate: { type: Number, default: 24 },
    unit_price_excluding_tax: { type: Number, default: 0 },
    tax: { type: Number, default: 0 },
    description: { type: String, default: '' },
    quantity: { type: Number, default: 1 },
    campaign: { type: Boolean, default: false },
};
// Define model schema
const deliveryCostSchema = new Schema(deliveryCostSchemaDef);

deliveryCostSchema.set('timestamps', true);
// Set taxes
deliveryCostSchema.pre('save', function (this: any, next: HookNextFunction) {
    //Calculate tax and unit_price_excluding_tax
    if (this.unit_price > 0) {
        //Calculate tax and unit_price_excluding_tax
        const unit_price = parseInt(this.unit_price, 10);
        function toFixed(value: number, numDecimalPlaces: number) {
            const rounded =
                Math.trunc(value * Math.pow(10, numDecimalPlaces)) /
                Math.pow(10, numDecimalPlaces);
            const toString = String(rounded).split('.').join('');
            const toNumber = Number(toString);
            return toNumber;
        }
        function getTaxes(unit_price: number, quantity: number, vat: number) {
            const total = unit_price * quantity;
            const tax = total - total * (10000 / (10000 + vat));
            const roundedTax = toFixed(tax, 2);
            return roundedTax;
        }
        const vat = this.vat === 0.1 ? 1000 : 2400;
        const tax = getTaxes(unit_price, this.quantity, vat);
        const unit_price_excluding_tax = toFixed(unit_price - tax, 2);
        // Set then into product then save product
        this.unit_price_excluding_tax = unit_price_excluding_tax;
        this.tax = tax;
        next();
    }
    next();
});
//Export DeliveryCostSchema as model

export default model<DeliveryCostDoc>('DeliveryCost', deliveryCostSchema);
