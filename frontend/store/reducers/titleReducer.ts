import { IVisibleTitle } from '../../types';
import { ADD_TITLE, REMOVE_TITLE, TitleActionTypes } from '../actions/actionTypes/titleActionTypes';

const DEFAULT_STATE: IVisibleTitle = {
    title: {
        title: ''
    }
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const titleReducer = (state = DEFAULT_STATE, action: TitleActionTypes) => {
    switch (action.type) {
        case ADD_TITLE:
            return {
                ...state,
                title: action.title,
            };
        case REMOVE_TITLE:
            return {
                ...state,
                title: action.title,
            };
        default:
            return state;
    }
};

export default titleReducer;
