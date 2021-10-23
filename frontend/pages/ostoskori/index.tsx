import React, { FC } from 'react';
import BreadCrumb from '../../components/Breadcrumb/Breadcrumb';
import Table from '../../components/Table/Table';
import { tFootSettings } from '../../data/cart';

const CartPage: FC = () => {
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
                                active: true,
                                className: 'breadcrumb-item',
                            },
                        ]}
                    />
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 mt-3">
                    <h2>Ostoskori</h2>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 mt-3">
                    <Table
                        showModButtons={true}
                        showCheckoutForm={false}
                        tFootSettings={tFootSettings[0]}
                    />
                </div>
            </div>
        </div>
    );
};

export default CartPage;
