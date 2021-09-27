import { resetCurrentUser } from '../../utils/reset';
import {
    UserAuthActionTypes,
    SET_CURRENT_USER,
    REMOVE_CURRENT_USER,
} from '../actions/actionTypes/userAuthActionTypes';
import { ICurrentUser } from '../../types';

const DEFAULT_STATE: ICurrentUser = {
    isAuthenticated: false,
    isAdmin: false,
    user: resetCurrentUser(),
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const userAuthReducer = (
    state = DEFAULT_STATE,
    action: UserAuthActionTypes,
) => {
    switch (action.type) {
        case SET_CURRENT_USER:
            return {
                isAuthenticated: action.isAuthenticated,
                isAdmin: action.isAdmin,
                user: action.user,
            };
        case REMOVE_CURRENT_USER:
            return {
                ...state,
                user: action.user,
                isAdmin: action.isAdmin,
                isAuthenticated: action.isAuthenticated,
            };
        default:
            return state;
    }
};

export default userAuthReducer;
