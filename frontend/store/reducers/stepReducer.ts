import { IStep } from '../../types';
import {
    UPDATE_STEP,
    RESET_STEP,
    StepActionTypes,
} from '../actions/actionTypes/stepAcyionTypes';

const DEFAULT_STATE: IStep = {
    step: 1,
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const stepReducer = (state = DEFAULT_STATE, action: StepActionTypes) => {
    switch (action.type) {
        case UPDATE_STEP:
            return {
                ...state,
                step: action.step,
            };
        case RESET_STEP:
            return {
                ...state,
                step: 1,
            };
        default:
            return state;
    }
};

export default stepReducer;
