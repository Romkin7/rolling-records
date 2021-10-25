import { AppActions } from './actions';
import { UPDATE_TOGGLE } from './actionTypes/toggleActionTypes';

export function updateToggle(toggle: boolean): AppActions {
    return {
        type: UPDATE_TOGGLE,
        toggle,
    };
}
