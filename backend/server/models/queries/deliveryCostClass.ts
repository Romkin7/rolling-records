import { lists } from '../../data/lists';
import { DeliveryCostTypes, IDeliveryCostQuery } from '../../types';

export class DeliveryCostQuery implements IDeliveryCostQuery {
    public name: string[] | { $in: string[] };
    public campaign: boolean | { $in: [true, false] };
    public unit_price?: number;
    public format?: DeliveryCostTypes;
    public range?: { $in: number[] } | [1, 2];
    public $or?: any;
    constructor(data: any) {
        this.name =
            data.country === 'Finland' && data.formats.includes('lp')
                ? { $in: ['Postipaketti LP', 'Nouto myymälästä'] }
                : data.country === 'Finland' &&
                  data.formats.includes('cd') &&
                  data.range < 3
                ? { $in: ['Postipaketti CD', 'Nouto myymälästä'] }
                : data.country === 'Finland' &&
                  data.formats.includes('cd') &&
                  data.range >= 3
                ? { $in: ['Postipaketti LP', 'Nouto myymälästä'] }
                : undefined;
        this.campaign =
            data.campaign === true
                ? { $in: [true, false] }
                : data.campaign === false
                ? false
                : undefined;
        this.unit_price =
            data.country === 'Finland' && data.campaign ? 0 : undefined; // Boolen: true/false, can be only queried if country is Finland
        this.format =
            data.country === 'Finland'
                ? undefined
                : data.formats.includes('lp')
                ? 'lp'
                : 'cd';
        this.range =
            data.country !== 'Finland' && data.range < 3 && this.format === 'cd'
                ? [1, 2]
                : this.format !== 'cd' && data.country !== 'Finland'
                ? { $in: [data.range] }
                : undefined;
        this.$or =
            data.country && data.country !== 'Finland'
                ? [
                      {
                          countries: {
                              $all: [
                                  lists.countries.includes(data.country)
                                      ? data.country
                                      : 'World',
                              ],
                          },
                      },
                  ]
                : undefined;
    }
    filterQuery() {
        for (const key in this) {
            if (this[key] === undefined) {
                delete this[key];
            }
        }
        return this;
    }
}
// marketingCampaign zero deliverycosts => formats cd, lp, 7', country: Finland, range: 1, 10
// pick from storezero deliverycosts => formats cd, lp, 7', country: Finland, range: 1, 10

// if Finland use country, range
