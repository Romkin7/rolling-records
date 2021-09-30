import jwtDecode from 'jwt-decode';
import { setHeader } from './apiCall';
import store from '../store/store';
import { setCurrentUser } from '../store/actions/userAuthActions';
import { validateUserRole } from '../utils/utils';
import { AdminRole, IJwtToken } from '../types/index';
import { IUser } from '../../@types';

// Set the session in the local storage
export const setSession: (token: IJwtToken) => void = ({
    token,
    expiry,
}): void => {
    localStorage.setItem('token', token);
    localStorage.setItem('expiry', expiry);
};

// Clear the session from the local storage
export const clearSession = (): void => {
    localStorage.removeItem('token');
    localStorage.removeItem('expiry');
};

// Checks if the session is valid (locally) according to the expiration time
export const isSessionValid = (): boolean => {
    const expiry = localStorage.getItem('expiry');
    const token = localStorage.getItem('token');
    if (expiry) {
        return +new Date(expiry) > +new Date();
    } else if (token) {
        // prevent someone from manually tampering with the key of jwtToken in localStorage
        try {
            const payload: IUser = jwtDecode(token);
            store.dispatch(
                setCurrentUser({
                    user: payload,
                    isAuthenticated: true,
                    isAdmin: validateUserRole(
                        payload.admin.premission_level as AdminRole,
                    ),
                }),
            );
            setHeader('token', token);
            return true;
        } catch (e) {
            return false;
        }
    } else {
        return false;
    }
};
