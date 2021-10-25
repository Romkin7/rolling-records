import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { AppState } from '../../store/store';
import Button from '../Button/Button';

interface IPersonalInfoListProps {
    handleClick: (editUserInfo: boolean) => void;
}

const PersonalInfoList: FC<IPersonalInfoListProps> = ({ handleClick }) => {
    const { customer } = useSelector((state: AppState) => state.cart);
    const currentUser = useSelector((state: AppState) => state.currentUser);
    const { user, isAuthenticated } = currentUser;
    return (
        <>
            {isAuthenticated || customer ? (
                <blockquote>
                    <p>
                        <strong>Nimi- ja yhteystiedot</strong>
                    </p>
                    <p>
                        Nimi:{' '}
                        {isAuthenticated
                            ? user.name.firstname + ' ' + user.name.lastname
                            : customer.firstname + ' ' + customer.lastname}
                    </p>
                    <p>
                        Email: {isAuthenticated ? user.email : customer.email}
                    </p>
                    <p>
                        Puhelinnumero:{' '}
                        {isAuthenticated
                            ? user.mobileNumber
                            : customer.mobileNumber}
                    </p>
                    <p>
                        <strong>Osoitetiedot</strong>
                    </p>
                    <p>
                        Katuosoite:{' '}
                        {isAuthenticated
                            ? user.completeAddress.address
                            : customer.street}
                    </p>
                    <p>
                        Postinumero:{' '}
                        {isAuthenticated
                            ? user.completeAddress.zipcode
                            : customer.zipcode}
                    </p>
                    <p>
                        Kaupunki:{' '}
                        {isAuthenticated
                            ? user.completeAddress.city
                            : customer.city}
                    </p>
                    <p>
                        Maa:{' '}
                        {isAuthenticated
                            ? user.completeAddress.country
                            : customer.country}
                    </p>
                    <Button
                        type="button"
                        color="warning"
                        handleClick={handleClick}
                    >
                        Muokkaa
                    </Button>
                </blockquote>
            ) : (
                <div></div>
            )}
        </>
    );
};

export default PersonalInfoList;
