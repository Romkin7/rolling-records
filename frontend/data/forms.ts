import {
    IFormField,
    ILink,
    IResetPasswordFormFields,
    ISignUpFormFields,
} from '../types';
import { lists } from './lists';

export const signUpFormFields: ISignUpFormFields = {
    partOne: [
        {
            id: 'username',
            type: 'text',
            name: 'username',
            label: 'Käyttäjätunnus *',
            required: true,
        },
        {
            id: 'firstname',
            type: 'text',
            name: 'firstname',
            label: 'Etunimi *',
            required: true,
        },
        {
            id: 'lastname',
            type: 'text',
            name: 'lastname',
            label: 'Sukunimi *',
            required: true,
        },
        {
            id: 'mobileNumber',
            type: 'tel',
            name: 'mobileNumber',
            label: 'Puhelinnumero *',
            required: true,
        },
    ],
    partTwo: [
        {
            id: 'address',
            type: 'text',
            name: 'address',
            label: 'Kotiosoite *',
            required: true,
        },
        {
            id: 'zipcode',
            type: 'text',
            name: 'zipcode',
            label: 'Postinumero *',
            required: true,
        },
        {
            id: 'city',
            type: 'text',
            name: 'city',
            label: 'Kaupunki *',
            required: true,
        },
        {
            id: 'country',
            type: 'select',
            name: 'country',
            label: 'Maa *',
            required: true,
            options: lists.countries,
        },
    ],
    partThree: [
        {
            id: 'email',
            type: 'email',
            name: 'email',
            label: 'Sähköposti *',
            required: true,
        },
        {
            id: 'confirmEmail',
            type: 'email',
            name: 'confirmEmail',
            label: 'Vahvista Sähköposti *',
            required: true,
        },
        {
            id: 'password',
            type: 'password',
            name: 'password',
            label: 'Salasana *',
            required: true,
        },
        {
            id: 'confirmPassword',
            type: 'password',
            name: 'confirmPassword',
            label: 'Vahvista Salasana *',
            required: true,
        },
    ],
    partFour: [
        {
            id: 'terms',
            type: 'checkbox',
            name: 'terms',
            label: 'Sitoudun noudattamaan RollingRecords verkkokaupan käyttöehtoja.',
            required: true,
        },
        {
            id: 'newsletter',
            type: 'checkbox',
            name: 'newsletter',
            label: 'Tilaan uutiskirjeen.',
            required: false,
        },
    ],
};

export const signUpFormLinks: ILink[] = [
    {
        id: 2001,
        href: '/kirjaudu',
        text: 'On jo tili?',
        className: 'link',
        linkText: 'Kirjaudu sisään',
    },
    {
        id: 2002,
        href: '/salasananpalautus',
        text: 'Salasana unohtunut?',
        className: 'link',
        linkText: 'Palauta salasana',
    },
];

export const loginFormFields: IFormField[] = [
    {
        id: 'email',
        type: 'text',
        name: 'email',
        label: 'Email *',
    },
    {
        id: 'password',
        type: 'password',
        name: 'password',
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

export const passwordRecoveryFormFields: IResetPasswordFormFields = {
    partOne: [
        {
            id: 'email',
            type: 'text',
            name: 'email',
            label: 'Email *',
            required: true,
            errorText: 'Syöttäkää sähköposti, joka on rekisteröity tilillenne.',
        },
    ],
    partTwo: [
        {
            id: 'pincode',
            type: 'number',
            name: 'pincode',
            label: 'Pinkoodi *',
            required: true,
            errorText:
                'Syöttäkää yllä olevaan kenttäään pinkoodi, joka on lähetetty antamaannee sähköposti osoitteeseen.',
        },
    ],
    partThree: [
        {
            id: 'password',
            type: 'password',
            name: 'password',
            label: 'Salasana *',
            required: true,
        },
        {
            id: 'confirmPassword',
            type: 'password',
            name: 'confirmPassword',
            label: 'Vahvista Salasana *',
            required: true,
        },
    ],
};

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
