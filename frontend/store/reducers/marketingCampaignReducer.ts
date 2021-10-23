import { IMarketingCampaign } from '../../../@types';
import {
    ADD_MARKETING_CAMPAIGN,
    MarketingCampaignActionTypes,
    SET_MARKETING_CAMPAIGNS,
} from '../actions/actionTypes/marketingCampaignActionTypes';

const DEFAULT_STATE: IMarketingCampaign[] = [];

const marketingCampaignReducer = (
    state = DEFAULT_STATE,
    action: MarketingCampaignActionTypes,
) => {
    switch (action.type) {
        case SET_MARKETING_CAMPAIGNS:
            return action.marketingCampaigns;
        case ADD_MARKETING_CAMPAIGN:
            return [...state, action.marketingCampaign];
        default:
            return state;
    }
};

export default marketingCampaignReducer;
