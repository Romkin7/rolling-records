import {
    Document,
    HookNextFunction,
    model,
    Schema,
    SchemaDefinitionProperty,
} from 'mongoose';
import { IProductModel } from '../../../../@types';
// Declare model interface
export interface ProductDoc extends IProductModel, Document {
    getDiscountRate(): number;
    reduceQuantity(quantity: number): number;
}

const productSchemaDef: SchemaDefinitionProperty = {
    status: { type: String, default: 'available' },
    title: { type: String },
    fullname: { type: String, required: true },
    name: { type: String },
    unit_price: { type: Number },
    front_page: { type: Boolean, default: false },
    front_page_update: { type: Date },
    unit_price_excluding_tax: { type: Number, default: 0 },
    tax: { type: Number, default: 0 },
    year: { type: Number },
    deliverycost_type: { type: String, default: 'lp' },
    releasedate: { type: Date },
    uri: { type: String },
    productType: { type: String },
    times_sold: {
        type: Number,
        default: 0 /*this is used to track, how popular product is.*/,
    },
    sizes: [{ size: { type: String }, quantity: { type: Number } }],
    variants: [
        {
            size: String,
            quantity: Number,
        },
    ],
    ean: { type: String },
    image_uri: { type: String },
    cover: { type: String },
    marketplace_buyer: { type: String, default: 'ei ostajaa' },
    marketplace_buyer_reviewed: { type: Boolean, default: false },
    cover_marketplace: {
        public_id: { type: String, default: '' },
        secure_url: { type: String, default: '' },
    },
    order: {
        type: Schema.Types.ObjectId,
        ref: 'Order',
    },
    format: { type: String },
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    photos: [{ public_id: String, secure_url: String }],
    cover_id: { type: String },
    category: { type: String },
    additional_info: { type: String },
    product_info: { type: String },
    edition: { type: String },
    unit_type: { type: String },
    genre: { type: String, default: 'Oheistarvikkeet' },
    label: { type: String },
    tracklist: [String],
    stores: [
        {
            quantity: { type: Number, default: 1 },
            location: String,
        },
    ],
    advance_bookers: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User',
        },
    ],
    prebookers: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Order',
        },
    ],
    marketplace_buyer_user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    total_quantity: { type: Number },
    description: { type: String },
    discountedPrice: { type: Number },
    vat: { type: Number },
    createdAt: { type: Date, default: Date.now },
    rating: { type: Number, default: 0 },
    reviews: [{ type: String, default: '' }],
    conditionDisk: { type: String, default: 'Uusi Levy' },
    conditionCovers: { type: String, default: 'Uusi Levy' },
    keywords: [{ type: String }],
};
// Define model schema
const productSchema = new Schema(productSchemaDef);

productSchema.pre('save', function (this: any, next: HookNextFunction) {
    // Add keywords for the product
    // If you change this, change the keyword finding in search system too
    if (this.category && this.fullname && this.category !== 'marketplace') {
        this.keywords = this.fullname
            .replace(/\&/g, 'and')
            .replace(/[\'\.\"]/g, '')
            .replace(
                /[\!\@\#\$\%\^\&\*\(\)\-\_\=\+\[\]\{\}\\\|\/\?\<\>\,\.\`\~\:\;\'\"]/g,
                ' ',
            )
            .replace(/\s\s+/g, ' ')
            .trim()
            .toLowerCase()
            .split(' ');
    }

    //Calculate tax and unit_price_excluding_tax
    const unit_price = parseInt(
        this.category === 'Tarjoukset' ? this.discountedPrice : this.unit_price,
        10,
    );
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
});
//discount rate
productSchema.methods.getDiscountRate = function (this: any) {
    return Number(
        ((this.unit_price - this.discountedPrice) / this.unit_price) * 100,
    ).toFixed(0);
};
//Reduce quantity
productSchema.methods.reduceQuantity = function (this: any, quantity: number) {
    return Math.ceil(this.quantity - quantity);
};
productSchema.index({
    title: 'text',
    name: 'text',
    label: 'text',
    ean: 'text',
    fullname: 'text',
});

productSchema.set('timestamps', true);
//Export ProductSchema as model

export default model<ProductDoc>('Product', productSchema);
