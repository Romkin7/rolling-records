import React, { FC } from 'react';
import { PayPalButton } from 'react-paypal-button-v2';
import { useSelector } from 'react-redux';
import { AppState } from '../../store/store';

const PaypalButtons: FC = () => {
    const cart = useSelector((state: AppState) => state.cart);
    const onSuccess = (details: any, data: any) => {
        // OPTIONAL: Call your server to save the transaction
        return fetch('/paypal-transaction-complete', {
            method: 'post',
            body: JSON.stringify({
                orderID: data.orderID,
            }),
        });
    };
    return (
        <PayPalButton
            amount={cart.finalPrice}
            // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
            onSuccess={(details: any, data: any) => onSuccess(details, data)}
        />
    );
};

export default PaypalButtons;
