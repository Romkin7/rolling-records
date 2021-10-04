import Link from 'next/link';
import React, { FC } from 'react';
import { IBreadcrumbItem } from '../../types';
import styles from './BreadCrumb.module.scss';

interface IBreadcrumbProps {
    breadCrumbItems: IBreadcrumbItem[];
}

const BreadCrumb: FC<IBreadcrumbProps> = ({ breadCrumbItems }) => {
    return (
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                {breadCrumbItems.length &&
                    breadCrumbItems.map((breadCrumbItem: IBreadcrumbItem) => {
                        return (
                            <li
                                key={breadCrumbItem.id}
                                className={`${breadCrumbItem.className}  ${
                                    breadCrumbItem.active ? 'active' : ''
                                }`}
                                aria-current={breadCrumbItem.ariaCurrent}
                            >
                                {breadCrumbItem.active ? (
                                    <>{breadCrumbItem.text}</>
                                ) : (
                                    <Link href={breadCrumbItem.href}>
                                        <a className={styles.a}>
                                            {breadCrumbItem.text}
                                        </a>
                                    </Link>
                                )}
                            </li>
                        );
                    })}
            </ol>
        </nav>
    );
};

export default BreadCrumb;
