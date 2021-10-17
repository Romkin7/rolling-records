import { useSelector } from 'react-redux';
import LayoutProfile from '../../../components/LayoutProfile';
import BreadCrumb from '../../../components/Breadcrumb/Breadcrumb';
import { AppState } from '../../../store/store';
import { useRouter } from 'next/router';
import List from '../../../components/List/List';
import cardStyles from '../../../sass/Card.module.scss';
import AddressForm from '../../../components/AddressForm/AddressForm';

const AddressPage = () => {
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
                                text: `osoitehallinta`,
                                href: `/profiili/${query.username}/osoitehallinta`,
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
                    <h2>osoitehallinta</h2>
                </div>
                <div className="col-12 col-md-6 mt-3">
                    <div className={`card ${cardStyles.customCard}`}>
                        <div className="card-header d-flex justify-content-between">
                            <h3>Nykyinen toimitusosoite:</h3>
                        </div>
                        <div className="card-content">
                            <List
                                listType="flush"
                                name={user.name}
                                address={user.completeAddress}
                            />
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 mt-3">
                    <AddressForm address={user.completeAddress} />
                </div>
            </div>
        </div>
    );
};

AddressPage.PageLayout = LayoutProfile;

export default AddressPage;
