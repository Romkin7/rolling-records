import { Cart } from '../models/cart/cart.model';
import { ICart } from '../../../@types';

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
        deliveryCost: cart.deliveryCost,
    };
}
