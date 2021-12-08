import { CartActionTypes } from './actionTypes/cartActionTypes';
import { DeliveryCostsActionTypes } from './actionTypes/deliveryCostActionTypes';
import { LoadingActionTypes } from './actionTypes/loadingActionTypes';
import { MarketingCampaignActionTypes } from './actionTypes/marketingCampaignActionTypes';
import { MessageActionTypes } from './actionTypes/messageActionTypes';
import { ModalActionTypes } from './actionTypes/modalActionTypes';
import { PaginationActionTypes } from './actionTypes/paginationActionTypes';
import { PostOfficesActionTypes } from './actionTypes/postOfficeActionTypes';
import { ProductActionTypes } from './actionTypes/productActionTypes';
import { ResetPasswordFormActionTypes } from './actionTypes/resetPasswordFormActionTypes';
import { TitleActionTypes } from './actionTypes/titleActionTypes';
import { ToggleActionTypes } from './actionTypes/toggleActionTypes';
import { UserAuthActionTypes } from './actionTypes/userAuthActionTypes';

export type AppActions =
    | DeliveryCostsActionTypes
    | LoadingActionTypes
    | MarketingCampaignActionTypes
    | MessageActionTypes
    | ModalActionTypes
    | PaginationActionTypes
    | PostOfficesActionTypes
    | ProductActionTypes
    | ResetPasswordFormActionTypes
    | TitleActionTypes
    | ToggleActionTypes
    | CartActionTypes
    | UserAuthActionTypes;
