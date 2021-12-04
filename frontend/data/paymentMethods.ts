import { IPaymentMethod } from '../types';

export const paymentMethods: IPaymentMethod[] = [
    {
        name: 'paytrail',
        icon: 'paytrail',
        buttonText: 'Maksa Paytraililla',
        displayName: 'Paytrail',
    },
    {
        name: 'paypal',
        icon: 'paypal',
        buttonText: 'Maksa Paypalilla',
        displayName: 'Paypal',
    },
    {
        name: 'toStore',
        icon: 'marketplace',
        buttonText: 'Maksa nuotaessa',
        displayName: 'Maksu myymälään',
    },
];
