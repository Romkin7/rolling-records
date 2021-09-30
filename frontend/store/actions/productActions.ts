import { apiCall, setHeader } from '../../utils/apiCall';
import { SET_PRODUCTS } from '../actions/actionTypes/productActionTypes';
import { AppActions } from './actions';
import { Dispatch } from 'redux';
import { addMessage } from './messageActions';
import { IProduct } from '../../../@types';
import { ThunkResult } from '../../types';

/** Public Method */
export function setProductsAction(products: IProduct[]): AppActions {
    return {
        type: SET_PRODUCTS,
        products,
    };
}
/** Public method */
export const fetchProducts = (queryString: string): ThunkResult<void> => {
    setHeader('get', '');
    return (dispatch: Dispatch<AppActions>) => {
        return new Promise<void>((resolve, reject) => {
            return apiCall(
                'get',
                `http://localhost:8080/lp:t?page=1&search=${queryString}`,
                null,
            )
                .then((res: { products: IProduct[] }) => {
                    const { products } = res;
                    dispatch(setProductsAction(products));
                    return resolve();
                })
                .catch((error: Error) => {
                    dispatch(
                        addMessage({
                            text: error
                                ? error.message
                                : 'virhe palvelimella, yritä uudelleen hetken kuluttua.',
                            bgColor: 'danger',
                            visible: true,
                        }),
                    );
                    reject();
                });
        });
    };
};
