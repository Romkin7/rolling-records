import React, { FC } from 'react';
import { IOrder } from '../../../@types';
import OrderItem from './OrderItem';
import styles from './Orders.module.scss';

interface IOrdersProps {
    orders: IOrder[];
}

const Orders: FC<IOrdersProps> = ({ orders }) => {
    return (
        <div className={`timeline ${styles.orders}`}>
            {orders &&
                orders.length &&
                orders.map((order: IOrder) => {
                    return <OrderItem order={order} />;
                })}
        </div>
    );
};

export default Orders;
