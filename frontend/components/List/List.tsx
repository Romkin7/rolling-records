import React, { FC } from 'react';
import { IListItem } from '../../types';
import ListItem from './ListItem';

interface IListProps {
    listItems: IListItem[];
}

const List: FC<IListProps> = ({ listItems }) => {
    return (
        <ul className="list-group list-group-flush">
            {listItems.length &&
                listItems.map((listItem: IListItem) => {
                    return <ListItem key={listItem.id} listItem={listItem} />;
                })}
        </ul>
    );
};

export default List;
