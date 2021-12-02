import Link from 'next/link';
import React, { FC } from 'react';
import styles from './ButtonLink.module.scss';

interface IButtonLinkProps {
    href: string;
    color?: string;
}

const ButtonLink: FC<IButtonLinkProps> = ({ children, href, color }) => {
    return (
        <Link href={href}>
            <a className={`${styles.buttonLink} ${styles[color]}`}>
                {children}
            </a>
        </Link>
    );
};

export default ButtonLink;
