import React, { FC } from 'react';
import { ICartItem } from '../../../@types';
import { setPriceTag } from '../../utils/utils';

interface IDeliveryCostRowProps {
    deliveryCost: ICartItem;
}

const DeliveryCostRow: FC<IDeliveryCostRowProps> = ({ deliveryCost }) => {
    return (
        <tr>
            <td>Toimituskulu - {deliveryCost.name}</td>
            <td>1</td>
            <td>{setPriceTag(deliveryCost.unit_price)}</td>
            <td>{setPriceTag(deliveryCost.totalTaxAmount)}</td>
            <td>{setPriceTag(deliveryCost.totalPrice)}</td>
        </tr>
    );
};

export default DeliveryCostRow;
