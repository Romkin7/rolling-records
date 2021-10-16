import { useSelector } from 'react-redux';
import LayoutProfile from '../../../../components/LayoutProfile';
import React from 'react';
import BreadCrumb from '../../../../components/Breadcrumb/Breadcrumb';
import { AppState } from '../../../../store/store';
import { useRouter } from 'next/router';
import Order from '../../../../components/Order/Order';

const OrderPage = () => {
    const { user } = useSelector((state: AppState) => state.currentUser);
    const { query } = useRouter();
    return (
        <div className="container">
            <div className="row mt-3">
                <div className="col-md-12">
                    <BreadCrumb
                        breadCrumbItems={[
                            {
                                id: 1,
                                text: 'Etusivu',
                                href: '/',
                                ariaCurrent: 'page',
                                active: false,
                                className: 'breadcrumb-item',
                            },
                            {
                                id: 2,
                                text: `${user.username} profiili`,
                                href: `/profiili/${query.username}`,
                                ariaCurrent: 'page',
                                active: false,
                                className: 'breadcrumb-item',
                            },
                            {
                                id: 3,
                                text: `tilaushistoria`,
                                href: `/profiili/${query.username}/tilaushistoria`,
                                ariaCurrent: 'page',
                                active: false,
                                className: 'breadcrumb-item',
                            },
                            {
                                id: 4,
                                text: `${query.order_number}`,
                                href: `/profiili/${query.username}/tilaushistoria/${query.order_number}`,
                                ariaCurrent: 'page',
                                active: true,
                                className: 'breadcrumb-item',
                            },
                        ]}
                    />
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-md-12">
                    <h2>Tilaus {query.order_number}</h2>
                </div>
                <div className="col-12 mt-3">
                    <div className="card">
                        <Order />
                    </div>
                </div>
            </div>
        </div>
    );
};

OrderPage.PageLayout = LayoutProfile;

export default OrderPage;
