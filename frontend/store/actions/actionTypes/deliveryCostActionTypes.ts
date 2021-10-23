import { IDeliveryCost } from '../../../../@types';

export const SET_DELIVERY_COSTS = 'SET_DELIVERY_COSTS';
export const RESET_DELIVERY_COSTS = 'RESET_DELIVERY_COSTS';

export interface SetDeliveryCosts {
    type: typeof SET_DELIVERY_COSTS;
    deliveryCosts: IDeliveryCost[];
}

export interface ResetDeliveryCosts {
    type: typeof RESET_DELIVERY_COSTS;
    deliveryCosts: IDeliveryCost[];
}

export type DeliveryCostsActionTypes = SetDeliveryCosts | ResetDeliveryCosts;
