import { AppActions } from './actions';
import { UPDATE_MODAL } from './actionTypes/modalActionTypes';

export function updateModal(visible: boolean): AppActions {
    return {
        type: UPDATE_MODAL,
        visible,
    };
}
