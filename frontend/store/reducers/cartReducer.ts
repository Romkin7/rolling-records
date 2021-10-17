import { ICart } from '../../../@types';
import {
    CartActionTypes,
    RESET_CART,
    SET_CART,
} from '../actions/actionTypes/cartActionTypes';
import { resetCart } from '../../utils/reset';

const DEFAULT_STATE: ICart = resetCart();

const cartReducer = (state = DEFAULT_STATE, action: CartActionTypes) => {
    switch (action.type) {
        case SET_CART:
            return Object.assign({}, state, action.cartState);
        case RESET_CART:
            return Object.assign({}, state, action.cartState);
        default:
            return state;
    }
};

export default cartReducer;
