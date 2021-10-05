import React, { FC } from 'react';
import { IOrder } from '../../../@types';
import OrderItem from './OrderItem';
import styles from './Orders.module.scss';

interface IOrdersProps {
    orders: IOrder[];
}

const Orders: FC<IOrdersProps> = ({ orders }) => {
    return (
        <div className={`${styles.orders}`}>
            {orders &&
                orders.length &&
                orders.map((order: IOrder) => {
                    return <OrderItem key={order._id} order={order} />;
                })}
        </div>
    );
};

export default Orders;
