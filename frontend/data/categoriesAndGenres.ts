import { Categories, Genres, ProductTypes } from '../../@types';

interface IGenreItem {
    name: string;
    value: Genres;
}
interface ICategoryItem {
    name: string;
    category: Categories;
    type: ProductTypes;
}
export const categoriesList: ICategoryItem[] = [
    { name: 'Uudet LP:t', category: 'Uudet', type: 'lp' },
    { name: 'Tilattavat LP:t', category: 'Tilattavat', type: 'lp' },
    { name: 'Tulevat LP:t', category: 'Tulevat', type: 'lp' },
    { name: 'Käytetyt LP:t', category: 'Käytetyt', type: 'lp' },
    { name: 'Tarjous LP:t', category: 'Tarjoukset', type: 'lp' },
    { name: 'Uudet CD:t', category: 'Uudet', type: 'cd' },
    { name: 'Tilattavat CD:t', category: 'Tilattavat', type: 'cd' },
    { name: 'Tulevat CD:t', category: 'Tulevat', type: 'cd' },
    { name: 'Käytetyt CD:t', category: 'Käytetyt', type: 'cd' },
    { name: 'Uudet Kasetit', category: 'Uudet', type: 'Kasetti' },
    { name: 'Tulevat Kasetit', category: 'Tulevat', type: 'Kasetti' },
    { name: 'Käytetyt Kasetit', category: 'Käytetyt', type: 'Kasetti' },
    { name: 'Uudet 7"', category: 'Uudet', type: '7-Tuumaiset' },
    { name: 'Tilattavat 7"', category: 'Tilattavat', type: '7-Tuumaiset' },
    { name: 'Tulevat 7"', category: 'Tulevat', type: '7-Tuumaiset' },
    { name: 'Käytetyt 7"', category: 'Käytetyt', type: '7-Tuumaiset' },
    { name: 'Uudet Kirjat', category: 'Uudet', type: 'Kirjat' },
    { name: 'Tulevat Kirjat', category: 'Tulevat', type: 'Kirjat' },
    { name: 'Lahjakortit', category: 'Lahjakortti', type: 'Lahjakortti' },
    { name: 'T-Paidat', category: 'T-Paidat', type: 'muut' },
    { name: 'Oheistarvikkeet', category: 'Oheistarvikkeet', type: 'muut' },
];

export const genresList: IGenreItem[] = [
    {
        name: 'Rock',
        value: 'Rock',
    },
    {
        name: 'Kotimainen',
        value: 'Kotimainen',
    },
    {
        name: 'Svart Records',
        value: 'Svart-records',
    },
    {
        name: 'Punk/ Hardcore',
        value: 'Punk-hardcore',
    },
    {
        name: 'Blues',
        value: 'Blues',
    },
    {
        name: 'Jazz',
        value: 'Jazz',
    },
    {
        name: 'Funk/ Soul',
        value: 'Funk-soul',
    },
    {
        name: 'Heavy/ Metal',
        value: 'Heavy-metal',
    },
    {
        name: 'Indie/ Alternative',
        value: 'Indie-alternative',
    },
    {
        name: 'Rock & Roll',
        value: 'Rock-roll',
    },
    {
        name: 'Hip Hop',
        value: 'HipHop',
    },
    {
        name: 'Electronic',
        value: 'Electronic',
    },
    {
        name: 'Folk & Country',
        value: 'Folk-country',
    },
    {
        name: 'Reggae',
        value: 'Reggae',
    },
    {
        name: 'Soundtrack',
        value: 'Soundtrack',
    },
];
