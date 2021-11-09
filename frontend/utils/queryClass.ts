import {
    Categories,
    Genres,
    IQuery,
    ProductTypes,
    Statuses,
} from '../../@types';

export class QueryReq implements IQuery {
    public title?: string;
    public genre?: Genres;
    public category: Categories;
    public page: number;
    public productType: ProductTypes;
    public createdAt?: number;
    public releasedate?: number;
    public unit_price?: number;
    public totalQuantity?: number;
    public search?: string;
    public status: Statuses;
    /** Constructor */
    public constructor(query: any) {
        this.category = query.category || 'Uudet';
        this.page = Number(query.page) || 1;
        this.productType = query.productType || 'lp';
        this.status = query.status || 'available';
        this.genre = query.genre || undefined;
        this.title = this.title || undefined;
        this.search = query.search || undefined;
        this.totalQuantity = query.totalQuantity || undefined;
        this.unit_price = query.unit_price || undefined;
        this.releasedate = query.releasedate || undefined;
        this.createdAt = query.createdAt || undefined;
    }
    /** Filter query */
    public filterQuery() {
        for (const key in this) {
            if (this[key] === undefined) {
                delete this[key];
            }
        }
        return this;
    }
    public dynamicKeyValue(data: any) {
        const key = Object.keys(data)[0];
        const value = Object.values(data)[0];
        this[key] = value;
        return this;
    } 
    /*Construct and return queryString*/
    public generateQueryString(data: IQuery): string {
        const queryString = Object.keys(data)
            .map((key) => key + '=' + data[key])
            .join('&');
        return `?${queryString}`;
    }
}
