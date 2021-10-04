import React, { FC } from 'react';
import { IOrder } from '../../../@types';
import Icon from '../Icon/Icon';
import styles from './Orders.module.scss';

interface IOrderItemProps {
    order: IOrder;
}

const OrderItem: FC<IOrderItemProps> = ({ order }) => {
    return (
        <div className={styles.orderItem}>
            {order.checkoutApi_id && (
                <div className={styles.orderItemIcon}>
                    <Icon icon="paypal" />
                </div>
            )}{' '}
            <h3>{order.order_number}</h3>
            <p>
                {order.payees_information.firstname}{' '}
                {order.payees_information.lastname}
            </p>
        </div>
    );
};

export default OrderItem;
