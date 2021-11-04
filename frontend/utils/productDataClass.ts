import {
    Categories,
    ConditionTypes,
    Genres,
    IPublicProduct,
    IPublicUser,
    IStore,
    ProductTypes,
} from '../../@types';
import { setPriceTag } from './utils';

interface IPublicProductClass {
    id: string;
    text:
        | string
        | number
        | Genres
        | Categories
        | ConditionTypes
        | ProductTypes
        | IPublicUser
        | IStore;
}

export class PublicProduct {
    public title: IPublicProductClass;
    public name: IPublicProductClass;
    public unit_price: IPublicProductClass;
    public discountedPrice: IPublicProductClass;
    public year: IPublicProductClass;
    public releasedate: IPublicProductClass;
    public productType: IPublicProductClass;
    public format: IPublicProductClass;
    public owner: IPublicProductClass | null;
    public category: IPublicProductClass;
    public product_info: IPublicProductClass;
    public edition: IPublicProductClass;
    public genre: IPublicProductClass;
    public label: IPublicProductClass;
    public stores: IPublicProductClass;
    public rating: IPublicProductClass;
    public conditionDisk: IPublicProductClass;
    public conditionCovers: IPublicProductClass;
    public description: IPublicProductClass;
    public additional_info: IPublicProductClass;
    /** Constructor of Product Data, for public product */
    public constructor(data: IPublicProduct) {
        this.title = data.title
            ? { id: 'Artisti', text: 'Artisti: ' + data.title }
            : undefined;
        this.name = data.name
            ? { id: 'Albumi', text: 'Albumi: ' + data.name }
            : undefined;
        this.unit_price = data.unit_price
            ? { id: 'Hinta', text: 'Hinta: ' + setPriceTag(data.unit_price) }
            : undefined;
        this.discountedPrice = data.discountedPrice
            ? {
                  id: 'Alennettu hinta',
                  text: 'Alennettu hinta: ' + setPriceTag(data.discountedPrice),
              }
            : undefined;
        this.year = data.year
            ? { id: 'Vuosi', text: 'Vuosi: ' + data.year }
            : undefined;
        this.releasedate = data.releasedate
            ? {
                  id: 'Julkaisupäivä',
                  text:
                      'Julkaisupäivä: ' +
                      new Date(data.releasedate).toLocaleDateString('fi'),
              }
            : undefined;
        this.productType = data.productType
            ? { id: 'Tuotetyyppi', text: 'Tuotetyyppi: ' + data.productType }
            : undefined;
        this.format = data.format
            ? { id: 'Formaatti', text: 'Formaatti: ' + data.format }
            : undefined;
        this.owner = data.owner
            ? { id: 'Omistaja', text: 'Omistaja: ' + data.owner.username }
            : undefined;
        this.category = data.category
            ? { id: 'Kategoria', text: 'Kategoria: ' + data.category }
            : undefined;
        this.product_info = data.product_info
            ? { id: 'Tuotetiedot', text: 'Tuotetiedot: ' + data.product_info }
            : undefined;
        this.edition = data.edition
            ? { id: 'Painos', text: 'Painos: ' + data.edition }
            : undefined;
        this.genre = data.genre
            ? { id: 'Genre', text: 'Genre: ' + data.genre }
            : undefined;
        this.label = data.label
            ? { id: 'Levy yhtiö', text: 'Levy yhtiö: ' + data.label }
            : undefined;
        this.stores =
            data.stores && data.category !== 'marketplace'
                ? {
                      id: 'Sijainti',
                      text: 'Sijainti: ' + data.stores[0].location,
                  }
                : undefined;
        this.rating = data.rating
            ? { id: 'Kokonaisarvio', text: 'Kokonaisarvio: ' + data.rating }
            : undefined;
        this.conditionDisk =
            data.conditionDisk && data.category === 'Käytetyt'
                ? {
                      id: 'Levyn kunto',
                      text: 'Levyn kunto: ' + data.conditionDisk,
                  }
                : undefined;
        this.conditionCovers =
            data.conditionCovers && data.category === 'Käytetyt'
                ? {
                      id: 'Kansien kunto',
                      text: 'Kansien kunto: ' + data.conditionCovers,
                  }
                : undefined;
        this.description = data.description
            ? { id: 'Kuvaus', text: 'Kuvaus: ' + data.description }
            : undefined;
        this.additional_info = data.additional_info
            ? {
                  id: 'Lisätiedot',
                  text: 'Lisätiedot: ' + data.additional_info,
              }
            : undefined;
    }
    /** filter method, to remove undefined values */
    public filterData(): this {
        for (const key in this) {
            if (this[key] === undefined) {
                delete this[key];
            }
        }
        return this;
    }
}
