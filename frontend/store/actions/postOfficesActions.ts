import { Dispatch } from 'redux';
import { IPostOffice } from '../../../@types';
import { ThunkResult } from '../../types';
import { apiCall, setHeader } from '../../utils/apiCall';
import { AppActions } from './actions';
import {
    RESET_POST_OFFICES,
    SET_POST_OFFICES,
} from './actionTypes/postOfficeActionTypes';
import { addMessage } from './messageActions';

/** Public methods */
export function setPostOffices(postOffices: IPostOffice[]): AppActions {
    return {
        type: SET_POST_OFFICES,
        postOffices,
    };
}

export function resetPostOffices(postOffices: IPostOffice[]): AppActions {
    return {
        type: RESET_POST_OFFICES,
        postOffices,
    };
}

/** Public method */
export const fetchPostOffices = (): ThunkResult<void> => {
    setHeader('get', '');
    return (dispatch: Dispatch<AppActions>) => {
        return new Promise<void>((resolve, reject) => {
            const cartId = window.localStorage.getItem('cartId');
            return apiCall(
                'get',
                `http://localhost:8080/unifaun/get-nearby-post-offices?cartId=${cartId}`,
                null,
            )
                .then((res: { postOffices: IPostOffice[] }) => {
                    const { postOffices } = res;
                    dispatch(setPostOffices(postOffices));
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
