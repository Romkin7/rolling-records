import { NextFunction, Response, Request } from 'express';
import { sendNotificationOnUnsubscribe } from '../routes/auth/emailTemplates';
import {
    DeliveryCostTypes,
    ICart,
    ICartItem,
    IMarketingCampaign,
    IProductQuery,
    IUser,
    MarketingCampaignCategories,
    ProductTypes,
} from '../../../@types';
import MarketingCampaign, {
    MarketingCampaignDoc,
} from '../models/marketingcampaigns/marketingcampaigns.model';
import got from 'got';

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
    const reducer = (accumulator: number, currentValue: number) =>
        accumulator + currentValue;
    return prices.length > 0 ? prices.reduce(reducer) : 0;
};

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
        marketingCampaign !== null &&
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
    deliveryCostTypes: DeliveryCostTypes,
    productTypes: ProductTypes,
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
    request: Request,
    response: Response,
    canRecieveEmails: boolean,
    user: IUser,
    next: NextFunction,
    cb: (error: unknown, sendGridId: string | boolean) => void,
): Promise<void> {
    try {
        if (canRecieveEmails) {
            const data = {
                list_ids: [process.env.SENDGRID_CONTACT_LIST_ID],
                contacts: [
                    {
                        email: user.email,
                        first_name: user.name.firstname,
                        last_name: user.name.lastname,
                    },
                ],
            };
            const gotResponse = await got.put(
                process.env.SENDGRID_EDIT_CONTACTS_URL,
                {
                    body: JSON.stringify(data),
                    headers: {
                        authorization: `Bearer ${process.env.SENDGRID_API_KEY}`,
                    },
                },
            );
            const parsedObj = JSON.parse(gotResponse.body);
            const sendGridId = parsedObj.job_id;
            return cb(null, sendGridId);
        } else {
            if (user.sendGridId) {
                await got.delete(
                    `${process.env.SENDGRID_DELETE_CONTACTS_URL}${user.sendGridId}`,
                    {
                        body: '',
                        headers: {
                            authorization: `Bearer ${process.env.SENDGRID_API_KEY}`,
                        },
                    },
                );

                sendNotificationOnUnsubscribe(request, response, user);
                return cb(null, false);
            } else {
                sendNotificationOnUnsubscribe(request, response, user);
                return cb(null, false);
            }
        }
    } catch (err) {
        return next(err);
    }
}
