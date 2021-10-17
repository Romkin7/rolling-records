import React, { FC } from 'react';
import BreadCrumb from '../../components/Breadcrumb/Breadcrumb';
import { IProduct } from '../../../@types';
import Table from '../../components/Table/Table';

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
                    <Table />
                </div>
            </div>
        </div>
    );
};

export default CartPage;
