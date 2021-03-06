import Link from 'next/link';
import React, { FC } from 'react';
import BreadCrumb from '../../components/Breadcrumb/Breadcrumb';
import PincodeForm from '../../components/PincodeForm/PincodeForm';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import { signUpFormLinks } from '../../data/forms';
import { ILink } from '../../types';

const SignupPage: FC = () => {
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
                                active: true,
                                className: 'breadcrumb-item',
                            },
                        ]}
                    />
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-md-12">
                    <h1>Rekisteröidy</h1>
                </div>
            </div>
            <div className="row d-flex justify-content-center mt-3">
                <div className="col-md-5">
                    <SignUpForm />
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

export default SignupPage;
