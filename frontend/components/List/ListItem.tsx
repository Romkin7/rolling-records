import React, { FC } from 'react';
import { IListItem } from '../../types';

interface IListItemProps {
    listItem: IListItem;
}

const ListItem: FC<IListItemProps> = ({ listItem }) => {
    return <li className="list-group-item">{listItem.text}</li>;
};

export default ListItem;
