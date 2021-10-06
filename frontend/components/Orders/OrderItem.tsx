import Link from 'next/link';
import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { IExportedOrderItem, IOrder } from '../../../@types';
import { AppState } from '../../store/store';
import { getOrderItemsStatuses } from '../../utils/utils';
import Icon from '../Icon/Icon';
import styles from './Orders.module.scss';

interface IOrderItemProps {
    order: IOrder;
}

const OrderItem: FC<IOrderItemProps> = ({ order }) => {
    const { user } = useSelector((state: AppState) => state.currentUser);
    return (
        <Link
            href={`/profiili/${user.username}/tilaushistoria/${order.order_number}`}
        >
            <div className={`card ${styles.orderItem}`}>
                <div
                    className={`order_container__progress--progress-bar progress-bar ${
                        order.status === 'pending' ? 'bg-warning' : 'bg-success'
                    } progress-bar-striped progress-bar-animated`}
                    role="progressbar"
                    aria-valuemin={0}
                    style={{
                        width: `${
                            order.status === 'pending'
                                ? '100'
                                : order.status === 'delivered'
                                ? '100'
                                : order.status === 'done'
                                ? '100'
                                : order.delivery_method.name ===
                                  'Nouto myymälästä'
                                ? (getOrderItemsStatuses(order.items)[
                                      'pickableItems'
                                  ] as unknown as number) * 100
                                : (getOrderItemsStatuses(order.items)[
                                      'readyItems'
                                  ] as unknown as number) * 100
                        } %`,
                    }}
                    aria-valuenow={
                        order.delivery_method.name === 'Nouto Myymälästä'
                            ? (getOrderItemsStatuses(order.items)[
                                  'pickableItems'
                              ] as unknown as number) * 100
                            : (getOrderItemsStatuses(order.items)[
                                  'readyItems'
                              ] as unknown as number) * 100
                    }
                    aria-valuemax={100}
                >
                    {`${
                        order.status === 'delivered'
                            ? '100'
                            : order.status === 'done'
                            ? '100'
                            : order.delivery_method.name === 'Nouto myymälästä'
                            ? (getOrderItemsStatuses(order.items)[
                                  'pickableItems'
                              ] as unknown as number) * 100
                            : (getOrderItemsStatuses(order.items)[
                                  'readyItems'
                              ] as unknown as number) * 100
                    }% ${
                        order.status === 'pending'
                            ? 'Vastaanotettu'
                            : order.status === 'recieved'
                            ? 'Käsittelyssä'
                            : order.status === 'delivered'
                            ? 'Toimitettu'
                            : 'Valmis noudettavaksi'
                    }`}
                </div>
                <div className="card-header order-card-header order_container__header">
                    <h5 className="order_container__header___heading">
                        Tilaus numero: {order.order_number}
                    </h5>
                    <p className="order_container__header___infoText">
                        Maksutapa: {order.payment_method}
                    </p>
                    <p className="order_container__header___infoText">
                        Toimitustapa: {order.delivery_method.name}
                    </p>
                    <p className="order_container__header___infoText">
                        Tilaus luotu:{' '}
                        {new Date(order.createdAt).toLocaleDateString('fi')}
                    </p>
                </div>
                <div className="card-body">
                    <div className="container">
                        <div className="row d-flex justify-content-center">
                            <div className="col-2">
                                {order.payment_method && (
                                    <div className={styles.orderItemIcon}>
                                        <Icon
                                            icon={
                                                order.paypal_orderID
                                                    ? 'paypal'
                                                    : order.payment_method ==
                                                      'maksu myymälään'
                                                    ? 'marketplace'
                                                    : order.payment_method ==
                                                      'klarna'
                                                    ? 'klarna'
                                                    : 'login'
                                            }
                                        />
                                    </div>
                                )}
                                <p>{order.payment_method}</p>
                            </div>
                            <div className="col-10">
                                <h5>
                                    Tilaaja:{' '}
                                    {order.payees_information.firstname}
                                    {order.payees_information.lastname}
                                </h5>
                                <h5>Tuotteet {order.items.length}kpl:</h5>
                                {order.items.map((item: IExportedOrderItem) => {
                                    return (
                                        <p key={item._id}>
                                            {item.item
                                                ? item.fullname
                                                : 'Tuote on '}
                                            ,{' '}
                                            {item.item
                                                ? item.item.name
                                                : 'poistettu'}
                                        </p>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default OrderItem;
