import React, { FC } from 'react';
import { ICart, ICartItem } from '../../../@types';
import styles from './Table.module.scss';
import { setPriceTag } from '../../utils/utils';
import Picture from '../Picture/Picture';
import { cartTotalsItems, ICartItemHeader } from '../../data/cart';

interface ITableBodyProps {
    items: ICartItem[];
    cart: ICart;
}

const TableBody: FC<ITableBodyProps> = ({ items, cart }) => {
    return (
        <tbody>
            {items.length &&
                items.map((item: ICartItem) => {
                    return (
                        <tr key={item._id}>
                            <td className={styles.tableRow}>
                                <Picture src={item.cover} alt={item.fullname} />{' '}
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
            <tr>
                {cartTotalsItems.map((item: ICartItemHeader) => {
                    return <th key={item.id}>{item.value}</th>;
                })}
            </tr>
            <tr>
                <td></td>
                <td>{cart.totalQuantity}</td>
                <td>{setPriceTag(cart.totalPriceExcludingTax || 0)}</td>
                <td>{setPriceTag(cart.totalTaxAmount)}</td>
                <td>{setPriceTag(cart.totalPrice)}</td>
            </tr>
        </tbody>
    );
};

export default TableBody;
