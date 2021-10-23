import { IDeliveryCost } from '../../../@types';
import { resetDeliveryCost } from '../../utils/reset';
import {
    DeliveryCostsActionTypes,
    RESET_DELIVERY_COSTS,
    SET_DELIVERY_COSTS,
} from '../actions/actionTypes/deliveryCostActionTypes';

const DEFAULT_STATE: IDeliveryCost[] = [resetDeliveryCost()];

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const deliveryCostsReducer = (
    state = DEFAULT_STATE,
    action: DeliveryCostsActionTypes,
) => {
    switch (action.type) {
        case SET_DELIVERY_COSTS:
            return action.deliveryCosts;
        case RESET_DELIVERY_COSTS:
            return DEFAULT_STATE;
        default:
            return state;
    }
};

export default deliveryCostsReducer;
