import { Cart } from '../models/cart/cart.model';
import { Categories, ICart } from '../../../@types';

export function setExportedCart(cart: Cart): ICart {
    return {
        items: cart.itemsToArray(),
        totalQuantity: cart.getTotalQuantity(),
        totalTaxAmount: cart.getTotalTaxAmount(),
        totalPriceExcludingTax: cart.totalPrice - cart.totalTaxAmount,
        totalPrice: cart.getTotalPrice(),
        finalPrice: cart.getFinalPrice(
            cart.deliveryCost ? cart.deliveryCost.unit_price : null,
        ),
        coupon: cart.coupon,
        customer: cart.customer,
        category: cart.category,
        deliveryCost: cart.deliveryCost || null,
        deliveryCosts: cart.deliveryCosts || null,
    };
}

export function containsOrderableProducts(
    productCategories: Categories[],
): boolean {
    return productCategories.indexOf('Tilattavat') > -1;
}
export function containsMarketPlaceProducts(
    productCategories: Categories[],
): boolean {
    return productCategories.indexOf('marketplace') > -1;
}
export function containsComingProducts(
    productCategories: Categories[],
): boolean {
    return productCategories.indexOf('Tulevat') > -1;
}
