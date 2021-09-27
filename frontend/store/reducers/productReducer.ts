import { IProduct } from '../../../@types';
import {
    SET_PRODUCTS,
    ProductActionTypes,
} from '../actions/actionTypes/productActionTypes';

const DEFAULT_STATE: IProduct[] = [];

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const productReducer = (state = DEFAULT_STATE, action: ProductActionTypes) => {
    switch (action.type) {
        case SET_PRODUCTS:
            return action.products;
        default:
            return state;
    }
};

export default productReducer;
