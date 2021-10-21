import React, { FC } from 'react';
import BreadCrumb from '../../../../components/Breadcrumb/Breadcrumb';
import Order from '../../../../components/Order/Order';

const ConfirmationPage: FC = () => {
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
                                active: false,
                                className: 'breadcrumb-item',
                            },
                            {
                                id: 4,
                                text: 'vahvistus',
                                href: '/ostoskori/kassa/maksu/vahvistus',
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
                    <h2>Vahvistus</h2>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 mt-3">
                    <Order />
                </div>
            </div>
        </div>
    );
};

export default ConfirmationPage;
