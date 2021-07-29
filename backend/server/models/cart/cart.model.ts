import {
    Categories,
    Countries,
    ICart,
    ICartItem,
    ICoupon,
    ICustomer,
    IMarketingCampaign,
    IProduct,
    Sizes,
} from '../../types';

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
    public item: any;
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
    constructor(data: any) {
        this.item = data.item || data;
        this._id = data._id;
        this.category = data.category;
        this.unit_price = Number(data.unit_price);
        this.totalTaxAmount = Number(data.tax);
        this.totalQuantity = Number(data.quantity);
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
        let oldCart = prevCart || {};
        this.items = oldCart.items || {};
        this.totalPrice = oldCart.totalPrice || 0;
        this.totalQuantity = oldCart.totalQuantity || 0;
        this.deliveryCost = oldCart.deliveryCost || null;
        this.coupon = oldCart.coupon || null;
        this.totalTaxAmount = oldCart.totalTaxAmount || 0;
        this.totalPriceExcludingTax = oldCart.totalPriceExcludingTax || 0;
        this.finalPrice = oldCart.finalPrice || 0;
        this.customer = oldCart.customer || null;
        this.category = oldCart.category || null;
    }
    addItem(data: any) {
        let existingItem = this.items[data._id];
        if (!existingItem) {
            existingItem = this.items[data._id] = new Item(data);
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
    addDeliveryCost(data: any) {
        let existingItem = this.deliveryCost[data._id];
        if (!existingItem) {
            this.deliveryCost = null;
            existingItem = this.deliveryCost[data._id] = new Item(data);
        }
        this.finalPrice = this.getFinalPrice(existingItem.unit_price);
        return this;
    }
    removeItem(id: string) {
        delete this.items[id];
        this.totalQuantity = this.getTotalQuantity();
        this.totalPrice = this.getTotalPrice();
        this.totalTaxAmount = this.getTotalTaxAmount();
        this.totalPriceExcludingTax = this.totalPrice - this.totalTaxAmount;
        return this;
    }
    itemsToArray() {
        let array = [];
        for (let item in this.items) {
            array.push(this.items[item]);
        }
        return array;
    }
    getTotalPrice() {
        let items = this.itemsToArray();
        let itemsTotalPrices = items.map(
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
    getFinalPrice(deliveryCost_price: number) {
        let totalPrice = this.getTotalPrice();
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
    getTotalQuantity() {
        let items = this.itemsToArray();
        let quantities = items.map((item: ICartItem) => item.totalQuantity);
        if (quantities.length) {
            const reducer = (accumulator: number, currentValue: number) =>
                accumulator + currentValue;
            return quantities.reduce(reducer);
        } else {
            return 0;
        }
    }
    getTotalTaxAmount() {
        let items = this.itemsToArray();
        let totalTaxAmounts = items.map(
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
    getBonusSystemTotalPrice(marketingCampaign: IMarketingCampaign) {
        let multiplier = marketingCampaign && marketingCampaign.active ? 2 : 1;
        let items = this.itemsToArray();
        let bonusSystemItemsTotalPrices = items
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
    addCustomer(data: any) {
        let customer = new Customer(data);
        this.customer = customer;
        return this;
    }
}
