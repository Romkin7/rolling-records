import Link from 'next/link';
import React, { FC } from 'react';
import { Icons } from '../../types';
import Icon from '../Icon/Icon';
import { useSelector } from 'react-redux';
import styles from './Sidebar.module.scss';
import { AppState } from '../../store/store';

interface ISidebarMenuItemProps {
    activeId: number;
    id: number;
    icon: Icons;
    handleClick: (event: MouseEvent, id: number) => void;
}

const SideBarMenuItem: FC<ISidebarMenuItemProps> = ({
    children,
    id,
    icon,
    activeId,
    handleClick,
}) => {
    const { user } = useSelector((state: AppState) => state.currentUser);
    return (
        <li onClick={() => handleClick} tabIndex={1} className="nav-item">
            <Link
                href={`/profiili/${String(
                    user.username,
                ).toLowerCase()}/${String(children).toLowerCase()}`}
            >
                <a
                    className={`nav-link ${activeId === id ? 'active' : ''} ${
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
