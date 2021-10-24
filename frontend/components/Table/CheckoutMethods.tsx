import App from 'next/app';
import React from 'react';
import { useSelector } from 'react-redux';
import { IDeliveryCost } from '../../../@types';
import { AppState } from '../../store/store';
import RadioButton from '../RadioButton/RadioButton';
/** depends on active marketing campaigns, country of customer and logged in user state */
const CheckoutMethods = () => {
    const deliveryCosts = useSelector((state: AppState) => state.deliveryCosts);
    const cart = useSelector((state: AppState) => state.cart);
    return (
        <fieldset>
            <legend>Toimitustapa</legend>
            {deliveryCosts.map((deliveryCost: IDeliveryCost) => {
                return (
                    <RadioButton
                        handleChange={() => {}}
                        checked={
                            cart.deliveryCost[deliveryCost._id] ? true : false
                        }
                        formField={{
                            type: 'radio',
                            name: 'deliveryCost',
                            id: deliveryCost.variant,
                            label: deliveryCost.name,
                        }}
                    />
                );
            })}
        </fieldset>
    );
};

export default CheckoutMethods;
