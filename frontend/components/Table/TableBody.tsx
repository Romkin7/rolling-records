import React, { FC, useState } from 'react';
import { ICart, ICartItem } from '../../../@types';
import styles from './Table.module.scss';
import { setPriceTag } from '../../utils/utils';
import Picture from '../Picture/Picture';
import { cartTotalsItems, ICartItemHeader } from '../../data/cart';
import ModButtons from '../ModButtons/ModButtons';
import CheckoutForm from './CheckoutForm';
import CheckoutMethods from './CheckoutMethods';
import { useSelector } from 'react-redux';
import { AppState } from '../../store/store';
import { setCurrentUser } from '../../store/actions/userAuthActions';
import PersonalInfoList from './PersonalInfoList';

interface ITableBodyProps {
    showModButtons: boolean;
    showCheckoutForm: boolean;
}

const TableBody: FC<ITableBodyProps> = ({
    showModButtons,
    showCheckoutForm,
}) => {
    const cart = useSelector((state: AppState) => state.cart);
    const currentUser = useSelector((state: AppState) => state.currentUser);
    const [editUserInfo, updateEditUserInfo] = useState<boolean>(() =>
        currentUser.isAuthenticated || cart.customer.zipcode ? false : false,
    );
    const { items } = cart;
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
                            <td>{item.productType}</td>
                            <td>{setPriceTag(item.unit_price)}</td>
                            <td>
                                {showModButtons ? (
                                    <ModButtons
                                        itemId={item._id}
                                        totalQuantity={item.totalQuantity}
                                        itemsTotalQuantity={
                                            item.itemsTotalQuantity
                                        }
                                    />
                                ) : (
                                    `${item.totalQuantity} kpl`
                                )}
                            </td>
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
            {showCheckoutForm && (
                <tr>
                    <td>
                        {!editUserInfo ? (
                            <PersonalInfoList
                                handleClick={() => updateEditUserInfo(true)}
                                customer={cart.customer}
                                user={currentUser.user}
                            />
                        ) : (
                            <CheckoutForm
                                customer={cart.customer}
                                handleClick={() => updateEditUserInfo(false)}
                            />
                        )}
                    </td>
                    <td></td>
                    <td colSpan={3}>
                        <CheckoutMethods />
                    </td>
                </tr>
            )}
        </tbody>
    );
};

export default TableBody;
