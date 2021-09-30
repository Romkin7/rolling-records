import React, { FC, useState } from 'react';
import { IPublicUser } from '../../../@types';
import { sidebarMenuItems } from '../../data/sidebarMenuItems';
import { ISidebarMenuItem } from '../../types';
import SideBarMenuItem from './SideBarMenuItem';
import styles from './Sidebar.module.scss';

interface ISidebarProps {
    user: IPublicUser;
}

const Sidebar: FC<ISidebarProps> = ({ user }) => {
    const [activeId, setActiveId] = useState<number>(() => 10);

    const handleClick = (event: MouseEvent, id: number) => {
        event.stopPropagation();
        setActiveId(() => id);
    };
    return (
        <aside className={styles.sidebar}>
            <h4>Kirjautuneena: {user.username}</h4>
            <ul className="nav nav-tabs flex-column">
                {sidebarMenuItems.map((item: ISidebarMenuItem) => {
                    return (
                        <SideBarMenuItem
                            key={item.id}
                            id={item.id}
                            activeId={activeId}
                            handleClick={(event: MouseEvent) =>
                                handleClick(event, item.id)
                            }
                        >
                            {item.text}
                        </SideBarMenuItem>
                    );
                })}
            </ul>
        </aside>
    );
};

export default Sidebar;
