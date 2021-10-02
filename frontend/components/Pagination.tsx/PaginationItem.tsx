import Link from 'next/link';
import React, { FC } from 'react';
import styles from './Pagination.module.scss';

interface IPaginationItemProps {
    pathName: string;
    active: boolean;
    page: number;
}

const PaginationItem: FC<IPaginationItemProps> = ({
    active,
    page,
    pathName,
    children,
}) => {
    return (
        <li className={`page-item ${styles.item}`}>
            <Link
                href={{ pathname: pathName, query: { page } }}
            >
                <a
                    className={`${styles.link} page-link ${
                        active && styles.active
                    }`}
                >
                    {children}
                </a>
            </Link>
        </li>
    );
};

export default PaginationItem;
