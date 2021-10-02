import { ADD_TITLE, REMOVE_TITLE } from './actionTypes/titleActionTypes';
import { AppActions } from '../actions/actions';
import { ITitle } from '../../types';

export function addTitle(title: ITitle): AppActions {
    return {
        type: ADD_TITLE,
        title,
    };
}

export function removeTitle(title: ITitle): AppActions {
    return {
        type: REMOVE_TITLE,
        title,
    };
}
