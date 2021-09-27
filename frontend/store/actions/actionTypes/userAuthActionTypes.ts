import { IPublicUser } from '../../../../@types';

export const SET_CURRENT_USER = 'SET_CURRENT_USER';
export const REMOVE_CURRENT_USER = 'REMOVE_CURRENT_USER';

export interface SetCurrentUser {
    type: typeof SET_CURRENT_USER;
    user: IPublicUser;
    isAuthenticated: boolean;
    isAdmin: boolean;
}

export interface RemoveCurrentUser {
    type: typeof REMOVE_CURRENT_USER;
    user: IPublicUser;
    isAuthenticated: boolean;
    isAdmin: boolean;
}

export type UserAuthActionTypes = SetCurrentUser | RemoveCurrentUser;
