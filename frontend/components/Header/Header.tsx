import React, { FC } from 'react';
import { INavbarMenuItem } from '../../types';
import SearchForm from '../SearchForm/SearchForm';
import HeaderIcon from './HeaderIcon';
import HeaderMenuItem from './HeaderMenuItem';
import {
    navbarMenuItemsTop,
    navbarMenuItemsBottom,
} from '../../utils/headerMenuItems';

const Header: FC = () => {
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
                        <HeaderIcon href="/kirjaudu" icon="Login" />
                        <HeaderIcon href="/rekisteroidy" icon="Signup" />
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
