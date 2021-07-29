import {
    Document,
    HookNextFunction,
    model,
    Schema,
    SchemaDefinitionProperty,
} from 'mongoose';
import { IDeliveryCostModel } from '../../types';
// Declare model interface
export interface DeliveryCostDoc extends IDeliveryCostModel, Document {}

const deliveryCostSchemaDef: SchemaDefinitionProperty = {
    name: {type: String },
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
        let toFixed = (num, fixed) => {
            var re = new RegExp('^-?\\d+(?:.\\d{0,' + (fixed || -1) + '})?');
            return num.toString().match(re)[0];
        };
        let unit_price = parseInt(
            this.category === 'Tarjoukset'
                ? this.discountedPrice
                : this.unit_price,
        );
        let tax = toFixed(
            this.unit_price - this.unit_price * (10000 / (10000 + 2400)),
            2,
        );
        let unit_price_excluding_tax = toFixed(this.unit_price - tax, 2);
        // Set then into product then save product
        this.unit_price_excluding_tax = unit_price_excluding_tax;
        this.tax = tax;
    }
    next();
});
//Export DeliveryCostSchema as model

export default model<DeliveryCostDoc>('DeliveryCost', deliveryCostSchema);
