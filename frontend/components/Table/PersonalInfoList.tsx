import React, { FC } from 'react';
import { ICustomer, IUser } from '../../../@types';
import Button from '../Button/Button';

interface IPersonalInfoListProps {
    customer?: ICustomer;
    user?: IUser;
    handleClick: (editUserInfo: boolean) => void;
}

const PersonalInfoList: FC<IPersonalInfoListProps> = ({
    customer,
    user,
    handleClick,
}) => {
    return (
        <blockquote>
            <p>
                <strong>Nimi- ja yhteystiedot</strong>
            </p>
            <p>
                Nimi:{' '}
                {user
                    ? user.name.firstname + ' ' + user.name.lastname
                    : customer.firstname + ' ' + customer.lastname}
            </p>
            <p>Email: {user ? user.email : customer.email}</p>
            <p>
                Puhelinnumero:{' '}
                {user ? user.mobileNumber : customer.mobileNumber}
            </p>
            <p>
                <strong>Osoitetiedot</strong>
            </p>
            <p>
                Katuosoite:{' '}
                {user ? user.completeAddress.address : customer.street}
            </p>
            <p>
                Postinumero:{' '}
                {user ? user.completeAddress.zipcode : customer.zipcode}
            </p>
            <p>Kaupunki: {user ? user.completeAddress.city : customer.city}</p>
            <p>Maa: {user ? user.completeAddress.country : customer.country}</p>
            <Button type="button" color="warning" handleClick={handleClick}>
                Muokkaa
            </Button>
        </blockquote>
    );
};

export default PersonalInfoList;
