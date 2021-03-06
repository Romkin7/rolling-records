import Link from 'next/link';
import React, { FC } from 'react';
import BreadCrumb from '../../../components/Breadcrumb/Breadcrumb';
import Form from '../../../components/Form/Form';
import { ILink } from '../../../types';
import {
    passwordRecoveryFormFields,
    passwordRecoveryFormLinks,
} from '../../../data/forms';
import PasswordRecoveryPincodeForm from '../../../components/PasswordRecoveryForm/PasswordRecoverPincodeForm';

const PasswordRecoveryPincodePage: FC = () => (
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
                            text: 'Salasanan palautus',
                            href: '/salasananpalautus',
                            ariaCurrent: 'page',
                            active: false,
                            className: 'breadcrumb-item',
                        },
                        {
                            id: 3,
                            text: 'Salasanan palautus pinkoodi',
                            href: '/salasananpalautus/pinkoodi',
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
                <h1>Salasanan palautus pinkoodi</h1>
            </div>
        </div>
        <div className="row d-flex justify-content-center mt-3">
            <div className="col-md-5">
                <PasswordRecoveryPincodeForm />
                <section className="mt-3">
                    {passwordRecoveryFormLinks.length &&
                        passwordRecoveryFormLinks.map((link: ILink) => {
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

export default PasswordRecoveryPincodePage;
