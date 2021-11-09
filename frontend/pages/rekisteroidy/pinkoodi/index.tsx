import Link from 'next/link';
import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import BreadCrumb from '../../components/Breadcrumb/Breadcrumb';
import PincodeForm from '../../components/PincodeForm/PincodeForm';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import { signUpFormLinks } from '../../data/forms';
import { AppState } from '../../store/store';
import { ILink } from '../../types';

const SignupPincodePage: FC = () => {
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
                                text: 'Rekisteröidy',
                                href: '/rekisteroidy',
                                ariaCurrent: 'page',
                                active: false,
                                className: 'breadcrumb-item',
                            },
                            {
                                id: 3,
                                text: 'Pinkoodi',
                                href: '/rekisteroidy/pinkoodi',
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
                    <h1>Vahvista sähköposti</h1>
                </div>
            </div>
            <div className="row d-flex justify-content-center mt-3">
                <div className="col-md-5">
                    <PincodeForm />
                    <section className="mt-3">
                        {signUpFormLinks.length &&
                            signUpFormLinks.map((link: ILink) => {
                                return (
                                    <article key={link.id}>
                                        <p>{link.text}</p>
                                        <Link href={link.href}>
                                            <a>{link.linkText}</a>
                                        </Link>
                                    </article>
                                );
                            })}
                    </section>
                </div>
            </div>
        </div>
    );
};

export default SignupPincodePage;
