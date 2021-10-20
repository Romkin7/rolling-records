import { AppActions } from '../actions/actions';
import { SET_CART, RESET_CART } from '../actions/actionTypes/cartActionTypes';
import { Dispatch } from 'redux';
import { addMessage } from './messageActions';
import { ICart } from '../../../@types';
import { ThunkResult } from '../../types';
import { apiCall } from '../../utils/apiCall';

export function setCart(cartState: ICart): AppActions {
    return {
        type: SET_CART,
        cartState,
    };
}

export function resetCart(cartState: ICart): AppActions {
    return {
        type: RESET_CART,
        cartState,
    };
}

export const fetchCart = (): ThunkResult<void> => {
    return (dispatch: Dispatch<AppActions>) => {
        return new Promise<void>((resolve, reject) => {
            return apiCall(
                'get',
                'http://localhost:8080/cart?cartId=' +
                    window.localStorage.getItem('cartId'),
                null,
            )
                .then((res: any) => {
                    const { cart } = res;
                    dispatch(setCart(cart));
                    resolve();
                })
                .catch((error: Error) => {
                    dispatch(
                        addMessage({
                            text: error
                                ? error.message
                                : 'virhe palvelimella, yritä uudelleen hetken kuluttua.',
                            variant: 'warning',
                            icon: 'alert',
                            visible: true,
                        }),
                    );
                    reject();
                });
        });
    };
};
// tslint:disable-next-line
export const addToCart = (
    itemId: string,
    itemsTotalQuantity: number,
): ThunkResult<void> => {
    return (dispatch: Dispatch<AppActions>) => {
        return new Promise<void>((resolve, reject) => {
            // tslint:disable-next-line
            return apiCall('post', 'http://localhost:8080/cart', {
                itemId,
                itemsTotalQuantity,
                cartId: window.localStorage.getItem('cartId'),
            })
                .then((res: any) => {
                    const { cart } = res;
                    dispatch(setCart(cart));
                    dispatch(
                        addMessage({
                            text: 'Tuote onnistuneesti lisätty ostoskoriin!',
                            variant: 'success',
                            visible: true,
                            icon: 'alert',
                        }),
                    );
                    resolve();
                })
                .catch((error: Error) => {
                    dispatch(
                        addMessage({
                            text: error
                                ? error.message
                                : 'virhe palvelimella, yritä uudelleen hetken kuluttua.',
                            variant: 'danger',
                            visible: true,
                            icon: 'alert',
                        }),
                    );
                    reject();
                });
        });
    };
};

// Add deliveryCost to cart
export const addDeliveryCost = (ownerId: string): ThunkResult<void> => {
    return (dispatch: Dispatch<AppActions>) => {
        return new Promise<void>((resolve, reject) => {
            return apiCall(
                'post',
                'http://localhost:8080/cart/adddeliverycost',
                {
                    ownerId,
                },
            )
                .then((res: any) => {
                    dispatch(setCart(res.cart));
                    dispatch(
                        addMessage({
                            text:
                                res.message ||
                                'Toimituskulutietoja on päivitetty onnistuneesti ostoskoriin.',
                            variant: 'success',
                            visible: true,
                            icon: 'check',
                        }),
                    );
                    resolve();
                })
                .catch((error) => {
                    dispatch(
                        addMessage({
                            text: error
                                ? error.message
                                : 'virhe palvelimella, yritä uudelleen hetken kuluttua.',
                            variant: 'danger',
                            visible: true,
                            icon: 'alert',
                        }),
                    );
                    reject();
                });
        });
    };
};
// tslint:disable-next-line
export const substractFromCart = (
    itemId: string,
    itemsTotalQuantity: number,
): ThunkResult<void> => {
    return (dispatch: Dispatch<AppActions>) => {
        return new Promise<void>((resolve, reject) => {
            // tslint:disable-next-line
            return apiCall('put', 'http://localhost:8080/cart', {
                itemId,
                itemsTotalQuantity,
            })
                .then((res: any) => {
                    const { cart } = res;
                    dispatch(setCart(cart));
                    dispatch(
                        addMessage({
                            text: 'Tuotteen määrää on onnistuneesti päivitetty!',
                            variant: 'success',
                            visible: true,
                            icon: 'check',
                        }),
                    );
                    resolve();
                })
                .catch((error: Error) => {
                    dispatch(
                        addMessage({
                            text: error
                                ? error.message
                                : 'virhe palvelimella, yritä uudelleen hetken kuluttua.',
                            variant: 'danger',
                            visible: true,
                            icon: 'alert',
                        }),
                    );
                    reject();
                });
        });
    };
};
// tslint:disable-next-line
export const removeFromCart = (itemId: string): ThunkResult<void> => {
    return (dispatch: Dispatch<AppActions>) => {
        return new Promise<void>((resolve, reject) => {
            // tslint:disable-next-line
            return apiCall('delete', 'http://localhost:8080/cart', {
                itemId,
                cartId: window.localStorage.getItem('cartId'),
            })
                .then((res: any) => {
                    const { cart } = res;
                    dispatch(setCart(cart));
                    dispatch(
                        addMessage({
                            text: 'Tuote on onnistuneesti poistettu ostoskorista!',
                            variant: 'success',
                            visible: true,
                            icon: 'check',
                        }),
                    );
                    resolve();
                })
                .catch((error: Error) => {
                    dispatch(
                        addMessage({
                            text: error
                                ? error.message
                                : 'virhe palvelimella, yritä uudelleen hetken kuluttua.',
                            variant: 'danger',
                            visible: true,
                            icon: 'alert',
                        }),
                    );
                    reject();
                });
        });
    };
};
