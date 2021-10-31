import { useSelector } from 'react-redux';
import LayoutProfile from '../../../components/LayoutProfile';
import React from 'react';
import BreadCrumb from '../../../components/Breadcrumb/Breadcrumb';
import { AppState } from '../../../store/store';
import { ICoupon } from '../../../../@types';
import Coupon from '../../../components/Coupon/Coupon';

const ProfilePage = () => {
    const { user } = useSelector((state: AppState) => state.currentUser);
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
                                href: `/profiili/${user._id}`,
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
                    <h2>{user.username}</h2>
                    <h3>Bonus järjestelmä</h3>
                    <p>Bonuskupongit:</p>
                    <div className="row">
                        {user.bonus_system.coupons.map((coupon: ICoupon) => {
                            return (
                                <div className="col-6" key={coupon.id}>
                                    {' '}
                                    <Coupon />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

ProfilePage.PageLayout = LayoutProfile;

export default ProfilePage;
