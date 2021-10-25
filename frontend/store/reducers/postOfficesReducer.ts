import { IPostOffice } from '../../../@types';
import { resetPostOffice } from '../../utils/reset';
import {
    PostOfficesActionTypes,
    RESET_POST_OFFICES,
    SET_POST_OFFICES,
} from '../actions/actionTypes/postOfficeActionTypes';

const DEFAULT_STATE: IPostOffice[] = [resetPostOffice()];

const postOfficesReducer = (
    state = DEFAULT_STATE,
    action: PostOfficesActionTypes,
) => {
    switch (action.type) {
        case SET_POST_OFFICES:
            return action.postOffices;
        case RESET_POST_OFFICES:
            return DEFAULT_STATE;
        default:
            return state;
    }
};

export default postOfficesReducer;
