import React, { FC } from 'react';
import BreadCrumb from '../../../../components/Breadcrumb/Breadcrumb';
import Icon from '../../../../components/Icon/Icon';
import Table from '../../../../components/Table/Table';
import { tFootSettings } from '../../../../data/cart';
import { paymentMethods } from '../../../../data/paymentMethods';
import { IPaymentMethod } from '../../../../types';

const PaymentPage: FC = () => {
    return (
        <div className="container">
            <div className="row mt-3">
                <div className="col-md-12">
                    <BreadCrumb
                        breadCrumbItems={[
                            {
                                id: 1,
                                text: 'ostoskori',
                                href: '/ostoskori',
                                ariaCurrent: 'page',
                                active: false,
                                className: 'breadcrumb-item',
                            },
                            {
                                id: 2,
                                text: 'kassa',
                                href: '/ostoskori/kassa',
                                ariaCurrent: 'page',
                                active: false,
                                className: 'breadcrumb-item',
                            },
                            {
                                id: 3,
                                text: 'maksu',
                                href: '/ostoskori/kassa/maksu',
                                ariaCurrent: 'page',
                                active: true,
                                className: 'breadcrumb-item',
                            },
                        ]}
                    />
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 mt-3">
                    <h2>Maksutavat</h2>
                </div>
            </div>
            <div className="row">
                {paymentMethods.map((paymentMethod: IPaymentMethod) => {
                    return (
                        <div key={paymentMethod.name} className="col-md-3 mt-3">
                            <p>{paymentMethod.displayName}</p>
                            <Icon icon={paymentMethod.icon}></Icon>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default PaymentPage;
