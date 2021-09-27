import { ILoading } from '../../types';
import {
    LoadingActionTypes,
    SET_LOADING,
} from '../actions/actionTypes/loadingActionTypes';

const DEFAULT_STATE: ILoading = {
    isLoading: false,
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const loadingReducer = (state = DEFAULT_STATE, action: LoadingActionTypes) => {
    switch (action.type) {
        case SET_LOADING:
            return {
                ...state,
                isLoading: action.isLoading,
            };
        default:
            return state;
    }
};

export default loadingReducer;
