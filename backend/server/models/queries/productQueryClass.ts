/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Genres, IProductQuery, Statuses } from '../../../../@types';
import { setKeyWords } from '../../utils';

export class ProductQuery implements IProductQuery {
    public search?: string;
    public category: string | string[];
    public genre?: Genres;
    public status: Statuses;
    public productType: string | string[];
    public total_quantity?: number;
    public isWholesale?: boolean;
    public $or?:
        | RegExp
        | [
              { keywords: { $all: string[] } },
              { fullname: RegExp },
              { title: RegExp },
              { name: RegExp },
              { label: RegExp },
              { ean: RegExp },
          ];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    constructor(data: any, queryString: RegExp, admin: boolean) {
        this.category =
            data && data.search
                ? [
                      'Uudet',
                      'Tilattavat',
                      'Käytetyt',
                      'Tulevat',
                      'Tarjoukset',
                      'Oheistarvikkeet',
                      'Lahjakortti',
                      'T-Paidat',
                      'marketplace',
                  ]
                : data && data.category === 'Uudet'
                ? ['Uudet', 'Tilattavat']
                : data &&
                  data.category &&
                  data.category !== '7-Tuumaiset' &&
                  data.category !== 'Kasetti'
                ? data.category
                : admin
                ? [
                      'Uudet',
                      'Tilattavat',
                      'Käytetyt',
                      'Tulevat',
                      'Tarjoukset',
                      'Oheistarvikkeet',
                      'Lahjakortti',
                      '7-Tuumaiset',
                      'T-Paidat',
                      'Kasetti',
                  ]
                : ['Uudet', 'Tilattavat'];
        this.genre = (data && data.genre) || undefined;
        this.status = (data && data.status) || 'available';
        this.productType = data.search
            ? [
                  'lp',
                  'cd',
                  '7-Tuumaiset',
                  '12-Tuumaiset',
                  'Kasetti',
                  'muut',
                  'Kirjat',
                  'T-Paidat',
                  'Lahjakortti',
              ]
            : data && data.productType
            ? data.productType
            : data.category !== 'marketplace'
            ? 'lp'
            : undefined;
        this.total_quantity =
            data && data.Quantity ? Number(data.Quantity) : undefined;
        this.isWholesale = data.isWholesale === 'true' ? true : undefined;
        this.$or = queryString
            ? [
                  { keywords: { $all: setKeyWords(data) } },
                  { fullname: queryString },
                  { title: queryString },
                  { name: queryString },
                  { label: queryString },
                  { ean: queryString },
              ]
            : undefined;
    }
    filterQuery(): this {
        for (const key in this) {
            if (this[key] === undefined) {
                delete this[key];
            }
        }
        return this;
    }
}
