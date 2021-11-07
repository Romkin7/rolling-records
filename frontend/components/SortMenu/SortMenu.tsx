import React, { FC } from 'react';
import { genresList } from '../../data/categoriesAndGenres';
import ButtonDropDown from './ButtonDropDown';

interface ISortMenuProps {
    queryString: string;
}

const SortMenu: FC<ISortMenuProps> = ({ queryString }) => {
    return (
        <div
            className="btn-group"
            role="group"
            aria-label="Button group with nested dropdown"
        >
            <div className="btn-group" role="group">
                <ButtonDropDown
                    items={genresList}
                    queryString={queryString}
                    color="dark"
                    buttonText="Genret"
                />
            </div>
        </div>
    );
};

export default SortMenu;
