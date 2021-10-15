import { UPDATE_STEP, RESET_STEP } from './actionTypes/stepAcyionTypes';
import { AppActions } from '../actions/actions';

export function updateStep(step: number): AppActions {
    return {
        type: UPDATE_STEP,
        step,
    };
}

export function resetStep(): AppActions {
    return {
        type: RESET_STEP,
        step: 1,
    };
}
