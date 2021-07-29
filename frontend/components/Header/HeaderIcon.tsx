import Link from 'next/link';
import React, { FC } from 'react';
import { Icons } from '../../types';
import Icon from '../Icon/Icon';

interface IHeaderIconProps {
    href: string;
    icon: Icons;
}

const HeaderIcon: FC<IHeaderIconProps> = ({ href, icon }) => {
    return (
        <Link href={href}>
            <a>
                <Icon icon={icon} />
            </a>
        </Link>
    );
};

export default HeaderIcon;
