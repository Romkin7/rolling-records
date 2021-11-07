import React, { FC } from 'react';
import BreadCrumb from '../components/Breadcrumb/Breadcrumb';
import ContactForm from '../components/ContactForm/ContactForm';
import WorkingHours from '../components/WorkingHours/WorkingHours';

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
            <div className="col-12">
                <h1>Asiakaspalvelu</h1>
                <p>
                    Vastaamme kysymyksiinne tilauksista, varauksista ja
                    tuotteista.
                </p>
                <p>Autamme mielellämme myös erilaisissa ongelmatilanteissa.</p>
                <div className="row">
                    <div className="col-md-6">
                        <WorkingHours title="Asiakaspalvelu avoinna" />
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
                                <h4 className="media-heading">Puhelimitse:</h4>
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
                                <h4 className="media-heading">
                                    Sähköpostitse:{' '}
                                </h4>
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
                            <div className="media-body">
                                <h4 className="media-heading">
                                    Muut vaihtoehdot:{' '}
                                </h4>
                                <p>
                                    Rekisteröityneenä käyttäjänä, yhteydenotto
                                    onnistuu kätevästi myös ohessa olevalla
                                </p>
                                <p>
                                    <strong>
                                        <i
                                            className="fa fa-clipboard"
                                            aria-hidden="true"
                                        ></i>{' '}
                                        Lomakkeella
                                    </strong>{' '}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 margin-top-20px">
                        <ContactForm />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomerServicePage;
