import { IProduct } from '../types';

export function toFixed(value, numDecimalPlaces) {
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
export function getTaxes(unit_price, quantity, vat) {
    let total = unit_price * quantity;
    let tax = total - total * (10000 / (10000 + vat));
    let roundedTax = toFixed(tax, 2);
    return roundedTax;
}

export function setProductsName(product: IProduct): string {
    return product.fullname.length > 1 ? product.fullname : product.title;
}
