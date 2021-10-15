import React, { FC, useEffect } from 'react';
import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../sass/Main.module.scss';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import { Provider, useDispatch } from 'react-redux';
import store, { AppState } from '../store/store';
import Loading from './Loading/Loading';
import { useSelector } from 'react-redux';
import FlashMessage from './FlashMessage/FlashMessage';
import { clearSession, isSessionValid } from '../utils/session';
import jwtDecode from 'jwt-decode';
import { IPublicUser } from '../../@types';
import { validateUserRole } from '../utils/utils';
import { resetCurrentUser } from '../utils/reset';
import { AdminRole } from '../types';
import { addMessage } from '../store/actions/messageActions';
import {
    removeCurrentUser,
    setCurrentUser,
} from '../store/actions/userAuthActions';

interface ILayoutProps {
    title: string;
    content: string;
}

const Layout: FC<ILayoutProps> = ({ children, title, content }) => {
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
                        console.log(payload);
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
    return (
        <Provider store={store}>
            <Head>
                <title>{title}</title>
                <meta name="description" content={content} />
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
                <link
                    rel="andriod-chrome"
                    sizes="192x192"
                    href="/android-chrome-192x192.png"
                />
                <link
                    rel="andriod-chrome"
                    sizes="512x512"
                    href="/android-chrome-512x512.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/apple-touch-icon.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/favicon-16x16.png"
                />
                <link rel="icon" href="/favicon.ico" />
                <link rel="image_src" href="/images/logo.jpg" />
                <link rel="manifest" href="/site.webmanifest" />
                <meta name="theme-color" content="#ffffff" />
                <script src="https://www.google.com/recaptcha/api.js"></script>
            </Head>
            <div className={styles.body}>
                <Header />
                <main className={styles.main}>{children}</main>
                <Footer />
                {message.message.visible && (
                    <FlashMessage
                        text={message.message.text}
                        icon={message.message.icon}
                        variant={message.message.variant}
                    />
                )}
                {loading.isLoading && <Loading />}
            </div>
        </Provider>
    );
};

export default Layout;
