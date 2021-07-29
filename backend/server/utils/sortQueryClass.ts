import { ISortQuery } from '../types';

export class SortQuery implements ISortQuery {
    public title?: number;
    public unit_price?: number;
    public releasedate?: number;
    public createdAt: number;
    constructor(data) {
        this.title =
            data && data.SortByTitle ? Number(data.SortByTitle) : undefined;
        this.unit_price =
            data && data.SortByPrice ? Number(data.SortByPrice) : undefined;
        this.releasedate =
            data && Number(data.date) ? Number(data.date) : undefined;
        this.createdAt =
            data && data.SortByCreatedAt ? Number(data.SortByCreatedAt) : -1;
    }
    filterSortQuery() {
        for (const key in this) {
            if (this[key] === undefined) {
                delete this[key];
            }
        }
        return this;
    }
}
