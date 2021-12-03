import { Countries, IAddress, IPagination } from '../../@types';
// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
export type ThunkResult<R> = ThunkAction<R, AppState, undefined, AppActions>;
export type ModButtonMethods = 'plus' | 'minus' | 'remove' | 'amount';
type AriaExpandedTypes = 'true' | 'false';
type DataBsToggleType = 'collapse';
export type Variants =
    | 'warning'
    | 'danger'
    | 'success'
    | 'primary'
    | 'purchase';
export type ButtonSizes = 'xs' | 'sm' | 'md' | 'lg' | 'xlg';
export type ButtonColors =
    | 'purchase'
    | 'warning'
    | 'disabled'
    | 'success'
    | 'secondary'
    | 'default';
export type InputTypes =
    | 'text'
    | 'email'
    | 'tel'
    | 'password'
    | 'number'
    | 'checkbox'
    | 'select'
    | 'date'
    | 'hidden'
    | 'radio';
export type ButtonTypes = 'submit' | 'button' | 'reset';
export type TargetTypes = '_blank' | '_self' | '_parent' | '_top';
export interface IFormField {
    type: InputTypes;
    name: string;
    id: string;
    label: string;
    errorText?: string;
    required?: boolean;
    disabled?: boolean;
    readonly?: boolean;
    options?: string[];
}

export interface ISignUpFormFields {
    partOne: IFormField[];
    partTwo: IFormField[];
    partThree: IFormField[];
    partFour: IFormField[];
}

export interface IResetPasswordFormFields {
    partOne: IFormField[];
    partTwo: IFormField[];
    partThree: IFormField[];
}

export interface ICheckoutFormFields {
    partOne: IFormField[];
    partTwo: IFormField[];
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
    isWholesale?: boolean;
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

export type ListGroupTypes = 'numbered' | 'flush' | 'horisontal';

export type Icons =
    | 'alert'
    | 'amount'
    | 'arrowLeft'
    | 'cart'
    | 'chat'
    | 'check'
    | 'checkCircle'
    | 'checkout'
    | 'edit'
    | 'gear'
    | 'info'
    | 'klarna'
    | 'loading'
    | 'login'
    | 'logout'
    | 'maksu myymälään'
    | 'marketplace'
    | 'minus'
    | 'orders'
    | 'paypal'
    | 'paytrail'
    | 'plus'
    | 'print'
    | 'profile'
    | 'remove'
    | 'signup'
    | 'trash'
    | 'truck'
    | 'userBadge'
    | 'userLines';

/** Frontend state */
interface IFlashMessage {
    text: string;
    variant: Variants;
    icon: Icons;
    visible: boolean;
}
export interface IVisibleMessage {
    message: IFlashMessage;
}
/** Title state */
interface ITitle {
    title: string;
}
interface IVisibleTitle {
    title: ITitle;
}
/** Loading */
export interface ILoading {
    isLoading: boolean;
}
export interface IJwtToken {
    token: string;
    authToken: string;
    expiry: string;
}
export interface IFavorites {
    products: IProduct[];
    services: IProduct[];
}

export type AdminRole = 'basic' | 'ultimate';
export interface ICurrentUser {
    user: IPublicUser;
    isAdmin: boolean;
    isAuthenticated: boolean;
}
/** Login form and data */
export interface ILoginData {
    email: string;
    password: string;
}
export interface ISignUpForm {
    email: string;
    confirmEmail: string;
    password: string;
    confirmPassword: string;
    username: string;
    mobileNumber: string;
    firstname: string;
    lastname: string;
    address: string;
    zipcode: string;
    city: string;
    country: Countries;
    terms: boolean;
    newsLetter: boolean;
}

export interface ICheckoutForm {
    mobileNumber: string;
    email: string;
    firstname: string;
    lastname: string;
    street: string;
    zipcode: string;
    city: string;
    country: Countries;
}

export interface IPincodeForm {
    pincode: number;
}

export interface IResetPasswordForm extends IPincodeForm {
    email: string;
    password: string;
    confirmPassword: string;
}

export interface IAddressForm extends IAddress {
    userId: string;
}

export interface IContactInfo {
    email: string;
    username: string;
    mobileNumber: string;
    firstname: string;
    lastname: string;
    bank_account_number: string;
}

export interface IContactInfoForm extends IContactInfo {
    userId: string;
}

export interface ISidebarMenuItem {
    text: string;
    icon: Icons;
    id: number;
}

export interface ITFootSettings {
    prevHref: string;
    prevLinkText: string;
    nextHref: string;
    nextLinkText: string;
}

export interface IGenreItem {
    name: string;
    value: Genres;
}
export interface IDropDownItem {
    name: string;
    value: string;
}
export interface ICategoryItem {
    name: string;
    category: Categories;
    type: ProductTypes;
}

export interface IContactForm {
    email: string;
    fullname: string;
    mobileNumber: string;
    subject: Subjects;
    message: string;
    userId: string;
}

export type Subjects =
    | 'Tilaukset & Varaukset'
    | 'Tuotteet'
    | 'Ongelmatilanteet'
    | 'Palaute';

type PaymentMethodNames = 'klarna' | 'paytrail' | 'paypal' | 'toStore';
type DisplayNames = 'Klarna' | 'Paytrail' | 'Paypal' | 'Maksu myymälään';

export interface IPaymentMethod {
    name: PaymentMethodNames;
    icon: Icons;
    displayName: DisplayNames;
    buttonText: string;
}
