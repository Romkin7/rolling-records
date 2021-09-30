import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { INavbarMenuItem } from '../../types';
import SearchForm from '../SearchForm/SearchForm';
import HeaderIcon from './HeaderIcon';
import HeaderMenuItem from './HeaderMenuItem';
import {
    navbarMenuItemsTop,
    navbarMenuItemsBottom,
} from '../../data/headerMenuItems';
import { AppState } from '../../store/store';

const Header: FC = () => {
    const { isAuthenticated, user } = useSelector(
        (state: AppState) => state.currentUser,
    );

    return (
        <header className="header">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark flex-column">
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
                        <HeaderIcon href="/ostoskori" icon="Cart" />
                        {!isAuthenticated ? (
                            <>
                                <HeaderIcon href="/kirjaudu" icon="Login" />
                                <HeaderIcon
                                    href="/rekisteroidy"
                                    icon="Signup"
                                />
                            </>
                        ) : (
                            <>
                                <HeaderIcon
                                    href="/profiili"
                                    icon="Profile"
                                    userId={user._id}
                                />
                                <HeaderIcon
                                    href="/kirjaudu-ulos"
                                    icon="Logout"
                                />
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
