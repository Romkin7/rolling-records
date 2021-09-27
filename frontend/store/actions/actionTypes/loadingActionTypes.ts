export const SET_LOADING = 'SET_LOADING';

export interface SetLoading {
    type: typeof SET_LOADING;
    isLoading: boolean;
}

export type LoadingActionTypes = SetLoading;
