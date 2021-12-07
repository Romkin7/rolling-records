import React, { FC } from 'react';
import { ICartItem } from '../../../@types';
import styles from './Table.module.scss';
import { setPriceTag } from '../../utils/utils';
import Picture from '../Picture/Picture';
import { cartTotalsItems, ICartItemHeader } from '../../data/cart';
import ModButtons from '../ModButtons/ModButtons';
import CheckoutForm from './CheckoutForm';
import CheckoutMethods from './CheckoutMethods';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../store/store';
import PersonalInfoList from './PersonalInfoList';
import PostOfficeList from '../PostOfficeList/PostOfficeList';
import BonusCouponRow from './BonusCouponRow';
import DeliveryCostRow from './DeliveryCostRow';
import { updateToggle } from '../../store/actions/toggleActions';
import Button from '../Button/Button';
import { updateModal } from '../../store/actions/modalActions';

interface ITableBodyProps {
    showModButtons: boolean;
    showCheckoutForm: boolean;
}

const TableBody: FC<ITableBodyProps> = ({
    showModButtons,
    showCheckoutForm,
}) => {
    const dispatch = useDispatch();
    const cart = useSelector((state: AppState) => state.cart);
    const currentUser = useSelector((state: AppState) => state.currentUser);
    const toggle = useSelector((state: AppState) => state.toggle);
    const { items } = cart;

    const openModal = (event: any) => {
        event.preventDefault();
        dispatch(updateModal(true));
    };

    const editToggle = (toggle: boolean) => {
        dispatch(updateToggle(toggle));
    };
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
                <td>Tuotteet yhteensä</td>
                <td>{cart.totalQuantity}</td>
                <td>{setPriceTag(cart.totalPriceExcludingTax || 0)}</td>
                <td>{setPriceTag(cart.totalTaxAmount)}</td>
                <td>{setPriceTag(cart.totalPrice)}</td>
            </tr>
            {showCheckoutForm && (
                <>
                    {cart.deliveryCost && (
                        <DeliveryCostRow
                            deliveryCost={cart.deliveryCost['shippingFee']}
                        />
                    )}
                    {cart.coupon && cart.coupon.valid && (
                        <BonusCouponRow coupon={cart.coupon} />
                    )}
                    <tr>
                        <td>Loppusumma</td>
                        <td></td>
                        <td>
                            {currentUser.isAuthenticated &&
                                currentUser.user.bonus_system.coupons.length &&
                                !cart.coupon.valid && (
                                    <Button
                                        disabled={
                                            !currentUser.user.bonus_system
                                                .coupons[0].valid
                                        }
                                        type="button"
                                        color="success"
                                        handleClick={(event: any) =>
                                            openModal(event)
                                        }
                                    >
                                        Käytä kuponki
                                    </Button>
                                )}
                        </td>
                        <td></td>
                        <th>{setPriceTag(cart.finalPrice)}</th>
                    </tr>
                    <tr>
                        <td>
                            {cart.customer && !toggle ? (
                                <PersonalInfoList
                                    handleClick={() => editToggle(true)}
                                />
                            ) : (
                                <CheckoutForm
                                    handleClick={() => editToggle(false)}
                                />
                            )}
                        </td>
                        <td></td>
                        <td colSpan={3}>
                            {cart.customer && !toggle && <CheckoutMethods />}
                            {cart.deliveryCost &&
                                cart.deliveryCost['shippingFee'].name.match(
                                    /Postipaketti/,
                                ) &&
                                cart.customer &&
                                cart.customer.country === 'Finland' && (
                                    <PostOfficeList />
                                )}
                            {cart.deliveryCost &&
                                cart.deliveryCost['shippingFee'].name.match(
                                    /Nouto myymälästä/,
                                ) &&
                                cart.customer &&
                                cart.customer.country === 'Finland' && (
                                    <PostOfficeList showStoreList={true} />
                                )}
                        </td>
                    </tr>
                </>
            )}
        </tbody>
    );
};

export default TableBody;
