/** Pagination class types */
export interface IPagination {
    currentPage: number;
    perPage: number;
    totalCount: number;
    totalPages: number;
    first: number;
    last: number;
    visiblePages: number[];
}

/** Product interface */
export interface IProductQuery {
    search?: string;
    category: string | string[];
    genre?: Genres;
    status: Statuses;
    productType: string | string[];
    total_quantity?: number;
    $or?:
        | RegExp
        | [
              { keywords: { $all: string[] } },
              { fullname: RegExp },
              { title: RegExp },
              { name: RegExp },
              { label: RegExp },
              { ean: RegExp },
          ];
}

export interface ISortQuery {
    title?: number;
    unit_price?: number;
    releasedate?: number;
    createdAt: number;
}

export type Methods = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
export type Genres =
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
    | 'HipHop'
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
    | 'Tarjoukset'
    | 'Käytetyt'
    | 'Oheistarvikkeet'
    | 'T-Paidat'
    | 'Lahjakortti'
    | 'marketplace';

export type DeliveryCostTypes = 'lp' | 'cd';

export type Countries =
    | 'Sweden'
    | 'Denmark'
    | 'Germany'
    | 'Estonia'
    | 'Latvia'
    | 'Lithuania'
    | 'Austria'
    | 'Belgia'
    | 'Netherland'
    | 'Poland'
    | 'Czech'
    | 'Slovakia'
    | 'Luxemburg'
    | 'Slovenia'
    | 'Hungary'
    | 'Bulgaria'
    | 'Spain'
    | 'Portugal'
    | 'Ireland'
    | 'UK'
    | 'Italy'
    | 'Greece'
    | 'Croatia'
    | 'Cyprus'
    | 'Malta'
    | 'Monaco'
    | 'France'
    | 'Romania'
    | 'Hertsegovina'
    | 'Gibraltar'
    | 'Iceland'
    | 'Liechtenstein'
    | 'Moldova'
    | 'Montenegro'
    | 'Norway'
    | 'Ukraine'
    | 'Switzerland'
    | 'Belarus'
    | 'Russia'
    | 'World'
    | 'Finland';

type ConditionTypes =
    | 'VG'
    | 'VG+'
    | 'EX-'
    | 'EX'
    | 'EX+'
    | 'NEARMINT'
    | 'Uusi Levy';

type Statuses = 'available' | 'archived';

type ProductTypes =
    | 'lp'
    | 'cd'
    | '7-Tuumaiset'
    | 'Kasetti'
    | 'Lahjakortti'
    | 'Kirjat'
    | 'muut'
    | '12-Tuumaiset';

type Sizes = 'S' | 'M' | 'L' | 'XL' | '2XL' | '3XL' | '4XL' | '5XL';

type ContactMethods = 'mobileNumber' | 'email';

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

export interface IDeliveryCostModel {
    name: string;
    variant: string;
    tracking: string;
    formats: string[];
    format: string;
    range: string[];
    countries: string[];
    unit_type: 'shipping_fee';
    unit_price: number;
    tax_rate: number;
    unit_price_excluding_tax: number;
    tax: number;
    description: string;
    quantity: number;
    campaign: boolean;
}

export interface IDeliveryCostQuery {
    name: string[] | { $in: string[] };
    campaign: boolean | { $in: [true, false] };
    unit_price?: number;
    format?: DeliveryCostTypes;
    range?: { $in: number[] } | [1, 2];
    $or?: any;
}

export interface IDeliveryCost extends IDeliveryCostModel {
    _id: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface IPublicProduct {
    title: string;
    fullname: string;
    name: string;
    unit_price: number;
    year: number;
    deliverycost_type: DeliveryCostTypes;
    releasedate: Date;
    productType: ProductTypes;
    sizes: ISize[];
    cover: string;
    cover_marketplace: IPhoto;
    format: string;
    owner: IPublicUser | null;
    photos: IPhoto[];
    category: Categories;
    additional_info: string;
    product_info: string;
    edition: string;
    unit_type: string;
    genre: Genres;
    label: string;
    tracklist: string[];
    stores: IStore[];
    total_quantity: number;
    description: string;
    discountedPrice: number;
    rating: number;
    reviews: IReview[];
    conditionDisk: ConditionTypes;
    conditionCovers: ConditionTypes;
    wholesalePrice?: number;
    isWholesale?: boolean;
}

export interface IProductModel extends IPublicProduct {
    status: Statuses;
    front_page: boolean;
    front_page_update: Date;
    unit_price_excluding_tax: number;
    tax: number;
    uri: string;
    times_sold: number;
    ean: string;
    marketplace_buyer: string;
    marketplace_buyer_reviewed: boolean;
    order: IOrder;
    owner: IPublicUser | null;
    cover_id: string;
    prebookers: IPublicUser[] | null;
    marketplace_buyer_user: IPublicUser | null;
    vat: number;
    keywords: string[];
}

export interface IProduct extends IProductModel {
    _id: string;
    createdAt: Date;
    updatedAt: Date;
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
    deliveryCosts: IDeliveryCost[];
    postOffice: IPostOffice;
    store: IStore;
    category: Categories;
}

export interface ICartItem {
    _id: string;
    category: Categories;
    genre: Genres;
    discountedPrice?: number;
    title: string;
    name: string;
    productType: ProductTypes;
    deliveryCostType: DeliveryCostTypes;
    releaseDate: Date;
    cover?: string;
    unit_price: number;
    totalTaxAmount: number;
    totalQuantity: number;
    itemsTotalQuantity: number;
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
    mobileNumber: string;
    street: string;
    zipcode: string;
    city: string;
    country: Countries;
}

/** Order model types */
type PaymentMethods = 'klarna' | 'checkout' | 'paypal' | 'maksu myymälään';
type OrderStatuses = 'pending' | 'recieved' | 'done' | 'delivered';

interface IPayeesInformation {
    phone: string;
    email: string;
    firstname: string;
    lastname: string;
    address: IAddress;
}

interface IPostOffice {
    id: string;
    name: string;
    zipcode: string;
    address: string;
    address1?: string;
    city: string;
}

interface IPdfDocumentation {
    url: string;
    id: string;
}

export interface IExportedOrderItem extends IOrderItem {
    _id: string;
}

export interface IOrderItem {
    item: IProduct | IDeliveryCost | null;
    paid: boolean;
    ready: boolean;
    delivered: boolean;
    pickable: boolean;
    fullname: string;
    category: string;
    genre: Genres;
    quantity: number;
    unit_price: number;
    tax_amount: number;
    tax_rate: number;
    unit_price_excluding_tax: number;
    size?: Sizes; // used with T-Skirts
}

export interface IOrderModel {
    items: IOrderItem[];
    klarna_id: string;
    // Paypal order tokens
    paypal_orderID: string;
    paypal_payerID: string;
    paypal_paymentID: string;
    checkoutApi_id: string;
    checkoutApi_reference: string;
    messages: string[];
    client: IPublicUser | null;
    coupon: ICoupon;
    prebook_info: string;
    order_number: string;
    payees_information: IPayeesInformation;
    delivery_method: IDeliveryCost;
    postOffice: IPostOffice;
    itemsToBeReviewed: IProduct[] | null;
    parcelNo: string;
    fetchId: string;
    pdfDocumentation: IPdfDocumentation;
    unifaunOrderNo: string;
    pickup_store: string;
    delivery_store: 'Helsinki, Sörnäinen';
    stamps: number;
    paid: boolean;
    paid_part: number;
    payment_method: PaymentMethods;
    payment_time: Date;
    status: OrderStatuses;
    delivered: boolean;
}

export interface IOrder extends IOrderModel {
    _id: string;
    createdAt: Date;
    updatedAt: Date;
}

/** Review types */
export interface IReviewModel {
    author: IPublicUser | null;
    reciever: IPublicUser | null;
    rating: 1 | 2 | 3 | 4 | 5;
    review: string;
}

export interface IReview extends IReviewModel {
    _id: string;
    createdAt: Date;
    updatedAt: Date;
}

/** User types */
type AdminPermissionLeveles = 'basic' | 'ultimate';
interface IAccount {
    isVerified: boolean;
    verification_pincode: string;
    expires: number;
}
interface IAddress {
    zipcode: string;
    address: string;
    city: string;
    country: Countries;
}
interface IAdmin {
    isAdmin: boolean;
    premission_level: AdminPermissionLeveles;
}
interface ISms {
    sender: 'Rolling';
    recipient: string;
    content: string;
}
interface ICoupon {
    createdAt: Date;
    value: number;
    id: string;
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
    admin: IAdmin;
    bank_account_number: string;
    reviews: IReview[];
    buyer_reviews: IReview[];
    marketplace_terms_verified: boolean;
    marketplace_products: IProduct[];
    completeAddress: IAddress;
    mobileNumber: string;
    can_recieve_emails: boolean;
    name: IName;
    fullname: string;
    user: IAccount;
    sendGridId: string;
    sendingBlueId: number;
    password: string;
    resetPasswordToken: string;
    resetPasswordExpires: Date | number;
    avatar: string;
    history: IOrder[];
    isWholesale: boolean;
    contactBy: ContactMethods;
}

export interface IUser extends IUserModel {
    createdAd: Date;
    updatedAt: Date;
    _id: string;
}

export interface IPublicUser {
    username: string;
    email: string;
    bonus_system: IBonussystem;
    admin: IAdmin;
    bank_account_number: string;
    reviews: IReview[];
    buyer_reviews: IReview[];
    marketplace_terms_verified: boolean;
    marketplace_products: IProduct[];
    completeAddress: IAddress;
    mobileNumber: string;
    can_recieve_emails: boolean;
    name: IName;
    fullname: string;
    user: IAccount;
    sendGridId: string;
    avatar: string;
    history: IOrder[];
    createdAd: Date;
    updatedAt: Date;
    isWholesale: boolean;
    _id: string;
}

/** Contact model */
type ContactStatuses = 'pending' | 'recieved' | 'done';
interface IMessage {
    text: string;
    author: string;
    createdAt: Date;
}
export interface IContactModel {
    owner: string | null;
    fullname: string;
    email: string;
    phone: string;
    subject: string;
    messages: IMessage[];
    status: ContactStatuses;
    handler: string;
}

export interface IContact extends IContactModel {
    _id: string;
    createdAt: Date;
    updatedAt: Date;
}

/** IMarketingCampaign types */
export type MarketingCampaignCategories =
    | 'freeShipment'
    | 'doubleBonusPoints'
    | 'twentyPercentDiscount';
export interface IMarketingCampaignModel {
    category: MarketingCampaignCategories;
    priceLimit: number;
    active: boolean;
    name: string;
}

export interface IMarketingCampaign extends IMarketingCampaignModel {
    _id: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface IQuery {
    genre?: Genres;
    category: Categories;
    page: number;
    productType: ProductTypes;
    createdAt?: number;
    releasedate?: number;
    unit_price?: number;
    title?: string;
    search?: string;
    status: Statuses;
    totalQuantity?: number;
}
