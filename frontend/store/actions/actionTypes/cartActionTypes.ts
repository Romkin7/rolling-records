import { ICart } from '../../../../@types';

export const SET_CART = 'SET_CART';
export const RESET_CART = 'RESET_CART';

export interface SetCart {
    type: typeof SET_CART;
    cartState: ICart;
}

export interface ResetCart {
    type: typeof RESET_CART;
    cartState: ICart;
}

export type CartActionTypes = SetCart | ResetCart;
