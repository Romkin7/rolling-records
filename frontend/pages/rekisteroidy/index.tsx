import Link from 'next/link';
import React, { FC, useState } from 'react';
import { useSelector } from 'react-redux';
import BreadCrumb from '../../components/Breadcrumb/Breadcrumb';
import Layout from '../../components/Layout';
import PincodeForm from '../../components/PincodeForm.tsx/PincodeForm';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import { signUpFormLinks } from '../../data/forms';
import { AppState } from '../../store/store';
import { ILink } from '../../types';

const SignupPage: FC = () => {
    const { step } = useSelector((state: AppState) => state.step);
    return (
        <Layout
            title="Rekisteröidy | Rolling Records - Record Shop Helsinki"
            content="Rolling Records Tmi LP-levykauppa, Ostetaan LP-levyjä, Myydän LP-levyjä, ostetaan vinyyliä, Asiantunteva palvelu. Helsinki, Sörnäinen +358 50 344 55 39 Vaasanpolku 3, liikehuoneisto 6 00500, Helsinki Aukioloajat ma - pe: 11 - 18 la: 11 - 16 su: 12 - 16"
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
                        <h1>Kirjaudu</h1>
                    </div>
                </div>
                <div className="row d-flex justify-content-center mt-3">
                    <div className="col-md-5">
                        {step === 1 && <SignUpForm />}
                        {step === 2 && <PincodeForm />}
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
        </Layout>
    );
};

export default SignupPage;
