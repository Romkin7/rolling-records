import { useSelector } from 'react-redux';
import LayoutProfile from '../../../components/LayoutProfile';
import React from 'react';
import BreadCrumb from '../../../components/Breadcrumb/Breadcrumb';
import { AppState } from '../../../store/store';
import cardStyles from '../../../sass/Card.module.scss';
import List from '../../../components/List/List';
import ContactInfoForm from '../../../components/ContactInfoForm/ContactInfoForm';

const UserDataPage = () => {
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
                                active: false,
                                className: 'breadcrumb-item',
                            },
                            {
                                id: 3,
                                text: `Käyttäjätiedot`,
                                href: `/profiili/${user._id}/käyttäjätiedot`,
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
                    <h2>Käyttäjätiedot</h2>
                </div>
                <div className="col-12 col-md-6 mt-3">
                    <div className={`card ${cardStyles.customCard}`}>
                        <div className="card-header d-flex justify-content-between">
                            <h3>Käyttäjätiedot:</h3>
                        </div>
                        <div className="card-content">
                            <List
                                listType="flush"
                                user={user}
                                userInfo={true}
                            />
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 mt-3">
                    <ContactInfoForm
                        contactInfo={{
                            email: user.email,
                            mobileNumber: user.mobileNumber,
                            username: user.username,
                            firstname: user.name.firstname,
                            lastname: user.name.lastname,
                            bank_account_number: user.bank_account_number,
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

UserDataPage.PageLayout = LayoutProfile;

export default UserDataPage;
