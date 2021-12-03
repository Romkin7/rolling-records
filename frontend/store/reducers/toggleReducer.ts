import {
    ToggleActionTypes,
    UPDATE_TOGGLE,
} from '../actions/actionTypes/toggleActionTypes';

const DEFAULT_STATE = false;

const toggleReducer = (state = DEFAULT_STATE, action: ToggleActionTypes) => {
    switch (action.type) {
        case UPDATE_TOGGLE:
            return action.toggle;
        default:
            return state;
    }
};

export default toggleReducer;
