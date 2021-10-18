import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { INavbarMenuItem } from '../../types';
import SearchForm from '../SearchForm/SearchForm';
import HeaderIcon from './HeaderIcon';
import HeaderMenuItem from './HeaderMenuItem';
import styles from './Header.module.scss';
import {
    navbarMenuItemsTop,
    navbarMenuItemsBottom,
} from '../../data/headerMenuItems';
import { AppState } from '../../store/store';
import Logout from '../Logout/Logout';

const Header: FC = () => {
    const { isAuthenticated, user } = useSelector(
        (state: AppState) => state.currentUser,
    );
    const cart = useSelector((state: AppState) => state.cart);
    return (
        <header className={styles.header}>
            <nav
                className={`navbar navbar-expand-lg navbar-dark flex-column fixed-top ${styles.navbar}`}
            >
                <div className="container-fluid">
                    {navbarMenuItemsTop.length &&
                        navbarMenuItemsTop.map(
                            (navbarMenuItemFirst: INavbarMenuItem) => {
                                return (
                                    <HeaderMenuItem
                                        key={navbarMenuItemFirst.id}
                                        navbarMenuItem={navbarMenuItemFirst}
                                    />
                                );
                            },
                        )}
                    <div className="d-flex">
                        <SearchForm />
                        <HeaderIcon
                            href="/ostoskori"
                            icon="cart"
                            itemsTotal={cart.totalQuantity}
                        />
                        {!isAuthenticated ? (
                            <>
                                <HeaderIcon href="/kirjaudu" icon="login" />
                                <HeaderIcon
                                    href="/rekisteroidy"
                                    icon="signup"
                                />
                            </>
                        ) : (
                            <>
                                <HeaderIcon
                                    href="/profiili"
                                    icon="profile"
                                    userId={String(user.username).toLowerCase()}
                                />
                                <Logout />
                            </>
                        )}
                    </div>
                </div>
                <div className="container-fluid">
                    {navbarMenuItemsBottom.length &&
                        navbarMenuItemsBottom.map(
                            (navbarMenuItem: INavbarMenuItem) => {
                                return (
                                    <HeaderMenuItem
                                        key={navbarMenuItem.id}
                                        navbarMenuItem={navbarMenuItem}
                                    />
                                );
                            },
                        )}
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                        Menu
                    </button>
                </div>
            </nav>
        </header>
    );
};

export default Header;
