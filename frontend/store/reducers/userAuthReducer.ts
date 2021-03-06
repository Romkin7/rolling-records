import { resetUser } from '../../utils/reset';
import {
    UserAuthActionTypes,
    SET_CURRENT_USER,
    REMOVE_CURRENT_USER,
} from '../actions/actionTypes/userAuthActionTypes';
import { ICurrentUser } from '../../types';

const DEFAULT_STATE: ICurrentUser = {
    isAuthenticated: false,
    isAdmin: false,
    user: resetUser(),
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const userAuthReducer = (
    state = DEFAULT_STATE,
    action: UserAuthActionTypes,
) => {
    switch (action.type) {
        case SET_CURRENT_USER:
            return {
                ...state,
                isAdmin: action.currentUser.isAdmin,
                isAuthenticated: action.currentUser.isAuthenticated,
                user: action.currentUser.user,
            };
        case REMOVE_CURRENT_USER:
            return {
                ...state,
                isAdmin: action.currentUser.isAdmin,
                isAuthenticated: action.currentUser.isAuthenticated,
                user: action.currentUser.user,
            };
        default:
            return state;
    }
};

export default userAuthReducer;
