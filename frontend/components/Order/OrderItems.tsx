import React, { FC } from 'react';
import { IDeliveryCost, IOrder, IOrderItem } from '../../../@types';
import { setPriceTag } from '../../utils/utils';
import OrderFooter from './OrderFooter';
import OrderTotals from './OrderTotals';

interface IOrderItemsProps {
    order: IOrder;
}

const OrderItems: FC<IOrderItemsProps> = ({ order }) => {
    const { items, delivery_method } = order;
    const deliveryCost = delivery_method;
    return (
        <div className="row">
            <div className="table-responsive col-12">
                <table className="table">
                    <thead>
                        <tr>
                            <td>ID</td>
                            <td>Tuote ja kuvaus</td>
                            <td>Genre/ Koko</td>
                            <td>Määrä kpl</td>
                            <td>Hinta €</td>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map((item: IOrderItem, index: number) => {
                            return (
                                <tr key={item.fullname}>
                                    <td>{index + 1}</td>
                                    <td>{item.fullname}</td>
                                    <td>{item.item['genre']}</td>
                                    <td>{item.quantity}</td>
                                    <td>{setPriceTag(item.unit_price)}</td>
                                </tr>
                            );
                        })}
                        <tr>
                            <td>{items.length + 1}</td>
                            <td>Toimituskulu {deliveryCost.name}</td>
                            <td></td>
                            <td>1</td>
                            <td>{setPriceTag(deliveryCost.unit_price)}</td>
                        </tr>
                        <OrderTotals order={order} />
                    </tbody>
                    <OrderFooter />
                </table>
            </div>
        </div>
    );
};

export default OrderItems;
