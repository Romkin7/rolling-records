import Link from 'next/link';
import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { AppState } from '../../store/store';
import { INavbarItem, INavbarMenuItem } from '../../types';
import Dropdown from '../DropDown/DropDown';
import styles from './Header.module.scss';

interface IHeaderMenuItemProps {
    navbarMenuItem: INavbarMenuItem;
}

const HeaderMenuItem: FC<IHeaderMenuItemProps> = ({ navbarMenuItem }) => {
    const { user } = useSelector((state: AppState) => state.currentUser);
    return (
        <>
            {navbarMenuItem.logo ? (
                <Link href={navbarMenuItem.href}>
                    <a className={`${styles.link} ${navbarMenuItem.className}`}>
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
                                <li
                                    key={item.id}
                                    className={`${styles.link} ${item.className}`}
                                >
                                    {item.isWholesale && user.isWholesale ? (
                                        <Link href={item.href}>
                                            <a
                                                className={
                                                    item.className2 +
                                                    ' ' +
                                                    styles.link
                                                }
                                            >
                                                {item.text}
                                            </a>
                                        </Link>
                                    ) : item.isDropdown ? (
                                        <Dropdown item={item} />
                                    ) : !item.isWholesale ? (
                                        <Link href={item.href}>
                                            <a
                                                className={
                                                    item.className2 +
                                                    ' ' +
                                                    styles.link
                                                }
                                            >
                                                {item.text}
                                            </a>
                                        </Link>
                                    ) : (
                                        <></>
                                    )}
                                </li>
                            );
                        })}
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
