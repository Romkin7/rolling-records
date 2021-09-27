import { AppActions } from '../actions/actions';
import { SET_LOADING } from '../actions/actionTypes/loadingActionTypes';

export function setLoading(isLoading: boolean): AppActions {
    return {
        type: SET_LOADING,
        isLoading,
    };
}
