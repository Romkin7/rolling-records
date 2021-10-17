export interface ICartItemHeader {
    id: number;
    value: string;
    colSpan: number;
}
export const cartHeaderItems: ICartItemHeader[] = [
    {
        id: 1,
        value: 'Tuote',
        colSpan: 5,
    },
    {
        id: 2,
        value: 'Genre',
        colSpan: 1,
    },
    {
        id: 3,
        value: 'Hinta (€)',
        colSpan: 1,
    },
    {
        id: 4,
        value: 'Määrä (kpl)',
        colSpan: 3,
    },
    {
        id: 5,
        value: 'Yhteensä (€)',
        colSpan: 2,
    },
];
