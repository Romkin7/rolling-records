import React, { FC } from 'react';
import { IOrder } from '../../../@types';
import {
    totalPrice,
    totalPriceExcludingTax,
    totalTaxes,
} from '../../utils/orderTotals';
import { setPriceTag } from '../../utils/utils';

interface IOrderTotalsProps {
    order: IOrder;
}

const OrderTotals: FC<IOrderTotalsProps> = ({ order }) => {
    return (
        <>
            <tr>
                <td colSpan={3} rowSpan={4}></td>
                <td>Veroton hinta:</td>
                <td>{setPriceTag(totalPriceExcludingTax(order))}</td>
            </tr>
            <tr>
                <td>Alv 24%:</td>
                <td>{setPriceTag(totalTaxes(order))}</td>
            </tr>
            <tr>
                <td>Yhteensä:</td>
                <td>{setPriceTag(totalPrice(order))}</td>
            </tr>
        </>
    );
};

export default OrderTotals;
