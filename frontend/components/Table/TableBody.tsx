import React, { FC } from 'react';
import { ICartItem } from '../../../@types';
import { totalQuantity } from '../../utils/orderTotals';
import { setPriceTag } from '../../utils/utils';
import Picture from '../Picture/Picture';

interface ITableBodyProps {
    items: ICartItem[];
}

const TableBody: FC<ITableBodyProps> = ({ items }) => {
    return (
        <tbody>
            {items.length &&
                items.map((item: ICartItem) => {
                    return (
                        <tr key={item._id}>
                            <td>
                                <Picture src={item.cover} alt={item.fullname} />
                                {item.fullname}
                            </td>
                            <td>{item.genre}</td>
                            <td>{setPriceTag(item.unit_price)}</td>
                            <td>{item.totalQuantity}</td>
                            <td>
                                {item.totalQuantity} kpl <br />{' '}
                                {setPriceTag(item.totalPrice)}
                            </td>
                        </tr>
                    );
                })}
        </tbody>
    );
};

export default TableBody;
