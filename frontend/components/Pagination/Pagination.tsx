import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { IQuery } from '../../../@types';
import { AppState } from '../../store/store';
import styles from './Pagination.module.scss';
import PaginationItem from './PaginationItem';

interface IPaginationProps {
    query: IQuery;
}

const Pagination: FC<IPaginationProps> = ({ query }) => {
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
                                page={page}
                                active={currentPage === page}
                                pathName="/lp:t"
                                query={query}
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
