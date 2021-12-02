import { IPaymentMethod } from '../types';

export const paymentMethods: IPaymentMethod[] = [
    {
        name: 'paypal',
        icon: 'paypal',
        buttonText: 'Maksa Paypalilla',
        displayName: 'Paypal',
    },
    {
        name: 'paytrail',
        icon: 'paytrail',
        buttonText: 'Maksa paytraililla',
        displayName: 'Paytrail',
    },
    {
        name: 'toStore',
        icon: 'marketplace',
        buttonText: 'Maksa nuotaessa',
        displayName: 'Maksu myymälään',
    },
];
