// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import { User } from 'path/to/interfaces';
type AriaExpandedTypes = 'true' | 'false';
type DataBsToggleType = 'collapse';

export type InputTypes =
    | 'text'
    | 'email'
    | 'tel'
    | 'password'
    | 'number'
    | 'checkbox';
export type ButtonTypes = 'submit' | 'button' | 'reset';
export type Methods = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
export type TargetTypes = '_blank' | '_self' | '_parent' | '_top';
export interface IFormField {
    type: InputTypes;
    name: string;
    className: string;
    className2: string;
    id: string;
    label: string;
    required?: boolean;
    readonly?: boolean;
}

interface ILogo {
    src: string;
    alt: string;
}

export interface IBreadcrumbItem {
    id: number;
    text: string;
    active: boolean;
    ariaCurrent:
        | boolean
        | 'time'
        | 'false'
        | 'true'
        | 'page'
        | 'step'
        | 'location'
        | 'date';
    href: string;
    className: string;
}

export interface ILink {
    text: string;
    linkText: string;
    href: string;
    id: number;
    className: string;
}

export interface INavbarDropdownItem {
    text: string;
    href: string;
    id: number;
    className: string;
    className2: string;
}

export interface INavbarItem {
    id: number;
    text: string;
    href: string;
    isDropdown?: boolean;
    type?: 'button';
    ariaLabelledby?: string;
    ariaLabel?: string;
    dataBsTarget?: string;
    dataBsToggle?: DataBsToggleType;
    ariaExpanded?: AriaExpandedTypes;
    ariaControls?: string;
    className: string;
    className2?: string;
    className3?: string;
    navbarDropdownItems?: INavbarDropdownItem[];
}

interface IMenutogglerButton {
    type: ButtonTypes;
    dataBsToggle: DataBsToggleType;
    dataBsTarget: string;
    ariaControls: string;
    ariaExpanded: AriaExpandedTypes;
    ariaLabel: string;
    icon: string;
}

export interface INavbarMenuItem {
    id: number;
    className: string;
    className2?: string;
    menuToggler?: IMenutogglerButton;
    text: string;
    href: string;
    isLogo?: boolean;
    isNavbar?: boolean;
    navbarItems?: INavbarItem[];
    logo?: ILogo;
    isSearch?: boolean;
    isIcon?: boolean;
}

export interface IListItem {
    id: number;
    text: string;
}

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

export type Icons = 'Login' | 'Profile' | 'Logout' | 'Cart' | 'Signup';

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
