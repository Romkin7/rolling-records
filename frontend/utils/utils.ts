import {
    IMarketingCampaign,
    IName,
    IOrderItem,
    IProduct,
    MarketingCampaignCategories,
} from '../../@types';
import { AdminRole, IListItem, ModButtonMethods } from '../types';

/** ValidateMarketingCampaign */
export function validateMarketingCampaign(
    marketingCampaigns: IMarketingCampaign[],
    category: MarketingCampaignCategories,
): IMarketingCampaign | null {
    const marketingCampaign = marketingCampaigns.find(
        (marketingCampaign: IMarketingCampaign) =>
            marketingCampaign.category === category && marketingCampaign.active,
    );
    return marketingCampaign;
}

export function createListItemArray(array: string[]): IListItem[] {
    const newArray = array.map((item: string, index: number = 1) => {
        return {
            id: index,
            text: item,
        };
    });
    return newArray;
}

//create ordernumber
//order number config function
export const createCartId = (): string => {
    let now = Date.now().toString(); // '1492341545873'
    // pad with extra random digit
    now += now + Math.floor(Math.random() * 10);
    // format
    return [now.slice(0, 4), now.slice(4, 10), now.slice(10, 14)].join('-');
};

export function updateCartItemsQuantity(
    itemsTotalQuantity: number,
    quantity: number,
    method: ModButtonMethods,
): number {
    if (method === 'plus') {
        return quantity === itemsTotalQuantity ? quantity : quantity + 1;
    } else if (method === 'minus') {
        return quantity < 1 ? 1 : quantity - 1;
    } else if (method === 'amount') {
        return quantity > itemsTotalQuantity ? itemsTotalQuantity : quantity;
    } else {
        return quantity;
    }
}

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
export const reducer = (accumulator: number, currentValue: number) =>
    accumulator + currentValue;
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

export const getOrderItemsStatuses = (items: IOrderItem[]) => {
    const statuses = {
        items: items.length,
        pickableItems: (
            items.filter((item) => item.pickable === true).length / items.length
        ).toFixed(2),
        readyItems: (
            items.filter((item) => item.ready === true).length / items.length
        ).toFixed(2),
    };
    return statuses;
};

export function getReleaseDate(product: IProduct): string {
    return product.releasedate
        ? `Julkaisup??iv?? ${new Date(product.releasedate).toLocaleDateString(
              'fi',
          )}`
        : product.category === 'Tilattavat'
        ? `Toimitusaika: 1vk - 6kk, Tuotantovuosi: ${String(product.year)}`
        : `Tuotantovuosi: ${String(product.year)}`;
}

export function getAddToCartButtonText(
    product: IProduct,
    isProductPage?: boolean,
): string {
    return product.category === 'Tulevat' && product.total_quantity > 0
        ? 'Varaa'
        : product.category === 'Tilattavat' && product.total_quantity > 0
        ? 'Tilaa'
        : /Uudet|Tarjoukset|K??ytetyt|Lahjakortti|Oheistarvikkeet/.test(
              product.category,
          ) &&
          product.total_quantity > 0 &&
          !isProductPage
        ? 'Osta'
        : /Uudet|Tarjoukset|K??ytetyt|Lahjakortti|T-Paidat|Oheistarvikkeet/.test(
              product.category,
          ) &&
          product.total_quantity > 0 &&
          isProductPage
        ? 'Osta'
        : product.total_quantity < 1
        ? 'Ei Saatavilla'
        : 'N??yt??';
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
        Number.isInteger(price)
            ? `${price},00 ???`
            : nLength(price) === 2
            ? `${Number(price).toFixed(2)} ???`
            : nLength(price) > 2
            ? `${Number(price).toFixed(2)} ???`
            : `${price}0 ???`
    }`;
    return formattedPrice;
};

/** Validat eure role */
export function validateUserRole(role: AdminRole) {
    if (role === 'basic' || role === 'ultimate') {
        return true;
    } else {
        return false;
    }
}

export function getFullName(name: IName): string {
    return name.firstname + ' ' + name.lastname;
}

// Map automatic generated by IBAN-Patterns Online Tool
export function testIBAN($v): boolean {
    // Finland
    $v = $v.replace(/[ ]/g, '');
    return /^FI\d{16}$/.test($v) && isValidIBAN($v);
}
// Check IBAN validation
function isValidIBAN($v): boolean {
    // This function check if the checksum if correct
    $v = $v.replace(/^(.{4})(.*)$/, '$2$1'); // Move the first 4 chars from left to the right

    $v = $v.replace(/[A-Z]/g, function ($e) {
        return $e.charCodeAt(0) - 'A'.charCodeAt(0) + 10;
    }); // Convert A-Z to 10-25

    let $sum = 0;
    let $ei = 1; //First exponent

    for (var $i = $v.length - 1; $i >= 0; $i--) {
        $sum += $ei * parseInt($v.charAt($i), 10); // Multiply the digit by it's exponent

        $ei = ($ei * 10) % 97; // Compute next base 10 exponent  in modulus 97
    }

    return $sum % 97 == 1;
}
