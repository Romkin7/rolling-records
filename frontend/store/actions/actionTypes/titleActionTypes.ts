import { ITitle } from "../../../types";

export const ADD_TITLE = 'ADD_TITLE';
export const REMOVE_TITLE = 'REMOVE_TITLE';

export interface AddTitle {
    type: typeof ADD_TITLE;
    title: ITitle;
}

export interface RemoveTitle {
    type: typeof REMOVE_TITLE;
    title: ITitle;
}

export type TitleActionTypes = AddTitle | RemoveTitle;
