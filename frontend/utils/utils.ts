import { IProduct } from '../types';

export function toFixed(value: number, numDecimalPlaces: number): number {
    const addZero =
        String(value).charAt(String(value).length - 1) === '0' ? true : false;
    const re = new RegExp(
        '^-?\\d+(?:.\\d{0,' + (numDecimalPlaces || -1) + '})?',
    );
    const rounded = value.toString().match(re)[0];
    const toString = addZero
        ? String(rounded).split('.').join('') + '0'
        : String(rounded).split('.').join('');
    const toNumber = Number(toString);
    return toNumber;
}
export function getTaxes(
    unit_price: number,
    quantity: number,
    vat: number,
): number {
    const total = unit_price * quantity;
    const tax = total - total * (10000 / (10000 + vat));
    const roundedTax = toFixed(tax, 2);
    return roundedTax;
}

export function setProductsName(product: IProduct): string {
    return product.fullname.length > 1 ? product.fullname : product.title;
}

// set pricetag function for views
export const setPriceTag = (price: number): string => {
    let formattedPrice = '';
    const nLength = function (a: number) {
        let e = 1;
        while (Math.round(a * e) / e !== a) e *= 10;
        return Math.log(e) / Math.LN10;
    };
    formattedPrice = `${
        Number(price)
            ? `${price},00 €`
            : nLength(price) === 2
            ? `${Number(price).toFixed(2)} €`
            : nLength(price) > 2
            ? `${Number(price).toFixed(2)} €`
            : `${price}0 €`
    }`;
    return formattedPrice;
};
