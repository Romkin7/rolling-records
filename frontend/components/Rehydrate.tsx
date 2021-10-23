import jwtDecode from 'jwt-decode';
import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IPublicUser } from '../../@types';
import { fetchCart } from '../store/actions/cartActions';
import { fetchMarketingCampaigns } from '../store/actions/marketingCampaignActions';
import { addMessage } from '../store/actions/messageActions';
import {
    removeCurrentUser,
    setCurrentUser,
} from '../store/actions/userAuthActions';
import { AppState } from '../store/store';
import { AdminRole } from '../types';
import { resetCurrentUser } from '../utils/reset';
import { clearSession, isSessionValid } from '../utils/session';
import { validateUserRole } from '../utils/utils';
import FlashMessage from './FlashMessage/FlashMessage';
import Loading from './Loading/Loading';

const Rehydrate: FC = ({ children }) => {
    const loading = useSelector((state: AppState) => state.loading);
    const message = useSelector((state: AppState) => state.message);
    const dispatch = useDispatch();
    useEffect(() => {
        if (localStorage.token) {
            // prevent someone from manually tampering with the key of jwtToken in localStorage
            try {
                const sessionValid = isSessionValid();
                if (!!sessionValid) {
                    const token = localStorage.getItem('token');
                    if (token) {
                        const payload: IPublicUser = jwtDecode(token);
                        dispatch(
                            setCurrentUser({
                                user: payload,
                                isAuthenticated: true,
                                isAdmin: validateUserRole(
                                    payload.admin.premission_level as AdminRole,
                                ),
                            }),
                        );
                    }
                }
            } catch (e) {
                clearSession();
                removeCurrentUser(resetCurrentUser());
                addMessage({
                    text: 'Tietojasi on muutettu, tästä johtuen sinut on välittömästi kirjattu ulos.',
                    variant: 'warning',
                    icon: 'alert',
                    visible: true,
                });
            }
        }
        return () => {
            // cleanup
        };
    }, []);

    useEffect(() => {
        dispatch(fetchCart());
        dispatch(fetchMarketingCampaigns());
        return () => {};
    }, [dispatch]);
    return (
        <>
            {children}
            {message.message.visible && (
                <FlashMessage
                    text={message.message.text}
                    icon={message.message.icon}
                    variant={message.message.variant}
                />
            )}
            {loading.isLoading && <Loading />}
        </>
    );
};

export default Rehydrate;
