import {
    SET_MARKETING_CAMPAIGNS,
    ADD_MARKETING_CAMPAIGN,
} from './actionTypes/marketingCampaignActionTypes';
import { AppActions } from './actions';
import { IMarketingCampaign } from '../../../@types';
import { Dispatch } from 'redux';
import { ThunkResult } from '../../types';
import { apiCall, setHeader } from '../../utils/apiCall';
import { addMessage } from './messageActions';

export function setMarketingCampaigns(
    marketingCampaigns: IMarketingCampaign[],
): AppActions {
    return {
        type: SET_MARKETING_CAMPAIGNS,
        marketingCampaigns,
    };
}

export function addMarketingCampaign(
    marketingCampaign: IMarketingCampaign,
): AppActions {
    return {
        type: ADD_MARKETING_CAMPAIGN,
        marketingCampaign,
    };
}
/** Public method */
export const fetchMarketingCampaigns = (): ThunkResult<void> => {
    setHeader('get', '');
    return (dispatch: Dispatch<AppActions>) => {
        return new Promise<void>((resolve, reject) => {
            return apiCall(
                'get',
                `http://localhost:8080/marketingcampaigns`,
                null,
            )
                .then((res: { marketingCampaigns }) => {
                    const { marketingCampaigns } = res;
                    dispatch(setMarketingCampaigns(marketingCampaigns));
                    return resolve();
                })
                .catch((error: Error) => {
                    dispatch(
                        addMessage({
                            text: error
                                ? error.message
                                : 'virhe palvelimella, yritä uudelleen hetken kuluttua.',
                            variant: 'danger',
                            icon: 'alert',
                            visible: true,
                        }),
                    );
                    reject();
                });
        });
    };
};
