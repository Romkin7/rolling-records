import { Session } from 'express-session';
export interface ExtendedSession extends Session {
    user: { [key: string]: any };
    cart: { [key: string]: any };
}

/** Product interface */
type Genres =
    | 'Rock'
    | 'Kotimainen'
    | 'Svart-records'
    | 'Punk-hardcore'
    | 'Blues'
    | 'Jazz'
    | 'Funk-soul'
    | 'Heavy-metal'
    | 'Indie-alternative'
    | 'Rock-roll'
    | 'Hip-hop'
    | 'Electronic'
    | 'Folk-country'
    | 'Reggae'
    | 'Soundtrack'
    | 'Oheistarvikkeet'
    | 'Kirjat'
    | 'T-Paidat';

type Categories =
    | 'Uudet'
    | 'Tilattavat'
    | 'Tulevat'
    | 'Tarjous'
    | 'Käytetyt'
    | 'Oheistarvikket'
    | 'T-Paidat'
    | 'Lahjakortit';

type DeliveryCostTypes = 'lp' | 'cd';

type ConditionTypes =
    | 'VG'
    | 'VG+'
    | 'EX-'
    | 'EX'
    | 'EX+'
    | 'NEARMINT'
    | 'Uusi Levy';

type Statuses = 'available' | 'archived';

type Types =
    | 'lp'
    | 'cd'
    | '7-Tuumaiset'
    | 'Kasetti'
    | 'Lahjakortit'
    | 'Kirjat'
    | 'muut'
    | '12-Tuumaiset';

type Sizes = 'S' | 'M' | 'L' | 'XL' | '2XL' | '3XL' | '4XL' | '5XL';

interface ISize {
    size: Sizes;
    quantity: number;
}

interface IPhoto {
    public_id: string;
    secure_url: string;
}

interface IStore {
    quantity: number;
    location: 'Helsinki Sörnäinen';
}

export interface IProduct {
    status: Statuses;
    title: string;
    _id: string;
    fullname: string;
    name: string;
    unit_price: number;
    front_page: boolean;
    front_page_update: Date;
    unit_price_excluding_tax: number;
    tax: number;
    year: number;
    deliverycost_type: DeliveryCostTypes;
    releasedate: Date;
    uri: string;
    type: Types;
    times_sold: number;
    sizes: ISize[];
    variants: ISize[];
    ean: string;
    stamps: number;
    image_uri: string;
    cover: string;
    marketplace_buyer: string;
    marketplace_buyer_reviewed: boolean;
    cover_marketplace: IPhoto;
    order: string;
    format: string;
    owner: string;
    photos: IPhoto[];
    cover_id: string;
    category: Categories;
    additional_info: string;
    product_info: string;
    edition: string;
    unit_type: string;
    genre: Genres;
    label: string;
    tracklist: string[];
    stores: IStore[];
    advance_bookers: string[];
    prebookers: string[];
    marketplace_buyer_user: string;
    total_quantity: number;
    description: string;
    discountedPrice: number;
    vat: number;
    createdAt: Date;
    rating: number;
    reviews: string[];
    conditionDisk: ConditionTypes;
    conditionCovers: ConditionTypes;
    keywords: string[];
}

/** Cart and CartItem */
export interface ICart {
    totalPrice: number;
    totalQuantity: number;
    totalTaxAmount: number;
    totalPriceExcludingTax: number;
    finalPrice: number;
    items: ICartItem[];
    coupon: ICoupon;
    customer: ICustomer;
    deliveryCost: ICartItem;
    category: Categories;
}

export interface ICartItem {
    item: IProduct;
    _id: string;
    category: Categories;
    unit_price: number;
    totalTaxAmount: number;
    totalQuantity: number;
    fullname: string;
    totalPrice: number;
    bonusSystem: boolean;
    size: Sizes;
    sizesTotalQuantity: number;
}

export interface ICustomer {
    firstname: string;
    lastname: string;
    email: string;
    phonenumber: string;
    street: string;
    zipcode: string;
    city: string;
    country: string;
}

/** Review types */
interface IReview {
    name: string;
}

/** User types */
type AdminPermissionLeveles = 'basic' | 'ultimate';
interface IAccount {
    isVerified: boolean;
    verification_pincode: string;
    expires: Date;
}
interface IAddress {
    zipcode: string;
    address: string;
    city: string;
    country: string;
}
interface IAdmin {
    isAdmin: boolean;
    premission_level: AdminPermissionLeveles;
}
interface ICoupon {
    createdAt: Date;
    value: number;
    valid: boolean;
}
interface IBonussystem {
    coupons: ICoupon[];
    total_price: number;
    stamps: number;
    upcoming_stamps: number;
}

interface IName {
    firstname: string;
    lastname: string;
}

export interface IUserModel {
    username: string;
    email: string;
    bonus_system: IBonussystem;
    admin: ImageBitmapRenderingContext;
    bank_account_number: string;
    reviews: string[];
    buyer_reviews: string[];
    marketplace_terms_verified: boolean;
    marketplace_products: string[];
    completeAddress: IAddress;
    mobileNumber: string;
    can_recieve_emails: boolean;
    name: IName;
    fullname: string;
    user: IAccount;
    sendGridId: string;
    password: string;
    resetPasswordToken: string;
    resetPasswordExpires: Date;
    avatar: string;
    history: string[];
}

export interface IUser extends IUserModel {
    createdAd: Date;
    updatedAt: Date;
    _id: string;
}
