import { useSelector } from 'react-redux';
import LayoutProfile from '../../components/LayoutProfile';
import React, { FC } from 'react';
import BreadCrumb from '../../components/Breadcrumb/Breadcrumb';
import { AppState } from '../../store/store';

const ProfilePage: FC = () => {
    const { user } = useSelector((state: AppState) => state.currentUser);
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
                                    href: `/profiili/${user._id}`,
                                    ariaCurrent: 'page',
                                    active: false,
                                    className: 'breadcrumb-item',
                                },
                            ]}
                        />
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-md-4">
                        <h2>{user.username}</h2>
                    </div>
                </div>
            </div>
        </LayoutProfile>
    );
};

export default ProfilePage;
