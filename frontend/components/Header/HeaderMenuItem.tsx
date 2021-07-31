import Link from 'next/link';
import React, { FC } from 'react';
import { INavbarItem, INavbarMenuItem } from '../../types';
import Dropdown from '../DropDown/DropDown';
import styles from './Header.module.scss';

interface IHeaderMenuItemProps {
    navbarMenuItem: INavbarMenuItem;
}

const HeaderMenuItem: FC<IHeaderMenuItemProps> = ({ navbarMenuItem }) => {
    return (
        <>
            {navbarMenuItem.logo ? (
                <Link href={navbarMenuItem.href}>
                    <a className={navbarMenuItem.className}>
                        <img
                            className={styles.logo}
                            title={navbarMenuItem.text}
                            src={navbarMenuItem.logo.src}
                            alt={navbarMenuItem.logo.alt}
                        />
                    </a>
                </Link>
            ) : navbarMenuItem.isNavbar ? (
                <div
                    key={navbarMenuItem.id}
                    className={navbarMenuItem.className}
                >
                    <ul className={navbarMenuItem.className2}>
                        {navbarMenuItem.navbarItems.map((item: INavbarItem) => {
                            return (
                                <li key={item.id} className={item.className}>
                                    {item.isDropdown ? (
                                        <Dropdown item={item} />
                                    ) : (
                                        <Link href={item.href}>
                                            <a className={item.className2}>
                                                {item.text}
                                            </a>
                                        </Link>
                                    )}
                                </li>
                            );
                        })}
                        <li className="nav-item">Hello world</li>
                    </ul>
                </div>
            ) : navbarMenuItem.isIcon ? (
                <Link key={navbarMenuItem.id} href={navbarMenuItem.href}>
                    <a>
                        <i className={navbarMenuItem.className}></i>
                    </a>
                </Link>
            ) : (
                <Link key={navbarMenuItem.id} href={navbarMenuItem.href}>
                    {navbarMenuItem.text}
                </Link>
            )}
        </>
    );
};

export default HeaderMenuItem;
