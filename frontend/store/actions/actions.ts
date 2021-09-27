import { LoadingActionTypes } from './actionTypes/loadingActionTypes';
import { MessageActionTypes } from './actionTypes/messageActionTypes';
import { ProductActionTypes } from './actionTypes/productActionTypes';
import { UserAuthActionTypes } from './actionTypes/userAuthActionTypes';

export type AppActions =
    | LoadingActionTypes
    | MessageActionTypes
    | ProductActionTypes
    | UserAuthActionTypes;
