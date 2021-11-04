import React, { FC } from 'react';
import BreadCrumb from '../components/Breadcrumb/Breadcrumb';

const CustomerServicePage: FC = () => {
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
                                text: 'Asiakaspalvelu',
                                href: '/asiakaspalvelu',
                                ariaCurrent: 'page',
                                active: true,
                                className: 'breadcrumb-item',
                            },
                        ]}
                    />
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <h1>Asiakaspalvelu</h1>
                </div>
            </div>
        </div>
    );
};

export default CustomerServicePage;
