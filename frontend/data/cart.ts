import { IFormField, ITFootSettings } from '../types';

export interface ICartItemHeader {
    id: number;
    value: string;
}
export const cartHeaderItems: ICartItemHeader[] = [
    {
        id: 1,
        value: 'Tuote',
    },
    {
        id: 2,
        value: 'Formaatti',
    },
    {
        id: 3,
        value: 'Hinta (€)',
    },
    {
        id: 4,
        value: 'Määrä (kpl)',
    },
    {
        id: 5,
        value: 'Yhteensä (€)',
    },
];

export const cartTotalsItems: ICartItemHeader[] = [
    {
        id: 10,
        value: 'Ostoskori yhteensä',
    },
    {
        id: 11,
        value: 'Kokonaismäärä (kpl)',
    },
    {
        id: 12,
        value: 'Veroton hinta (€)',
    },
    {
        id: 13,
        value: 'Alv 24%',
    },
    {
        id: 14,
        value: 'Hinta sis. Alv 24%',
    },
];

export const tFootSettings: ITFootSettings[] = [
    {
        nextHref: '/ostoskori/kassa',
        nextLinkText: 'Kassalle',
        prevHref: '/lp:t',
        prevLinkText: 'Kauppaan',
    },
    {
        nextHref: '/ostoskori/kassa/maksu',
        nextLinkText: 'Maksa',
        prevHref: '/ostoskori/kassa',
        prevLinkText: 'Kassalle',
    },
];
