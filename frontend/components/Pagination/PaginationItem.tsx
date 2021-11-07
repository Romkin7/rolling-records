import Link from 'next/link';
import React, { FC } from 'react';
import { IQuery } from '../../../@types';
import styles from './Pagination.module.scss';

interface IPaginationItemProps {
    pathName: string;
    active: boolean;
    page: number;
    query: IQuery;
}

const PaginationItem: FC<IPaginationItemProps> = ({
    active,
    query,
    page,
    pathName,
    children,
}) => {
    return (
        <li className={`page-item ${styles.item}`}>
            <Link href={{ pathname: pathName, query: { ...query, page } }}>
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
