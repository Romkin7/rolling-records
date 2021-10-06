import { IOrder, IOrderItem } from "../../@types";
import { reducer } from "./utils";

export function totalQuantity(order: IOrder) {
    const quantities = order.items.map((item: IOrderItem) => item.quantity);
    return quantities.reduce(reducer);
};
export function totalTaxes(order: IOrder) {
    const deliveryPricesTax = Number(order.delivery_method.tax);
    const itemsTotalPrices = order.items.map((item: IOrderItem) =>
        !item.item
            ? 0
            : item.quantity * item.tax_amount === 0
            ? item.item.tax
            : item.tax_amount,
    );
    const sum = itemsTotalPrices.reduce(reducer);
    if (order.postOffice.id) {
        return sum + deliveryPricesTax;
    } else {
        return sum;
    }
};
export function totalPriceExcludingTax(order: IOrder) {
    const deliveryPriceWithoutTax = Number(
        order.delivery_method.unit_price_excluding_tax,
    );
    const itemsTotalPrices = order.items.map((item: IOrderItem) =>
        !item.item
            ? 0
            : item.quantity * item.unit_price_excluding_tax === 0
            ? item.item.unit_price_excluding_tax
            : item.unit_price_excluding_tax,
    );
    const sum = itemsTotalPrices.reduce(reducer);
    if (order.postOffice.id) {
        return sum + deliveryPriceWithoutTax;
    } else {
        return sum;
    }
};
export function totalPrice(order: IOrder) {
    const deliveryPrice = order.delivery_method
        ? Number(order.delivery_method.unit_price)
        : 0;
    const itemsTotalPrices = order.items.map(
        (item: IOrderItem) =>
            item.quantity *
            (item.unit_price
                ? item.unit_price
                : item.item
                ? item.item.unit_price
                : 0),
    );
    if (itemsTotalPrices.length) {
        const sum = itemsTotalPrices.reduce(reducer);
        if (order.postOffice.id && order.coupon.coupon_id) {
            return sum + deliveryPrice - 20;
        } else if (
            order.postOffice.id ||
            order.payees_information.address.country !== 'Finland'
        ) {
            return sum + deliveryPrice;
        } else if (order.coupon.coupon_id) {
            return sum + deliveryPrice - 20;
        } else {
            return sum;
        }
    } else {
        return 0;
    }
};
export function unpaidPart(order: IOrder) {
    const deliveryPrice = Number(order.delivery_method.unit_price);
    const itemsTotalPrices = order.items
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
    if (itemsTotalPrices.length) {
        const sum = itemsTotalPrices.reduce(reducer);
        if (order.klarna_id && order.coupon.valid) {
            return sum + deliveryPrice - 20;
        } else if (order.klarna_id) {
            return sum + deliveryPrice;
        } else {
            return sum;
        }
    } else {
        return 0;
    }
};
