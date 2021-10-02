import {
    IAccount,
    IAddress,
    IAdmin,
    IBonussystem,
    ICoupon,
    IDeliveryCost,
    IName,
    IOrder,
    IOrderItem,
    IPayeesInformation,
    IPdfDocumentation,
    IPhoto,
    IPostOffice,
    IProduct,
    IReview,
    ISize,
    IStore,
    IPublicUser,
    IPagination,
} from '../../@types';
import { ICurrentUser, IFlashMessage } from '../types';

export function resetCurrentUser(): ICurrentUser {
    return {
        user: resetUser(),
        isAuthenticated: false,
        isAdmin: false,
    };
}

export function resetUser(): IPublicUser {
    return {
        username: '',
        email: '',
        createdAd: new Date(),
        updatedAt: new Date(),
        _id: '',
        bonus_system: resetBonusSystem(),
        admin: resetAdmin(),
        bank_account_number: '',
        reviews: [resetReview()],
        buyer_reviews: [resetReview()],
        marketplace_terms_verified: false,
        marketplace_products: [resetProduct()],
        completeAddress: resetAddress(),
        can_recieve_emails: false,
        name: resetName(),
        mobileNumber: '',
        fullname: '',
        user: resetAccount(),
        sendGridId: '',
        avatar: '',
        history: [resetOrder()],
    };
}

export function resetAccount(): IAccount {
    return {
        isVerified: false,
        verification_pincode: '',
        expires: new Date(),
    };
}

export function resetName(): IName {
    return {
        firstname: '',
        lastname: '',
    };
}

export function resetReview(): IReview {
    return {
        _id: '',
        createdAt: new Date(),
        updatedAt: new Date(),
        author: null,
        reciever: null,
        rating: 1,
        review: '',
    };
}

export function resetAdmin(): IAdmin {
    return {
        isAdmin: false,
        premission_level: 'basic',
    };
}

export function resetBonusSystem(): IBonussystem {
    return {
        coupons: [resetCoupon()],
        total_price: 0,
        stamps: 0,
        upcoming_stamps: 0,
    };
}

export function resetCoupon(): ICoupon {
    return {
        createdAt: new Date(),
        value: 20,
        valid: false,
    };
}

export function resetProduct(): IProduct {
    return {
        title: '',
        name: '',
        fullname: '',
        keywords: [''],
        owner: null,
        _id: '',
        createdAt: new Date(),
        updatedAt: new Date(),
        status: 'available',
        unit_price: 0,
        front_page: false,
        tax: 0,
        vat: 2400,
        front_page_update: new Date(),
        unit_price_excluding_tax: 0,
        year: 2021,
        releasedate: new Date(),
        deliverycost_type: 'lp',
        uri: '',
        productType: 'lp',
        times_sold: 0,
        sizes: [resetSize()],
        ean: '',
        image_uri: '',
        cover: '',
        marketplace_buyer: '',
        marketplace_buyer_reviewed: false,
        marketplace_buyer_user: null,
        cover_marketplace: resetPhoto(),
        order: resetOrder(),
        format: '',
        category: 'Uudet',
        cover_id: '',
        photos: [resetPhoto()],
        additional_info: '',
        product_info: '',
        edition: '',
        label: '',
        description: '',
        prebookers: null,
        unit_type: '',
        genre: 'Blues',
        conditionCovers: 'Uusi Levy',
        conditionDisk: 'Uusi Levy',
        tracklist: [''],
        stores: [resetStore()],
        discountedPrice: 0,
        rating: 0,
        total_quantity: 0,
        reviews: [resetReview()],
    };
}

export function resetStore(): IStore {
    return {
        quantity: 0,
        location: 'Helsinki Sörnäinen',
    };
}

export function resetPhoto(): IPhoto {
    return {
        public_id: '',
        secure_url: '',
    };
}

export function resetSize(): ISize {
    return {
        size: 'XL',
        quantity: 0,
    };
}

export function resetOrder(): IOrder {
    return {
        _id: '',
        createdAt: new Date(),
        updatedAt: new Date(),
        items: [resetOrderItem()],
        klarna_id: '',
        paid_part: 0,
        paypal_orderID: '',
        payment_time: new Date(),
        paypal_payerID: '',
        paypal_paymentID: '',
        checkoutApi_reference: '',
        checkoutApi_id: '',
        messages: [''],
        coupon: resetCoupon(),
        prebook_info: '',
        order_number: '',
        client: null,
        payees_information: resetPayeesInformation(),
        delivery_store: 'Helsinki, Sörnäinen',
        delivered: false,
        paid: false,
        delivery_method: resetDeliveryCost(),
        postOffice: resetPostOffice(),
        itemsToBeReviewed: null,
        parcelNo: '',
        unifaunOrderNo: '',
        pickup_store: '',
        stamps: 0,
        fetchId: '',
        pdfDocumentation: resetPdfDocumentation(),
        payment_method: 'maksu myymälään',
        status: 'pending',
    };
}

export function resetPdfDocumentation(): IPdfDocumentation {
    return {
        url: '',
        id: '',
    };
}

export function resetPostOffice(): IPostOffice {
    return {
        id: '',
        name: '',
        zipcode: '',
        address: '',
        city: '',
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

export function resetPayeesInformation(): IPayeesInformation {
    return {
        phone: '',
        address: resetAddress(),
        email: '',
        firstname: '',
        lastname: '',
    };
}

export function resetAddress(): IAddress {
    return {
        zipcode: '',
        address: '',
        city: '',
        country: 'Finland',
    };
}

export function resetOrderItem(): IOrderItem {
    return {
        paid: false,
        delivered: false,
        ready: false,
        pickable: false,
        item: null,
        fullname: '',
        quantity: 0,
        unit_price_excluding_tax: 0,
        unit_price: 0,
        tax_amount: 0,
        tax_rate: 2400,
    };
}

export function resetFlashMessage(): IFlashMessage {
    return {
        text: '',
        variant: 'success',
        icon: 'checkCircle',
        visible: false,
    };
}

export function resetPaginationFunction(): IPagination {
    return {
        visiblePages: [1],
        currentPage: 1,
        perPage: 1,
        totalCount: 1,
        totalPages: 1,
        first: 1,
        last: 1,
    };
}
