import jwt_decode from 'jwt-decode';
import { setHeader } from './apiCall';
import store from '../store/store';
import { setCurrentUser } from '../store/actions/userAuthActions';
import { validateUserRole } from '../utils/utils';
import { AdminRole, IJwtToken } from '../types/index';
import { IPublicUser } from '../../@types';

// Set the session in the local storage
export const setSession: (token: IJwtToken) => void = ({
    token,
    authToken,
    expiry,
}): void => {
    localStorage.setItem('token', token);
    localStorage.setItem('authToken', authToken);
    localStorage.setItem('expiry', expiry);
};

// Clear the session from the local storage
export const clearSession = (): void => {
    localStorage.removeItem('token');
    localStorage.removeItem('authToken');
    localStorage.removeItem('expiry');
};

// Checks if the session is valid (locally) according to the expiration time
export const isSessionValid = (): boolean => {
    const expiry = localStorage.getItem('expiry');
    const token = localStorage.getItem('token');
    const authToken = localStorage.getItem('authToken');
    if (expiry) {
        return +new Date(expiry) > +new Date();
    } else if (authToken && token) {
        // prevent someone from manually tampering with the key of jwtToken in localStorage
        try {
            const payload: IPublicUser = jwt_decode(token);
            store.dispatch(
                setCurrentUser({
                    user: payload,
                    isAuthenticated: true,
                    isAdmin: validateUserRole(
                        payload.admin.premission_level as AdminRole,
                    ),
                }),
            );
            setHeader('token', authToken);
            return true;
        } catch (e) {
            return false;
        }
    } else {
        return false;
    }
};
