import { CartActionTypes } from './actionTypes/cartActionTypes';
import { DeliveryCostsActionTypes } from './actionTypes/deliveryCostActionTypes';
import { LoadingActionTypes } from './actionTypes/loadingActionTypes';
import { MarketingCampaignActionTypes } from './actionTypes/marketingCampaignActionTypes';
import { MessageActionTypes } from './actionTypes/messageActionTypes';
import { PaginationActionTypes } from './actionTypes/paginationActionTypes';
import { PostOfficesActionTypes } from './actionTypes/postOfficeActionTypes';
import { ProductActionTypes } from './actionTypes/productActionTypes';
import { TitleActionTypes } from './actionTypes/titleActionTypes';
import { UserAuthActionTypes } from './actionTypes/userAuthActionTypes';

export type AppActions =
    | DeliveryCostsActionTypes
    | LoadingActionTypes
    | MarketingCampaignActionTypes
    | MessageActionTypes
    | PaginationActionTypes
    | PostOfficesActionTypes
    | ProductActionTypes
    | TitleActionTypes
    | CartActionTypes
    | UserAuthActionTypes;
