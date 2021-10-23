import { IMarketingCampaign } from '../../../../@types';

export const SET_MARKETING_CAMPAIGNS = 'SET_MARKETING_CAMPAIGNS';
export const ADD_MARKETING_CAMPAIGN = 'ADD_MARKETING_CAMPAIGN';

export interface SetMarketingCampaigns {
    type: typeof SET_MARKETING_CAMPAIGNS;
    marketingCampaigns: IMarketingCampaign[];
}

export interface AddMarketingCampaign {
    type: typeof ADD_MARKETING_CAMPAIGN;
    marketingCampaign: IMarketingCampaign;
}

export type MarketingCampaignActionTypes =
    | SetMarketingCampaigns
    | AddMarketingCampaign;
