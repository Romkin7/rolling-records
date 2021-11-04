import { apiCall, setHeader } from '../../utils/apiCall';
import { SET_PRODUCTS } from '../actions/actionTypes/productActionTypes';
import { AppActions } from './actions';
import { Dispatch } from 'redux';
import { addMessage } from './messageActions';
import { IPagination, IProduct } from '../../../@types';
import { ThunkResult } from '../../types';
import { addTitle } from './titleActions';
import { setPagination } from './paginationActions';

/** Public Method */
export function setProducts(products: IProduct[]): AppActions {
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
                .then(
                    (res: {
                        products: IProduct[];
                        title: string;
                        pagination: IPagination;
                    }) => {
                        const { products, title, pagination } = res;
                        dispatch(setProducts(products));
                        dispatch(addTitle({ title }));
                        dispatch(setPagination(pagination));
                        return resolve();
                    },
                )
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
