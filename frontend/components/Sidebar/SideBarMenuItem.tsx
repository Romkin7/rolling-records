import React, { FC } from 'react';
import styles from './Sidebar.module.scss';

interface ISidebarMenuItemProps {
    activeId: number;
    id: number;
    handleClick: (event: MouseEvent, id: number) => void;
}

const SideBarMenuItem: FC<ISidebarMenuItemProps> = ({
    children,
    id,
    activeId,
    handleClick,
}) => {
    return (
        <li onClick={() => handleClick} tabIndex={1} className="nav-item">
            <span
                tabIndex={1}
                className={`nav-link ${activeId === id ? 'active' : ''} ${
                    styles.link
                }`}
            >
                {children}
            </span>
        </li>
    );
};

export default SideBarMenuItem;
