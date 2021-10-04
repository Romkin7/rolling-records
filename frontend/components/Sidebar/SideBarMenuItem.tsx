import Link from 'next/link';
import React, { FC } from 'react';
import { Icons } from '../../types';
import Icon from '../Icon/Icon';
import { useSelector } from 'react-redux';
import styles from './Sidebar.module.scss';
import { AppState } from '../../store/store';

interface ISidebarMenuItemProps {
    activeId: string;
    text: string;
    icon: Icons;
    handleClick: (event: any, text: string) => void;
}

const SideBarMenuItem: FC<ISidebarMenuItemProps> = ({
    children,
    text,
    icon,
    activeId,
    handleClick,
}) => {
    const { user } = useSelector((state: AppState) => state.currentUser);
    return (
        <li
            onClick={(event: any) => handleClick(event, text)}
            tabIndex={1}
            className="nav-item"
        >
            <Link
                href={`/profiili/${String(
                    user.username,
                ).toLowerCase()}/${text}`}
            >
                <a
                    className={`nav-link ${activeId === text ? 'active' : ''} ${
                        styles.link
                    }`}
                >
                    <Icon icon={icon} />
                    {children}
                </a>
            </Link>
        </li>
    );
};

export default SideBarMenuItem;
