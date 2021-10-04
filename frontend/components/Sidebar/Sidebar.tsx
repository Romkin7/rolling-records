import React, { FC, useState } from 'react';
import { IPublicUser } from '../../../@types';
import { sidebarMenuItems } from '../../data/sidebarMenuItems';
import { ISidebarMenuItem } from '../../types';
import SideBarMenuItem from './SideBarMenuItem';
import styles from './Sidebar.module.scss';
import { useRouter } from 'next/router';

interface ISidebarProps {
    user: IPublicUser;
}

const Sidebar: FC<ISidebarProps> = ({ user }) => {
    const { pathname } = useRouter();
    const [activeId, setActiveId] = useState<string>(
        () => pathname.split('/')[3],
    );
    const handleClick = (event: MouseEvent, text: string) => {
        event.stopPropagation();
        setActiveId(() => text);
    };
    return (
        <aside className={styles.sidebar}>
            <div className={styles.sidebarHeader}>
                <h4>Kirjautuneena: {user.username}</h4>
            </div>
            <ul className="nav nav-tabs flex-column">
                {sidebarMenuItems.map((item: ISidebarMenuItem) => {
                    return (
                        <SideBarMenuItem
                            key={item.id}
                            text={item.text}
                            icon={item.icon}
                            activeId={activeId}
                            handleClick={handleClick}
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
