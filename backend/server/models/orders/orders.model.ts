import { Document, model, Schema, SchemaDefinitionProperty } from 'mongoose';
import { IOrderItem, IOrderModel } from '../../types';
// Declare model interface
export interface OrderDoc extends IOrderModel, Document {}

const orderSchemaDef: SchemaDefinitionProperty = {
    klarna_id: { type: String },
    // Paypal order tokens
    paypal_orderID: { type: String },
    paypal_payerID: { type: String },
    paypal_paymentID: { type: String },
    checkoutApi_id: { type: String },
    checkoutApi_reference: { type: String },
    messages: [{ type: String }],
    items: [
        {
            item: {
                type: Schema.Types.ObjectId,
                ref: 'Product',
            },
            paid: { type: Boolean, default: false },
            ready: { type: Boolean, default: false },
            delivered: { type: Boolean, default: false },
            pickable: { type: Boolean, default: false },
            fullname: { type: String, required: true },
            quantity: { type: Number, default: 0 },
            unit_price: { type: Number, default: 0 },
            tax_amount: { type: Number, default: 0 },
            tax_rate: { type: Number, default: 24 },
            unit_price_excluding_tax: { type: Number, default: 0 },
            size: { type: String }, // used with T-Skirts
        },
    ],
    client: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    coupon: {
        coupon_id: { type: String, default: null },
        coupon_value: { type: Number, default: 20 },
    },
    coupon_id: { type: String, default: null },
    prebook_info: { type: String },
    order_number: { type: String },
    payees_information: {
        phone: String,
        email: String,
        firstname: String,
        lastname: String,
        address: {
            street: String,
            zip: String,
            city: String,
            country: { type: String, default: 'Finland' },
        },
    },
    delivery_method: {
        type: Schema.Types.ObjectId,
        ref: 'DeliveryCost',
    },
    postOffice: {
        id: String,
        name: String,
        zipcode: String,
        address: String,
        city: String,
    },
    itemsToBeReviewed: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Product',
        },
    ],
    parcelNo: { type: String },
    fetchId: { type: String },
    pdfDocumentation: {
        url: { type: String },
        id: { type: String },
    },
    unifaunOrderNo: { type: String },
    pickup_store: { type: String },
    delivery_store: { type: String, default: 'Helsinki, Keskusta' },
    stamps: { type: Number },
    paid: { type: Boolean },
    paid_part: { type: Number, default: 0 },
    payment_method: { type: String, required: true }, // klarna, checkout, payapl or maksu myymälään
    payment_time: { type: Date, default: Date.now },
    status: { type: String }, //"pending", "recieved", "done" and "delivered",
    delivered: { type: Boolean, default: false },
};
// Define model schema
const orderSchema = new Schema(orderSchemaDef);

orderSchema.set('timestamps', true);
orderSchema.virtual('total_quantity').get(function () {
    let quantities = this.items.map((item: IOrderItem) => item.quantity);
    const reducer = (accumulator: number, currentValue: number) =>
        accumulator + currentValue;
    return quantities.reduce(reducer);
});
orderSchema.virtual('total_taxes').get(function () {
    let deliveryPricesTax = Number(this.delivery_method.tax);
    let itemsTotalPrices = this.items.map((item: IOrderItem) =>
        !item.item
            ? 0
            : item.quantity * item.tax_amount === 0
            ? item.item.tax
            : item.tax_amount,
    );
    const reducer = (accumulator: number, currentValue: number) =>
        accumulator + currentValue;
    let sum = itemsTotalPrices.reduce(reducer);
    if (this.postOffice.id) {
        return sum + deliveryPricesTax;
    } else {
        return sum;
    }
});
orderSchema.virtual('total_price_excluding_tax').get(function () {
    let deliveryPriceWithoutTax = Number(
        this.delivery_method.unit_price_excluding_tax,
    );
    let itemsTotalPrices = this.items.map((item: IOrderItem) =>
        !item.item
            ? 0
            : item.quantity * item.unit_price_excluding_tax === 0
            ? item.item.unit_price_excluding_tax
            : item.unit_price_excluding_tax,
    );
    const reducer = (accumulator: number, currentValue: number) =>
        accumulator + currentValue;
    let sum = itemsTotalPrices.reduce(reducer);
    if (this.postOffice.id) {
        return sum + deliveryPriceWithoutTax;
    } else {
        return sum;
    }
});
orderSchema.virtual('total_price').get(function () {
    let deliveryPrice = this.delivery_method
        ? Number(this.delivery_method.unit_price)
        : 0;
    let itemsTotalPrices = this.items.map(
        (item: IOrderItem) =>
            item.quantity *
            (item.unit_price
                ? item.unit_price
                : item.item
                ? item.item.unit_price
                : 0),
    );
    const reducer = (accumulator: number, currentValue: number) =>
        accumulator + currentValue;
    if (itemsTotalPrices.length) {
        let sum = itemsTotalPrices.reduce(reducer);
        if (this.postOffice.id && this.coupon.coupon_id) {
            return sum + deliveryPrice - 20;
        } else if (
            this.postOffice.id ||
            this.payees_information.address.country !== 'Finland'
        ) {
            return sum + deliveryPrice;
        } else if (this.coupon.coupon_id) {
            return sum + deliveryPrice - 20;
        } else {
            return sum;
        }
    } else {
        return 0;
    }
});
orderSchema.virtual('unpaid_part').get(function () {
    let deliveryPrice = Number(this.delivery_method.unit_price);
    let itemsTotalPrices = this.items
        .filter((item: IOrderItem) => {
            if (item.paid === false) {
                return item;
            }
        })
        .map(function (item: IOrderItem) {
            return item.quantity * item.unit_price === 0
                ? item.item.unit_price
                : item.unit_price;
        });
    const reducer = (accumulator: number, currentValue: number) =>
        accumulator + currentValue;
    if (itemsTotalPrices.length) {
        let sum = itemsTotalPrices.reduce(reducer);
        if (this.klarna_id && this.coupon.coupon_id) {
            return sum + deliveryPrice - 20;
        } else if (this.klarna_id) {
            return sum + deliveryPrice;
        } else {
            return sum;
        }
    } else {
        return 0;
    }
});
//Export OrderSchema as model

export default model<OrderDoc>('Order', orderSchema);
