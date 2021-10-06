import { useRouter } from 'next/router';
import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { IOrder } from '../../../@types';
import { AppState } from '../../store/store';
import styles from './Order.module.scss';
import OrderHeader from './OrderHeader';
import OrderItems from './OrderItems';

const Order: FC = () => {
    const router = useRouter();
    const { user } = useSelector((state: AppState) => state.currentUser);
    const order = user.history.find(
        (orderInFind: IOrder) =>
            orderInFind.order_number === router.query.order_number,
    );
    return (
        <div className={`card ${styles.order}`}>
            <div className="p-3 card-body">
                <OrderHeader order={order} />
                <OrderItems order={order} />
            </div>
        </div>
    );
};

export default Order;
