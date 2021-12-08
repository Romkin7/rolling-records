import Link from 'next/link';
import React, { FC } from 'react';
import BreadCrumb from '../../../../components/Breadcrumb/Breadcrumb';
import { ILink } from '../../../../types';
import { passwordRecoveryFormLinks } from '../../../../data/forms';
import PasswordRecoveryForm from '../../../../components/PasswordRecoveryForm/PasswordRecoveryForm';

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
                            active: false,
                            className: 'breadcrumb-item',
                        },
                        {
                            id: 4,
                            text: 'Uusi salasana',
                            href: '/salasananpalautus/pinkoodi/uusisalasana',
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
                <h1>Uusi salasana</h1>
            </div>
        </div>
        <div className="row d-flex justify-content-center mt-3">
            <div className="col-md-5">
                <PasswordRecoveryForm />
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
