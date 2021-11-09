import React, { FC } from 'react';
import { IQuery } from '../../../@types';
import { genresList, sortList } from '../../data/categoriesAndGenres';
import ButtonDropDown from './ButtonDropDown';

interface ISortMenuProps {
    query: IQuery;
}

const SortMenu: FC<ISortMenuProps> = ({ query }) => {
    return (
        <div
            className="btn-group"
            role="group"
            aria-label="Button group with nested dropdown"
        >
            <div className="btn-group" role="group">
                <ButtonDropDown
                    items={genresList}
                    genre={true}
                    query={query}
                    color="dark"
                    buttonText="Genret"
                />
                <ButtonDropDown
                    items={sortList}
                    query={query}
                    color="dark"
                    buttonText="Suodatus"
                />
            </div>
        </div>
    );
};

export default SortMenu;
