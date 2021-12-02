import {
    ToggleActionTypes,
    UPDATE_TOGGLE,
} from '../actions/actionTypes/toggleActionTypes';

const DEFAULT_STATE = false;

const toggleReducer = (
    toggle: boolean = DEFAULT_STATE,
    action: ToggleActionTypes,
) => {
    switch (action.type) {
        case UPDATE_TOGGLE:
            return toggle;
        default:
            return DEFAULT_STATE;
    }
};

export default toggleReducer;
