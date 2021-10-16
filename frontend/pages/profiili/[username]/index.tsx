import { useSelector } from 'react-redux';
import LayoutProfile from '../../../components/LayoutProfile';
import React from 'react';
import BreadCrumb from '../../../components/Breadcrumb/Breadcrumb';
import { AppState } from '../../../store/store';

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
                </div>
            </div>
        </div>
    );
};

ProfilePage.PageLayout = LayoutProfile;

export default ProfilePage;
