import {
    ModalActionTypes,
    UPDATE_MODAL,
} from '../actions/actionTypes/modalActionTypes';

const DEFAULT_STATE = false;

const modalReducer = (state = DEFAULT_STATE, action: ModalActionTypes) => {
    switch (action.type) {
        case UPDATE_MODAL:
            return !action.visible;
        default:
            return state;
    }
};

export default modalReducer;
