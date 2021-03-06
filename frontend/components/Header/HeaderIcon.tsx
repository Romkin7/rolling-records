import Link from 'next/link';
import React, { FC } from 'react';
import { Icons } from '../../types';
import Icon from '../Icon/Icon';

interface IHeaderIconProps {
    href: string;
    icon: Icons;
    userId?: string;
    itemsTotal?: number;
}

const HeaderIcon: FC<IHeaderIconProps> = ({
    href,
    icon,
    userId,
    itemsTotal,
}) => {
    return (
        <>
            {userId ? (
                <Link href="/profiili/[username]" as={`${href}/${userId}`}>
                    <a>
                        <Icon icon={icon} />
                    </a>
                </Link>
            ) : (
                <Link href={href}>
                    <a>
                        <Icon icon={icon} itemsTotal={itemsTotal} />
                    </a>
                </Link>
            )}
        </>
    );
};

export default HeaderIcon;
