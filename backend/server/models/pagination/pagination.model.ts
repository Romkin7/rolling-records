import { IPagination } from '../../../../@types';
import { setVisiblePages } from '../../utils';

export class Pagination implements IPagination {
    public currentPage: number;
    public perPage: number;
    public totalPage: number;
    public totalCount: number;
    public totalPages: number;
    public first: number;
    public last: number;
    public visiblePages: number[];
    constructor(data: any, totalCount: number, perPage: number) {
        this.currentPage = data && data.page ? parseInt(data.page) : 1;
        this.perPage = perPage || 28;
        this.totalCount = totalCount;
        this.totalPages = Math.ceil(totalCount / this.perPage);
        this.first = 1;
        this.last = this.totalPages;

        this.visiblePages = setVisiblePages(this.currentPage, this.totalPages);
    }
}
