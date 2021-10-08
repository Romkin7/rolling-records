import {
    IFormField,
    ILink,
    IResetPasswordFormFields,
    ISignUpFormFields,
} from '../types';

export const signUpFormFields: ISignUpFormFields = {
    partOne: [
        {
            id: 'username',
            type: 'text',
            name: 'username',
            className: 'form-label',
            className2: 'form-control',
            label: 'Käyttäjätunnus *',
            required: true,
        },
        {
            id: 'firstname',
            type: 'text',
            name: 'firstname',
            className: 'form-label',
            className2: 'form-control',
            label: 'Etunimi *',
            required: true,
        },
        {
            id: 'lastname',
            type: 'text',
            name: 'lastname',
            className: 'form-label',
            className2: 'form-control',
            label: 'Sukunimi *',
            required: true,
        },
        {
            id: 'mobileNumber',
            type: 'tel',
            name: 'mobileNumber',
            className: 'form-label',
            className2: 'form-control',
            label: 'Puhelinnumero *',
            required: true,
        },
    ],
    partTwo: [
        {
            id: 'address',
            type: 'text',
            name: 'address',
            className: 'form-label',
            className2: 'form-control',
            label: 'Kotiosoite *',
            required: true,
        },
        {
            id: 'zipcode',
            type: 'text',
            name: 'zipcode',
            className: 'form-label',
            className2: 'form-control',
            label: 'Postinumero *',
            required: true,
        },
        {
            id: 'city',
            type: 'text',
            name: 'city',
            className: 'form-label',
            className2: 'form-control',
            label: 'Kaupunki *',
            required: true,
        },
    ],
    partThree: [
        {
            id: 'email',
            type: 'email',
            name: 'email',
            className: 'form-label',
            className2: 'form-control',
            label: 'Sähköposti *',
            required: true,
        },
        {
            id: 'confirmEmail',
            type: 'email',
            name: 'confirmEmail',
            className: 'form-label',
            className2: 'form-control',
            label: 'Vahvista Sähköposti *',
            required: true,
        },
        {
            id: 'password',
            type: 'password',
            name: 'password',
            className: 'form-label',
            className2: 'form-control',
            label: 'Salasana *',
            required: true,
        },
        {
            id: 'confirmPassword',
            type: 'password',
            name: 'confirmPassword',
            className: 'form-label',
            className2: 'form-control',
            label: 'Vahvista Salasana *',
            required: true,
        },
    ],
};

export const signUpFormLinks: ILink[] = [
    {
        id: 2001,
        href: '/kirjaudu',
        text: 'on jo tili?',
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

export const passwordRecoveryFormFields: IResetPasswordFormFields = {
    partOne: [
        {
            id: 'email',
            type: 'text',
            name: 'email',
            className: 'form-label',
            className2: 'form-control',
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
            className: 'form-label',
            className2: 'form-control',
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
            className: 'form-label',
            className2: 'form-control',
            label: 'Salasana *',
            required: true,
        },
        {
            id: 'confirmPassword',
            type: 'password',
            name: 'confirmPassword',
            className: 'form-label',
            className2: 'form-control',
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
