import { Dispatch } from 'redux';
import { ICustomer, IDeliveryCost, IMarketingCampaign } from '../../../@types';
import { ThunkResult } from '../../types';
import { apiCall } from '../../utils/apiCall';
import { AppActions } from './actions';
import {
    RESET_DELIVERY_COSTS,
    SET_DELIVERY_COSTS,
} from './actionTypes/deliveryCostActionTypes';
import { setCart } from './cartActions';
import { addMessage } from './messageActions';
import { fetchPostOffices } from './postOfficesActions';

/** Public Method */
export function setDeliveryCosts(deliveryCosts: IDeliveryCost[]): AppActions {
    return {
        type: SET_DELIVERY_COSTS,
        deliveryCosts,
    };
}

export function resetDeliveryCosts(deliveryCosts: IDeliveryCost[]): AppActions {
    return {
        type: RESET_DELIVERY_COSTS,
        deliveryCosts,
    };
}

export const fetchDeliveryCosts = (
    customer: ICustomer,
    freeShipmentCampaign: IMarketingCampaign,
    doublePointsCampaign: IMarketingCampaign,
): ThunkResult<void> => {
    return (dispatch: Dispatch<AppActions>) => {
        return new Promise<void>((resolve, reject) => {
            return apiCall('post', 'http://localhost:8080/checkout/customer', {
                customer,
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
