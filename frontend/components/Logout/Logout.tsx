import router from 'next/router';
import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/actions/userAuthActions';
import Icon from '../Icon/Icon';

const Logout = () => {
    const dispatch = useDispatch();
    const handleLogout = (event: any) => {
        event.preventDefault();
        dispatch(logout());
        router.push('/');
    };
    return (
        <a onClick={(event: any) => handleLogout(event)}>
            <Icon icon="logout" />
        </a>
    );
};

export default Logout;
