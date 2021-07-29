import { IFormField, ILink } from '../types';

export const loginFormFields: IFormField[] = [
    {
        id: 'email',
        type: 'text',
        name: 'email',
        className: 'form-label',
        className2: 'form-control',
        label: 'Email *',
    },
    {
        id: 'password',
        type: 'password',
        name: 'password',
        className: 'form-label',
        className2: 'form-control',
        label: 'Salasana *',
    },
];

export const loginFormLinks: ILink[] = [
    {
        id: 2001,
        href: '/salasananpalautus',
        text: 'Salasana unohtunut?',
        className: 'link',
        linkText: 'Palauta salasana',
    },
    {
        id: 2002,
        href: '/rekisteroidy',
        text: 'Et ole vielä rekisteröitynyt?',
        className: 'link',
        linkText: 'rekisteröidy tästä',
    },
];

export const passwordRecoveryFormFields: IFormField[] = [
    {
        id: 'email',
        type: 'text',
        name: 'email',
        className: 'form-label',
        className2: 'form-control',
        label: 'Email *',
    },
];

export const passwordRecoveryFormLinks: ILink[] = [
    {
        id: 2001,
        href: '/kirjaudu',
        text: 'On jo tili?',
        className: 'link',
        linkText: 'Kirjaudu tästä',
    },
    {
        id: 2002,
        href: '/rekisteroidy',
        text: 'Et ole vielä rekisteröitynyt?',
        className: 'link',
        linkText: 'Rekisteröidy tästä',
    },
];
