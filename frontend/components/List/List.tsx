import React, { FC } from 'react';
import { IAddress, IUser } from '../../../@types';
import { IListItem, ListGroupTypes } from '../../types';
import ListItem from './ListItem';

interface IListProps {
    listType?: ListGroupTypes;
    productData?: any;
    listItems?: IListItem[];
    address?: IAddress;
    name?: any;
    user?: IUser;
    userInfo?: boolean;
}

const List: FC<IListProps> = ({
    productData,
    listItems,
    listType,
    address,
    name,
    user,
    userInfo,
}) => {
    return (
        <ul className={`list-group list-group-${listType}`}>
            {listItems &&
                listItems.length &&
                listItems.map((listItem: IListItem) => {
                    return <ListItem key={listItem.id} listItem={listItem} />;
                })}
            {productData &&
                Object.values(productData).length &&
                Object.values(productData).map((listItem: IListItem) => {
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
            {userInfo && (
                <>
                    <ListItem
                        listItem={{
                            id: 1,
                            text: `Etunimi: ${user.name.firstname}`,
                        }}
                    />
                    <ListItem
                        listItem={{
                            id: 2,
                            text: `Sukunimi: ${user.name.lastname}`,
                        }}
                    />
                    <ListItem
                        listItem={{
                            id: 3,
                            text: `Käyttäjätunnus: ${user.username}`,
                        }}
                    />
                    <ListItem
                        listItem={{ id: 4, text: `Email: ${user.email}` }}
                    />
                    <ListItem
                        listItem={{
                            id: 5,
                            text: `Puhelinnumero: ${user.mobileNumber}`,
                        }}
                    />
                    {user.marketplace_terms_verified && (
                        <>
                            <ListItem
                                listItem={{ id: 6, text: 'Kauppapaikka' }}
                            />
                            <ListItem
                                listItem={{
                                    id: 7,
                                    text: `Tilinumero: ${user.bank_account_number}`,
                                }}
                            />
                        </>
                    )}
                </>
            )}
        </ul>
    );
};

export default List;
