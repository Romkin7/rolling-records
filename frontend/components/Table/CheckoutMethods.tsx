import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IDeliveryCost } from '../../../@types';
import { addDeliveryCost } from '../../store/actions/cartActions';
import { fetchDeliveryCosts } from '../../store/actions/deliveryCostsActions';
import { AppState } from '../../store/store';
import { resetDeliveryCost } from '../../utils/reset';
import { setPriceTag, validateMarketingCampaign } from '../../utils/utils';
import RadioButton from '../RadioButton/RadioButton';
/** depends on active marketing campaigns, country of customer and logged in user state */
const CheckoutMethods = () => {
    const dispatch = useDispatch();
    const deliveryCosts = useSelector((state: AppState) => state.deliveryCosts);
    const currentUser = useSelector((state: AppState) => state.currentUser);
    const marketingCampaigns = useSelector(
        (state: AppState) => state.marketingCampaigns,
    );
    const cart = useSelector((state: AppState) => state.cart);
    // useEffect(() => {
    //     if (currentUser.isAuthenticated && !deliveryCosts[0].name) {
    //         const freeShipmentCampaign = validateMarketingCampaign(
    //             marketingCampaigns,
    //             'freeShipment',
    //         );
    //         const doublePointsCampaign = validateMarketingCampaign(
    //             marketingCampaigns,
    //             'doubleBonusPoints',
    //         );
    //         dispatch(
    //             fetchDeliveryCosts(
    //                 cart.customer,
    //                 freeShipmentCampaign,
    //                 doublePointsCampaign,
    //             ),
    //         );
    //     }
    //     return () => {
    //         dispatch(resetDeliveryCost());
    //     };
    // }, [currentUser, marketingCampaigns, cart, deliveryCosts]);
    const handleChange = (event: any, deliveryCostId: string) => {
        event.preventDefault();
        dispatch(addDeliveryCost(deliveryCostId));
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
