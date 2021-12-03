import { ISortQuery } from '../../../../@types';

export class SortQuery implements ISortQuery {
    public title?: number;
    public unit_price?: number;
    public releasedate?: number;
    public createdAt: number;
    constructor(data: any) {
        this.title = data && data.title ? Number(data.title) : undefined;
        this.unit_price =
            data && data.unit_price ? Number(data.unit_price) : undefined;
        this.releasedate =
            data && Number(data.releasedate)
                ? Number(data.releasedate)
                : undefined;
        this.createdAt = data && data.createdAt ? Number(data.createdAt) : -1;
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
