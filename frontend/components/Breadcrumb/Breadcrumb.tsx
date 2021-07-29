import React, { FC } from 'react';
import { IBreadcrumbItem } from '../../types';

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
                                    <a href={breadCrumbItem.href}>
                                        {breadCrumbItem.text}
                                    </a>
                                )}
                            </li>
                        );
                    })}
            </ol>
        </nav>
    );
};

export default BreadCrumb;
