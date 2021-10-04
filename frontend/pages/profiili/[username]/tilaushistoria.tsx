import { useSelector } from 'react-redux';
import LayoutProfile from '../../../components/LayoutProfile';
import React, { FC } from 'react';
import BreadCrumb from '../../../components/Breadcrumb/Breadcrumb';
import { AppState } from '../../../store/store';
import { useRouter } from 'next/router';
import Orders from '../../../components/Orders/Orders';

const OrderHistoryPage: FC = () => {
    const { user } = useSelector((state: AppState) => state.currentUser);
    const { query } = useRouter();
    return (
        <LayoutProfile
            title={`${user.username} profiili - Rolling Records Record Shop Helsinki`}
            content={`Rolling Records Record Shop Helsinki - ${user.username} profiili`}
        >
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
                                    active: true,
                                    className: 'breadcrumb-item',
                                },
                            ]}
                        />
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-md-12">
                        <h2>tilaushistoria</h2>
                    </div>
                    <div className="col-12 mt-3">
                        {console.log(user.history)}
                        <Orders orders={user.history} />
                    </div>
                </div>
            </div>
        </LayoutProfile>
    );
};

export default OrderHistoryPage;
