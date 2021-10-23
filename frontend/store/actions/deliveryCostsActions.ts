import { IDeliveryCost } from '../../../@types';
import { AppActions } from './actions';
import {
    RESET_DELIVERY_COSTS,
    SET_DELIVERY_COSTS,
} from './actionTypes/deliveryCostActionTypes';

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
