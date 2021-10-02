import { IPagination } from '../../../../@types';

export const SET_PAGINATION = 'SET_PAGINATION';
export const RESET_PAGINATION = 'RESET_PAGINATION';

export interface SetPagination {
    type: typeof SET_PAGINATION;
    pagination: IPagination;
}

export interface ResetPagination {
    type: typeof RESET_PAGINATION;
    pagination: IPagination;
}

export type PaginationActionTypes = SetPagination | ResetPagination;
