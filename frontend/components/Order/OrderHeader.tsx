import React, { FC } from 'react';
import { IOrder } from '../../../@types';
import { totalPrice, unpaidPart } from '../../utils/orderTotals';
import { setPriceTag } from '../../utils/utils';
import Icon from '../Icon/Icon';
import styles from './Order.module.scss';

interface IOrderHeaderProps {
    order: IOrder;
}

const OrderHeader: FC<IOrderHeaderProps> = ({ order }) => {
    const customer = order.payees_information;
    return (
        <div className={`${styles.header} card-header`}>
            <div className="row">
                <div className="col-6">
                    <picture className={styles.logo}>
                        <img
                            src="/images/logo.png"
                            alt="Rolling Records logo"
                        />
                    </picture>
                    <p>Rolling Records Tmi</p>
                    <p>Vaasanpolku 3, liikehuoneisto 6</p>
                    <p>00500, Helsinki</p>
                    <p>Suomi, Finland</p>
                    <br />
                    <p>Tilaaja:</p>
                    <p>{customer.firstname + ' ' + customer.lastname}</p>
                    <p>{customer['address']['street']}</p>
                    <p>
                        {customer['address']['zip']}, {customer['address'].city}
                    </p>
                    <p>{customer['address'].country}</p>
                </div>
                <div className="col-6 d-flex flex-column justify-content-between align-items-end">
                    <div className="text-end">
                        <h3>Tilaus</h3>
                        <p># {order.order_number}</p>
                        <p>Päivä: {new Date(order.createdAt).toLocaleDateString('fi')}</p>
                        <p>Tila: {order.status}</p>
                        <p className="d-flex flex-row justify-content-between">Maksutapa: <Icon icon={order.payment_method} /> {order.payment_method}</p>
                        <p>Summa: {setPriceTag(totalPrice(order))}</p>
                        <p>
                            Maksun tila{' '}
                            {order.paid
                                ? 'maksettu'
                                : order.paid_part
                                ? setPriceTag(unpaidPart(order))
                                : 'ei ole maksettu'}
                        </p>
                    </div>
                    <br/>
                    <div className="text-end">
                        <p>Toimitustapa {order.delivery_method.name}</p>
                        {order.postOffice && order.postOffice.id ? (
                            <>
                                <p>Seurantatunnus {order.parcelNo}</p>
                                <p>Noutopiste {order.postOffice.name}</p>
                                <p>{order.postOffice.address}</p>
                                <p>
                                    {order.postOffice.zipcode},{' '}
                                    {order.postOffice.city}
                                </p>
                            </>
                        ) : (
                            <p>{order.delivery_store}</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderHeader;
