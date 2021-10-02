import React, { FC, useEffect, useState } from 'react';
import Router from 'next/router';
import { useDispatch } from 'react-redux';
import { fetchProducts } from '../../store/actions/productActions';

interface ISearchFormState {
    search: string;
}

const SearchForm: FC = () => {
    const [searchFormState, updateSearchFormState] = useState<ISearchFormState>(
        resetSearchFormState(),
    );
    const dispatch = useDispatch();
    useEffect(() => {
        if (searchFormState.search.length > 2) {
            const { pathname } = Router;
            dispatch(fetchProducts(searchFormState.search));
            if (pathname !== '/lp:t') {
                Router.push('/lp:t');
            }
        }
    }, [searchFormState]);

    function resetSearchFormState(): ISearchFormState {
        return {
            search: '',
        };
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleInput = (event: any) => {
        const { target } = event;
        updateSearchFormState({
            [target.name]: target.value,
        } as Pick<ISearchFormState, keyof ISearchFormState>);
    };

    return (
        <div className="mx-3">
            <form>
                <input
                    type="search"
                    name="search"
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    onInput={(event: any) => handleInput(event)}
                    className="form-control me-3"
                    value={searchFormState.search}
                    placeholder="Hae tuotteita..."
                    aria-label="Search"
                />
            </form>
        </div>
    );
};

export default SearchForm;
