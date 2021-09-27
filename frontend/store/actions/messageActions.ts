import { ADD_MESSAGE, REMOVE_MESSAGE } from './actionTypes/messageActionTypes';
import { AppActions } from '../actions/actions';
import { IFlashMessage } from '../../types';

export function addMessage(message: IFlashMessage): AppActions {
    return {
        type: ADD_MESSAGE,
        message,
    };
}

export function removeMessage(message: IFlashMessage): AppActions {
    return {
        type: REMOVE_MESSAGE,
        message,
    };
}
