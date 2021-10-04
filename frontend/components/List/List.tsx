import React, { FC } from 'react';
import { IAddress, IOrder } from '../../../@types';
import { IListItem, ListGroupTypes } from '../../types';
import ListItem from './ListItem';

interface IListProps {
    listType?: ListGroupTypes;
    listItems?: IListItem[];
    address?: IAddress;
    name?: any;
}

const List: FC<IListProps> = ({ listItems, listType, address, name }) => {
    return (
        <ul className={`list-group list-group-${listType}`}>
            {listItems &&
                listItems.length &&
                listItems.map((listItem: IListItem) => {
                    return <ListItem key={listItem.id} listItem={listItem} />;
                })}
            {address && (
                <>
                    <ListItem
                        listItem={{
                            id: 1,
                            text: `Etu- ja Sukunimi: ${name.firstname} ${name.lastname}`,
                        }}
                    />
                    <ListItem
                        listItem={{
                            id: 1,
                            text: `Katuosoite: ${address.address}`,
                        }}
                    />
                    <ListItem
                        listItem={{
                            id: 1,
                            text: `Postinumero: ${address.zipcode}`,
                        }}
                    />
                    <ListItem
                        listItem={{ id: 1, text: `Kaupunki: ${address.city}` }}
                    />
                    <ListItem
                        listItem={{ id: 1, text: `Maa: ${address.country}` }}
                    />
                </>
            )}
        </ul>
    );
};

export default List;
