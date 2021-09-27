import { ThunkDispatch } from 'redux-thunk';
import { fetchProducts } from '../actions/productActions';
import { AppActions } from '../actions/actions';
import { IDispatchProps } from './dispatchActions';
import { AppState } from '../store';

export function mapDispatchToProps(
    dispatch: ThunkDispatch<AppState, undefined, AppActions>,
): IDispatchProps {
    return {
        /** Products action types */
        fetchProductsAction(query: string) {
            dispatch(fetchProducts(query));
        },
    };
}
