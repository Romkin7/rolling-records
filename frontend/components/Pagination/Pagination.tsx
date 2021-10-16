import React, { FC } from 'react';
import { IPagination } from '../../../@types';
import styles from './Pagination.module.scss';
import PaginationItem from './PaginationItem';

interface IPaginationProps {
    pagination: IPagination;
}

const Pagination: FC<IPaginationProps> = ({ pagination }) => {
    return (
        <nav aria-label="Page navigation example">
            <ul className={`pagination pagination-lg ${styles.pagination}`}>
                {pagination.visiblePages.length &&
                    pagination.visiblePages.map((page: number) => {
                        return (
                            <PaginationItem
                                key={page}
                                active={pagination.currentPage === page}
                                pathName="/lp:t"
                                page={page}
                            >
                                {page}
                            </PaginationItem>
                        );
                    })}
            </ul>
        </nav>
    );
};

export default Pagination;
