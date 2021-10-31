import {
    ICartItem,
    ICoupon,
    IDeliveryCost,
    IPostOffice,
    IStore,
} from '../../../@types';

export function resetCoupon(): ICoupon {
    return {
        valid: false,
        value: null,
        createdAt: new Date(),
    };
}

export function resetDeliveryCost(): IDeliveryCost {
    return {
        _id: '',
        createdAt: new Date(),
        updatedAt: new Date(),
        name: '',
        variant: '',
        tracking: '',
        format: '',
        range: [''],
        formats: [''],
        countries: [''],
        unit_price: 0,
        unit_type: 'shipping_fee',
        unit_price_excluding_tax: 0,
        tax_rate: 2400,
        tax: 0,
        description: '',
        quantity: 0,
        campaign: false,
    };
}

export function resetCartItem(): ICartItem {
    return {
        _id: '',
        category: 'Uudet',
        genre: 'Rock',
        title: '',
        name: '',
        productType: 'lp',
        deliveryCostType: 'lp',
        releaseDate: undefined,
        unit_price: 0,
        totalPrice: 0,
        totalTaxAmount: 0,
        totalQuantity: 0,
        itemsTotalQuantity: 0,
        sizesTotalQuantity: 0,
        fullname: '',
        bonusSystem: false,
        size: null,
    };
}

export function resetPostOffice(): IPostOffice {
    return {
        id: '',
        name: '',
        zipcode: '',
        address: '',
        city: '',
        address1: '',
    };
}

export function resetStore(): IStore {
    return {
        quantity: 0,
        location: 'Helsinki Sörnäinen',
    };
}
