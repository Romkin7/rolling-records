// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
export type ThunkResult<R> = ThunkAction<R, AppState, undefined, AppActions>;

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

export type Icons = 'Login' | 'Profile' | 'Logout' | 'Cart' | 'Signup';

/** Frontend state */
interface IFlashMessage {
    text: string;
    bgColor: string;
    visible: boolean;
}
export interface IVisibleMessage {
    message: IFlashMessage;
}
/** Loading */
export interface ILoading {
    isLoading: boolean;
}
export interface IJwtToken {
    token: string;
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
}
export interface IResetPasswordForm {
    pincode: number;
    email: string;
    password: string;
    confPassword: string;
}

export interface ISidebarMenuItem {
    text: string;
    id: number;
}
