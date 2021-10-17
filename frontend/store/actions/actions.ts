import { CartActionTypes } from './actionTypes/cartActionTypes';
import { LoadingActionTypes } from './actionTypes/loadingActionTypes';
import { MessageActionTypes } from './actionTypes/messageActionTypes';
import { PaginationActionTypes } from './actionTypes/paginationActionTypes';
import { ProductActionTypes } from './actionTypes/productActionTypes';
import { StepActionTypes } from './actionTypes/stepAcyionTypes';
import { TitleActionTypes } from './actionTypes/titleActionTypes';
import { UserAuthActionTypes } from './actionTypes/userAuthActionTypes';

export type AppActions =
    | LoadingActionTypes
    | MessageActionTypes
    | PaginationActionTypes
    | ProductActionTypes
    | StepActionTypes
    | TitleActionTypes
    | CartActionTypes
    | UserAuthActionTypes;
