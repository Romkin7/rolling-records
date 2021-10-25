import React, { FC } from 'react';
import { ICoupon } from '../../../@types';
import { setPriceTag } from '../../utils/utils';

interface IBonusCouponRowProps {
    coupon: ICoupon;
}

const BonusCouponRow: FC<IBonusCouponRowProps> = ({ coupon }) => {
    return (
        <tr>
            <td>Bonuskuponki</td>
            <td>Hyvitykset</td>
            <td>- {setPriceTag(coupon.value)}</td>
            <td>1</td>
            <td>- {setPriceTag(coupon.value)}</td>
        </tr>
    );
};

export default BonusCouponRow;
