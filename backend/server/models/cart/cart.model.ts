import { resetCoupon } from '../../utils/reset';
import {
    Categories,
    Countries,
    Genres,
    ICart,
    ICartItem,
    ICoupon,
    ICustomer,
    IMarketingCampaign,
    ProductTypes,
    Sizes,
} from '../../../../@types';
import { getTaxes } from '../../utils';

/** Create cart class and pass it to the session
 *
 * This class will also have ALL methods to fetch the items from cart,
 * update carts items and remove item from cart.
 *
 * Get cart total price, carts total taxes, carts price without taxes etc.
 *
 * DeliveryCosts are added to the cart as regular cart item and added to carts total price.
 */
class Item implements ICartItem {
    public title: string;
    public name: string;
    public genre: Genres;
    public discountedPrice?: number;
    public cover?: string;
    public productType: ProductTypes;
    public _id: string;
    public category: Categories;
    public unit_price: number;
    public totalTaxAmount: number;
    public totalQuantity: number;
    public fullname: string;
    public totalPrice: number;
    public bonusSystem: boolean;
    public size: Sizes | null;
    public sizesTotalQuantity: number | null;
    constructor(data: any, itemsTotalQuantity: number) {
        console.log(data.vat * 100);
        this.genre = data.genre;
        this.title = data.title;
        this.name = data.name;
        this.cover = data.cover || undefined;
        this.productType = data.productType;
        this.discountedPrice = data.discountedPrice || undefined;
        this._id = data._id;
        this.category = data.category;
        this.unit_price = Number(data.unit_price);
        this.totalTaxAmount =
            getTaxes(data.unit_price, itemsTotalQuantity, data.vat * 100) *
            itemsTotalQuantity;
        this.totalQuantity = itemsTotalQuantity;
        this.fullname = `${
            data.title ? data.title + ' ' + data.name : data.name
        }`;
        this.totalPrice = this.unit_price * this.totalQuantity;
        this.bonusSystem = data.bonus_system === 'false' ? false : true;
        this.size = data.size || null;
        this.sizesTotalQuantity = Number(data.sizesTotalQuantity) || null;
    }
}
class Customer implements ICustomer {
    public firstname: string;
    public lastname: string;
    public email: string;
    public phonenumber: string;
    public street: string;
    public zipcode: string;
    public city: string;
    public country: Countries;
    constructor(data: any) {
        this.firstname = data.firstname;
        this.lastname = data.lastname;
        this.email = data.email;
        this.phonenumber = data.phonenumber;
        this.street = data.street;
        this.zipcode = data.zipcode;
        this.city = data.city;
        this.country = data.country;
    }
}
export class Cart implements ICart {
    public totalPrice: number;
    public totalQuantity: number;
    public totalTaxAmount: number;
    public totalPriceExcludingTax: number;
    public finalPrice: number;
    public items: ICartItem[];
    public deliveryCost: ICartItem | null;
    public coupon: ICoupon;
    public customer: ICustomer;
    public category: Categories;
    constructor(prevCart: any) {
        const oldCart = prevCart || {};
        this.items = oldCart.items || {};
        this.totalPrice = oldCart.totalPrice || 0;
        this.totalQuantity = oldCart.totalQuantity || 0;
        this.deliveryCost = oldCart.deliveryCost || null;
        this.coupon = oldCart.coupon || resetCoupon();
        this.totalTaxAmount = oldCart.totalTaxAmount || 0;
        this.totalPriceExcludingTax = oldCart.totalPriceExcludingTax || 0;
        this.finalPrice = oldCart.finalPrice || 0;
        this.customer = oldCart.customer || null;
        this.category = oldCart.category || null;
    }
    addItem(data: any, itemsTotalQuantity: number): this {
        let existingItem = this.items[data._id];
        if (!existingItem) {
            existingItem = this.items[data._id] = new Item(
                data,
                itemsTotalQuantity,
            );
        } else {
            existingItem.totalQuantity = Number(data.quantity);
            existingItem.totalPrice =
                existingItem.unit_price * existingItem.totalQuantity;
        }
        this.category = data.category;
        this.totalQuantity = this.getTotalQuantity();
        this.totalPrice = this.getTotalPrice();
        this.totalTaxAmount = this.getTotalTaxAmount();
        this.totalPriceExcludingTax = this.totalPrice - this.totalTaxAmount;
        return this;
    }
    addDeliveryCost(data: any): this {
        let existingItem = this.deliveryCost[data._id];
        if (!existingItem) {
            this.deliveryCost = null;
            existingItem = this.deliveryCost[data._id] = new Item(data, 1);
        }
        this.finalPrice = this.getFinalPrice(existingItem.unit_price);
        return this;
    }
    removeItem(id: string): this {
        delete this.items[id];
        this.totalQuantity = this.getTotalQuantity();
        this.totalPrice = this.getTotalPrice();
        this.totalTaxAmount = this.getTotalTaxAmount();
        this.totalPriceExcludingTax = this.totalPrice - this.totalTaxAmount;
        return this;
    }
    itemsToArray(): ICartItem[] {
        const array = [];
        for (const item in this.items) {
            array.push(this.items[item]);
        }
        return array;
    }
    getTotalPrice(): number {
        const items = this.itemsToArray();
        const itemsTotalPrices = items.map(
            (item: ICartItem) => item.totalQuantity * item.unit_price,
        );
        if (itemsTotalPrices.length) {
            const reducer = (accumulator: number, currentValue: number) =>
                accumulator + currentValue;
            return itemsTotalPrices.reduce(reducer);
        } else {
            return 0;
        }
    }
    getFinalPrice(deliveryCost_price: number): number {
        const totalPrice = this.getTotalPrice();
        if (this.coupon.value) {
            return (
                totalPrice -
                Number(this.coupon.value) +
                Number(deliveryCost_price)
            );
        } else {
            return totalPrice + Number(deliveryCost_price);
        }
    }
    getTotalQuantity(): number {
        const items = this.itemsToArray();
        const quantities = items.map((item: ICartItem) => item.totalQuantity);
        if (quantities.length) {
            const reducer = (accumulator: number, currentValue: number) =>
                accumulator + currentValue;
            return quantities.reduce(reducer);
        } else {
            return 0;
        }
    }
    getTotalTaxAmount(): number {
        const items = this.itemsToArray();
        const totalTaxAmounts = items.map(
            (item: ICartItem) => item.totalTaxAmount * item.totalQuantity,
        );
        if (totalTaxAmounts.length) {
            const reducer = (accumulator: number, currentValue: number) =>
                accumulator + currentValue;
            return totalTaxAmounts.reduce(reducer);
        } else {
            return 0;
        }
    }
    getBonusSystemTotalPrice(marketingCampaign: IMarketingCampaign): number {
        const multiplier =
            marketingCampaign && marketingCampaign.active ? 2 : 1;
        const items = this.itemsToArray();
        const bonusSystemItemsTotalPrices = items
            .filter((item: ICartItem) => {
                if (item.bonusSystem === true) {
                    return item;
                }
            })
            .map((item: ICartItem) => {
                return item.totalPrice;
            });
        const reducer = (accumulator: number, currentValue: number) =>
            accumulator + currentValue;
        if (bonusSystemItemsTotalPrices.length) {
            let value = bonusSystemItemsTotalPrices.reduce(reducer);
            value = value * multiplier;
            if (this.coupon.value) {
                return (value = value - this.coupon.value);
            } else {
                return value;
            }
        } else {
            return 0;
        }
    }
    addCustomer(data: any): this {
        const customer = new Customer(data);
        this.customer = customer;
        return this;
    }
}
