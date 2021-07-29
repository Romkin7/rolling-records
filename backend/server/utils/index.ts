import { IProductQuery } from '../types';

export const setVisiblePages = (current: number, total: number): number[] => {
    let visible_pages = [];
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
export const setKeyWords = (query: IProductQuery) => {
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
