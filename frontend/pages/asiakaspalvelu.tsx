import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import BreadCrumb from '../components/Breadcrumb/Breadcrumb';
import ContactForm from '../components/ContactForm/ContactForm';
import LoginForm from '../components/LoginForm/LoginForm';
import WorkingHours from '../components/WorkingHours/WorkingHours';
import { AppState } from '../store/store';

const CustomerServicePage: FC = () => {
    const currentUser = useSelector((state: AppState) => state.currentUser);
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
            <div className="col-12">
                <h1>Asiakaspalvelu</h1>
                <div className="row">
                    <div className="col-md-6">
                        <p>
                            Vastaamme kysymyksiinne tilauksista, varauksista ja
                            tuotteista.
                        </p>
                        <p>
                            Autamme mielellämme myös erilaisissa
                            ongelmatilanteissa.
                        </p>
                        <WorkingHours title="Palvelemme" />
                        <div className="media margin-top-20px">
                            <div className="media-left">
                                <a href="#">
                                    <i
                                        className="fa fa-phone"
                                        aria-hidden="true"
                                    ></i>
                                </a>
                            </div>
                            <div className="media-body">
                                <p>Puhelimitse:</p>
                                <strong>
                                    <a href="tel:+358503445539">
                                        +358 50 344 55 39
                                    </a>
                                </strong>
                            </div>
                        </div>
                        <div className="media">
                            <div className="media-left">
                                <a href="#">
                                    <i
                                        className="fa fa-envelope"
                                        aria-hidden="true"
                                    ></i>
                                </a>
                            </div>
                            <div className="media-body">
                                <p>Sähköpostitse: </p>
                                <strong>
                                    <a href="mailto:rollingrecords@outlook.com">
                                        rollingrecords@outlook.com
                                    </a>
                                </strong>
                            </div>
                        </div>
                        <div className="media">
                            <div className="media-left">
                                <a href="#">
                                    <i
                                        className="fa fa-list-alt"
                                        aria-hidden="true"
                                    ></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 margin-top-20px">
                        <h4>Muut vaihtoehdot: </h4>
                        <p>
                            Kirjautuneena käyttäjänä, yhteydenotto onnistuu
                            kätevästi myös ohessa olevalla
                            <strong>
                                <i
                                    className="fa fa-clipboard"
                                    aria-hidden="true"
                                ></i>{' '}
                                Lomakkeella.
                            </strong>{' '}
                        </p>
                        {currentUser.isAuthenticated ? (
                            <ContactForm />
                        ) : (
                            <>
                                <h4 className="media-heading">
                                    Kirjaudu sisään
                                </h4>
                                <LoginForm />
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomerServicePage;
