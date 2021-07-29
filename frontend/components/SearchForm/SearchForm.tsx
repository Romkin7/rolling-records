import React, { FC } from 'react';
import Button from '../Button/Button';

const SearchForm: FC = () => {
    return (
        <div className="mx-3">
            <form>
                <input
                    type="search"
                    name="search"
                    onInput={() => {}}
                    className="form-control me-3"
                    value={''}
                    placeholder="Hae tuotteita..."
                    aria-label="Search"
                />
            </form>
        </div>
    );
};

export default SearchForm;
