import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IDeliveryCost } from '../../../@types';
import { addDeliveryCost } from '../../store/actions/cartActions';
import {
    fetchPostOffices,
    resetPostOffices,
} from '../../store/actions/postOfficesActions';
import { AppState } from '../../store/store';
import { resetPostOffice } from '../../utils/reset';
import { setPriceTag } from '../../utils/utils';
import RadioButton from '../RadioButton/RadioButton';
/** depends on active marketing campaigns, country of customer and logged in user state */
const CheckoutMethods = () => {
    const dispatch = useDispatch();
    const deliveryCosts = useSelector((state: AppState) => state.deliveryCosts);
    const currentUser = useSelector((state: AppState) => state.currentUser);
    const cart = useSelector((state: AppState) => state.cart);
    useEffect(() => {
        if (
            (currentUser.isAuthenticated &&
                currentUser.user.completeAddress.country === 'Finland' &&
                cart.deliveryCost &&
                cart.deliveryCost['shippingFee'].name.match(/Postipaketti/)) ||
            (cart.customer &&
                cart.customer.country === 'Finland' &&
                cart.deliveryCost &&
                cart.deliveryCost['shippingFee'].name.match(/Postipaketti/))
        ) {
            dispatch(fetchPostOffices());
        }
        return () => {
            dispatch(resetPostOffices([resetPostOffice()]));
        };
    }, [currentUser, cart]);
    const handleChange = (event: any, deliveryCostId: string) => {
        event.preventDefault();
        dispatch(addDeliveryCost(deliveryCostId));
        if (
            (currentUser.isAuthenticated &&
                currentUser.user.completeAddress.country === 'Finland' &&
                cart.deliveryCost &&
                cart.deliveryCost['shippingFee'].name.match(/Postipaketti/)) ||
            (cart.customer &&
                cart.customer.country === 'Finland' &&
                cart.deliveryCost &&
                cart.deliveryCost['shippingFee'].name.match(/Postipaketti/))
        ) {
            dispatch(fetchPostOffices());
        }
    };
    return (
        <fieldset>
            <legend>Toimitustapa</legend>
            {deliveryCosts.map((deliveryCost: IDeliveryCost) => {
                return (
                    <RadioButton
                        handleChange={(event: any) =>
                            handleChange(event, deliveryCost._id)
                        }
                        checked={
                            cart.deliveryCost &&
                            cart.deliveryCost['shippingFee']._id ===
                                deliveryCost._id
                        }
                        formField={{
                            type: 'radio',
                            name: 'deliveryCost',
                            id: deliveryCost.variant,
                            label:
                                deliveryCost.name +
                                ' - ' +
                                setPriceTag(deliveryCost.unit_price),
                        }}
                    />
                );
            })}
        </fieldset>
    );
};

export default CheckoutMethods;
