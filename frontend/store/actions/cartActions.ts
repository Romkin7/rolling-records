import { AppActions } from '../actions/actions';
import { SET_CART, RESET_CART } from '../actions/actionTypes/cartActionTypes';
import { Dispatch } from 'redux';
import { addMessage } from './messageActions';
import {
    Countries,
    ICart,
    IMarketingCampaign,
    IPostOffice,
    IStore,
} from '../../../@types';
import { ICheckoutForm, ThunkResult } from '../../types';
import { apiCall } from '../../utils/apiCall';
import { setDeliveryCosts } from './deliveryCostsActions';
import { fetchPostOffices } from './postOfficesActions';

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
                    if (cart.deliveryCosts) {
                        dispatch(setDeliveryCosts(cart.deliveryCosts));
                    }
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
                    const { cart, message } = res;
                    dispatch(setCart(cart));
                    dispatch(
                        addMessage({
                            text: message,
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
//Add customer
export const addCustomerToCart = (
    checkoutForm: ICheckoutForm,
    freeShipmentCampaign: IMarketingCampaign,
    doublePointsCampaign: IMarketingCampaign,
): ThunkResult<void> => {
    return (dispatch: Dispatch<AppActions>) => {
        return new Promise<void>((resolve, reject) => {
            return apiCall('post', 'http://localhost:8080/checkout/customer', {
                checkoutForm,
                freeShipmentCampaign,
                doublePointsCampaign,
                cartId: window.localStorage.getItem('cartId'),
            })
                .then((res: any) => {
                    dispatch(setCart(res.cart));
                    dispatch(setDeliveryCosts(res.deliveryCosts));
                    dispatch(
                        addMessage({
                            text: res.message,
                            variant: 'success',
                            visible: true,
                            icon: 'check',
                        }),
                    );
                    dispatch(fetchPostOffices());
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
// Add deliveryCost to cart
export const addDeliveryCost = (deliveryCostId: string): ThunkResult<void> => {
    return (dispatch: Dispatch<AppActions>) => {
        return new Promise<void>((resolve, reject) => {
            return apiCall(
                'post',
                'http://localhost:8080/checkout/deliverycost',
                {
                    deliveryCostId,
                    cartId: window.localStorage.getItem('cartId'),
                },
            )
                .then((res: any) => {
                    dispatch(setCart(res.cart));
                    dispatch(
                        addMessage({
                            text: res.message,
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
// Add deliveryCost to cart
export const addPostOffice = (postOffice: IPostOffice): ThunkResult<void> => {
    return (dispatch: Dispatch<AppActions>) => {
        return new Promise<void>((resolve, reject) => {
            return apiCall(
                'post',
                'http://localhost:8080/checkout/postoffice',
                {
                    postOffice,
                    cartId: window.localStorage.getItem('cartId'),
                },
            )
                .then((res: any) => {
                    dispatch(setCart(res.cart));
                    dispatch(
                        addMessage({
                            text: res.message,
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
// Add deliveryCost to cart
export const addPickupStore = (store: IStore): ThunkResult<void> => {
    return (dispatch: Dispatch<AppActions>) => {
        return new Promise<void>((resolve, reject) => {
            return apiCall(
                'post',
                'http://localhost:8080/checkout/pickupstore',
                {
                    store,
                    cartId: window.localStorage.getItem('cartId'),
                },
            )
                .then((res: any) => {
                    dispatch(setCart(res.cart));
                    dispatch(
                        addMessage({
                            text: res.message,
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
            return apiCall('patch', 'http://localhost:8080/cart', {
                itemId,
                itemsTotalQuantity,
                cartId: window.localStorage.getItem('cartId'),
            })
                .then((res: any) => {
                    const { cart, message } = res;
                    dispatch(setCart(cart));
                    dispatch(
                        addMessage({
                            text: message,
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
                    const { cart, message } = res;
                    dispatch(setCart(cart));
                    dispatch(
                        addMessage({
                            text: message,
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
export const useCoupon = (): ThunkResult<void> => {
    return (dispatch: Dispatch<AppActions>) => {
        return new Promise<void>((resolve, reject) => {
            // tslint:disable-next-line
            return apiCall(
                'patch',
                'http://localhost:8080/checkout/usecoupon',
                {
                    cartId: window.localStorage.getItem('cartId'),
                },
            )
                .then((res: any) => {
                    const { cart, message } = res;
                    dispatch(setCart(cart));
                    dispatch(
                        addMessage({
                            text: message,
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
