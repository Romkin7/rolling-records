import { IPagination } from "../../../@types";
import { AppActions } from "./actions";
import { RESET_PAGINATION, SET_PAGINATION } from "./actionTypes/paginationActionTypes";

export function setPagination(pagination: IPagination): AppActions {
    return {
        type: SET_PAGINATION,
        pagination,
    }
}

export function resetPagination(pagination: IPagination): AppActions {
    return {
        type: RESET_PAGINATION,
        pagination,
    }
}
