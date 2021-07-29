import { IProductQuery } from '../types';

export const setVisiblePages = (current: number, total: number): number[] => {
    const visible_pages = [];
    // If we have less that 6 pages, then return just all pages
    if (total < 6) {
        for (let i = 1; i <= total; i++) {
            visible_pages.push(i);
        }
        return visible_pages;
    }
    // If we are on page 1, return the first 6 pages
    if (current === 1) return [1, 2, 3, 4, 5, 6];
    // If we are on the last 5 pages
    if (current + 5 > total) {
        let a = total;
        for (let i = 0; i < 6; i++) visible_pages.push(a--);
        return visible_pages.reverse();
    }
    // In this case we need to show the current, the one before it and 4 after it
    let a = current;
    visible_pages.push(a - 1);
    visible_pages.push(a);
    for (let i = 0; i < 4; i++) visible_pages.push(++a);
    return visible_pages;
};

// If you change this, change the pre save funtion in product schema too
export const setKeyWords = (query: IProductQuery): string[] => {
    return query.search
        .replace(/\&/g, 'and')
        .replace(/[\'\.\"]/g, '')
        .replace(
            /[\!\@\#\$\%\^\&\*\(\)\-\_\=\+\[\]\{\}\\\|\/\?\<\>\,\.\`\~\:\;\'\"]/g,
            ' ',
        )
        .replace(/\s\s+/g, ' ')
        .trim()
        .toLowerCase()
        .split(' ');
};

export const escapeRegex = (text: string): string => {
    return text.replace(/[-[\]{}()*+?,\\^$|#\s]/g, '\\$&');
};

/** SetTitle */
export const setTitle = (
    category: string,
    productType: string,
    genre: string | null,
    queryString: string,
    sub_genre: string | null,
    status: string | null,
): string => {
    let title = '';
    if (status === 'archived') {
        title = 'Arkisto';
    } else if (productType === 'cd' || productType === 'lp') {
        title = `Kaikki ${category} ${productType.toUpperCase()}:t`;
    } else if (productType === '7-Tuumaiset') {
        title = 'Kaikki 7 " levyt';
    } else if (productType === '12-Tuumaiset') {
        title = 'Kaikki 12 " levyt';
    } else if (productType === 'Kasetti') {
        title = `Kaikki ${genre ? genre : ''} ${
            category ? category : ''
        } Kasetit`;
    } else if (category === 'marketplace') {
        if (sub_genre) {
            title = `Kaikki ${sub_genre} Kauppapaikka tuotteet`;
        } else {
            title = `Kaikki Kauppapaikka tuotteet`;
        }
    } else if (category === 'Tarjoukset') {
        title = `Kaikki Tarjous LP:t`;
    } else if (
        category === 'Oheistarvikkeet' ||
        category === 'Lahjakortti' ||
        category === 'Kirjat'
    ) {
        title = `Kaikki ${category}`;
    } else if (genre) {
        title = `Kaikki ${genre} Lp:t`;
    } else if (queryString) {
        title = `Tuloksia hakusanalle "${queryString}"`;
    } else {
        title = 'Tuote haku';
    }

    if (queryString && genre) {
        title = `Tuloksia hakusanalle "${queryString}"`;
    }
    return title;
};
