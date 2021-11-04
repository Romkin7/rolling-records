import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { IPagination } from '../../../@types';
import { AppState } from '../../store/store';
import styles from './Pagination.module.scss';
import PaginationItem from './PaginationItem';

const Pagination: FC = () => {
    const pagination = useSelector((state: AppState) => state.pagination);
    const { visiblePages, currentPage } = pagination;
    return (
        <nav aria-label="Page navigation example">
            <ul className={`pagination pagination-lg ${styles.pagination}`}>
                {visiblePages.length &&
                    visiblePages.map((page: number) => {
                        return (
                            <PaginationItem
                                key={page}
                                active={currentPage === page}
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
