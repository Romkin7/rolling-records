import { IPublicUser } from '../../../../@types';
import { ICurrentUser } from '../../../types';

export const SET_CURRENT_USER = 'SET_CURRENT_USER';
export const REMOVE_CURRENT_USER = 'REMOVE_CURRENT_USER';

export interface SetCurrentUser {
    type: typeof SET_CURRENT_USER;
    currentUser: ICurrentUser;
}

export interface RemoveCurrentUser {
    type: typeof REMOVE_CURRENT_USER;
    currentUser: ICurrentUser;
}

export type UserAuthActionTypes = SetCurrentUser | RemoveCurrentUser;
