import {
    ModalActionTypes,
    UPDATE_MODAL,
} from '../actions/actionTypes/modalActionTypes';

const DEFAULT_STATE = false;

const modalReducer = (
    toggle: boolean = DEFAULT_STATE,
    action: ModalActionTypes,
) => {
    switch (action.type) {
        case UPDATE_MODAL:
            return !toggle;
        default:
            return DEFAULT_STATE;
    }
};

export default modalReducer;
