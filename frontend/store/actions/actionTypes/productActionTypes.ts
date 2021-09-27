import { IProduct } from '../../../../@types';

export const SET_PRODUCTS = 'SET_PRODUCTS';

export interface SetProducts {
    type: typeof SET_PRODUCTS;
    products: IProduct[];
}

export type ProductActionTypes = SetProducts;
