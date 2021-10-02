import { IPaginationState } from "../../types";
import { resetPaginationFunction } from "../../utils/reset";
import { PaginationActionTypes, RESET_PAGINATION, SET_PAGINATION } from "../actions/actionTypes/paginationActionTypes";

const DEFAULT_STATE: IPaginationState = {
    pagination: resetPaginationFunction(),
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const paginationReducer = (state = DEFAULT_STATE, action: PaginationActionTypes) => {
    switch (action.type) {
        case SET_PAGINATION:
            return {
                ...state,
                pagination: action.pagination,
            };
        case RESET_PAGINATION:
            return {
                ...state,
                pagination: action.pagination,
            };
        default:
            return state;
    }
};

export default paginationReducer;
