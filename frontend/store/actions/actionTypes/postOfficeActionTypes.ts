import { IPostOffice } from '../../../../@types';

export const SET_POST_OFFICES = 'SET_POST_OFFICES';
export const RESET_POST_OFFICES = 'RESET_POST_OFFICES';

export interface SetPostOffices {
    type: typeof SET_POST_OFFICES;
    postOffices: IPostOffice[];
}

export interface ResetPostOffices {
    type: typeof RESET_POST_OFFICES;
    postOffices: IPostOffice[];
}

export type PostOfficesActionTypes = SetPostOffices | ResetPostOffices;
