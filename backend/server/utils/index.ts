import { NextFunction, Request } from 'express';
import { sendNotificationOnUnsubscribe } from '../routes/auth/emailTemplates';
import {
    Countries,
    DeliveryCostTypes,
    ICart,
    ICartItem,
    IMarketingCampaign,
    IProductQuery,
    MarketingCampaignCategories,
    ProductTypes,
} from '../../../@types';
import MarketingCampaign, {
    MarketingCampaignDoc,
} from '../models/marketingcampaigns/marketingcampaigns.model';
import { errorMessages } from '../data/errorMessages';
import { log } from './log';
import { createContact, deleteContact } from './sendingBlueSMTP';
import { UserDoc } from '../models/users/users.model';

export function isNotFinland(country: Countries): boolean {
    return country !== 'Finland';
}

export const reducer = (accumulator: number, currentValue: number) =>
    accumulator + currentValue;

const getTotalPriceForDeliveryCostCampaign = (cartItems: ICartItem[]) => {
    const prices = cartItems
        .filter((item: ICartItem) => {
            if (item.category !== 'marketplace') {
                return item;
            }
        })
        .map((item: ICartItem) => {
            return item.totalPrice;
        });
    return prices.length > 0 ? prices.reduce(reducer) : 0;
};

export function setHost(request: Request): string {
    const host =
        request.headers.host === 'www.rollingrecords.fi'
            ? request.headers.host
            : 'www.' + request.headers.host;
    return host;
}

export function setProtocol(request: Request): string {
    const protocol =
        request.protocol === 'http' && process.env.NODE_ENV === 'production'
            ? 'https'
            : request.protocol;
    return protocol;
}

export const getMarketingCampaign = async (
    name: MarketingCampaignCategories,
): Promise<MarketingCampaignDoc> => {
    const marketingCampaign = await MarketingCampaign.findOne({
        category: name,
        active: true,
    });
    return marketingCampaign;
};
// Validate marketing campaign price
export const validateCampaignPrice = (
    marketingCampaign: IMarketingCampaign,
    itemsArr: ICartItem[],
): boolean => {
    if (
        marketingCampaign !== undefined &&
        marketingCampaign.active &&
        getTotalPriceForDeliveryCostCampaign(itemsArr) >=
            marketingCampaign.priceLimit
    ) {
        return true;
    } else {
        return false;
    }
};

export const setVisiblePages = (current: number, total: number): number[] => {
    const visible_pages = [];
    // If we have less that 6 pages, then return just all pages
    if (total < 6) {
        for (let i = 1; i <= total; i++) {
            visible_pages.push(i);
        }
        return visible_pages;
    }
    // If we are on page 1, return the first 6 pages
    if (current === 1) return [1, 2, 3, 4, 5, 6];
    // If we are on the last 5 pages
    if (current + 5 > total) {
        let a = total;
        for (let i = 0; i < 6; i++) visible_pages.push(a--);
        return visible_pages.reverse();
    }
    // In this case we need to show the current, the one before it and 4 after it
    let a = current;
    visible_pages.push(a - 1);
    visible_pages.push(a);
    for (let i = 0; i < 4; i++) visible_pages.push(++a);
    console.log(visible_pages)
    return visible_pages;
};

// If you change this, change the pre save funtion in product schema too
export const setKeyWords = (query: IProductQuery): string[] => {
    return query.search
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
};

export const escapeRegex = (text: string): string => {
    return text.replace(/[-[\]{}()*+?,\\^$|#\s]/g, '\\$&');
};

/** SetTitle */
export const setTitle = (
    category: string,
    productType: string,
    genre: string | null,
    queryString: string,
    sub_genre: string | null,
    status: string | null,
): string => {
    let title = '';
    if (status === 'archived') {
        title = 'Arkisto';
    } else if (productType === 'cd' || productType === 'lp') {
        title = `${category} ${productType.toUpperCase()}:t`;
    } else if (productType === '7-Tuumaiset') {
        title = '7 " levyt';
    } else if (productType === '12-Tuumaiset') {
        title = '12 " levyt';
    } else if (category === 'T-Paidat') {
        title = 'T-Paidat';
    } else if (productType === 'Kirjat') {
        title = `${category ? category : ''} Kirjat`;
    } else if (productType === 'Kasetti') {
        title = `${genre ? genre : ''} ${category ? category : ''} Kasetit`;
    } else if (category === 'marketplace') {
        if (sub_genre) {
            title = `${sub_genre} Kauppapaikan tuotteet`;
        } else {
            title = `Kauppapaikan tuotteet`;
        }
    } else if (category === 'Tarjoukset') {
        title = `Tarjous LP:t`;
    } else if (
        category === 'Oheistarvikkeet' ||
        category === 'Lahjakortti' ||
        category === 'Kirjat'
    ) {
        title = `${category}`;
    } else if (genre) {
        title = `${genre} Lp:t`;
    } else if (queryString) {
        title = `Tuloksia hakusanalle "${queryString}"`;
    } else {
        title = 'Tuote haku';
    }

    if (queryString && genre) {
        title = `Tuloksia hakusanalle "${queryString}"`;
    }
    return title;
};
//Capitalize first letter
export function capitalizeFirstLetter(string: string): string {
    if (string !== '') {
        return string.trim().charAt(0).toUpperCase() + string.slice(1);
    } else {
        return '';
    }
}
//Split array
export const _splitArray = (input: string): string[] | [] => {
    let output: string[] | [];
    if (input && input.length > 0) {
        output = input.split(',');
    } else {
        output = [];
    }
    return output;
};

// figure out deliveryCostType
export const setDeliveryCostType = (
    cart: ICart,
    deliveryCostTypes: DeliveryCostTypes[],
    productTypes: ProductTypes[],
): DeliveryCostTypes => {
    if (
        productTypes.includes('lp') ||
        productTypes.includes('muut') ||
        deliveryCostTypes.includes('lp') ||
        cart.totalQuantity >= 3 ||
        (productTypes.includes('7-Tuumaiset') &&
            productTypes.includes('Kasetti')) ||
        (cart.totalQuantity >= 2 && productTypes.includes('Kasetti'))
    ) {
        return 'lp';
    } else {
        return 'cd';
    }
};

export async function newsLetterRequestToSendGrid(
    canRecieveEmails: boolean,
    user: UserDoc,
    next: NextFunction,
): Promise<void> {
    try {
        if (canRecieveEmails) {
            await createContact({ email: user.email });
        } else {
            if (!canRecieveEmails) {
                deleteContact(user.sendingBlueId);
                sendNotificationOnUnsubscribe(user);
            } else {
                sendNotificationOnUnsubscribe(user);
            }
        }
    } catch (err) {
        log(err);
        return next({ message: errorMessages.addToNewsletterListError });
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
