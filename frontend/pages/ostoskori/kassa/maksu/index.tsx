import React, { FC, FormEvent } from 'react';
import BreadCrumb from '../../../../components/Breadcrumb/Breadcrumb';
import Button from '../../../../components/Button/Button';
import Form from '../../../../components/Form/Form';
import Icon from '../../../../components/Icon/Icon';
import { paymentMethods } from '../../../../data/paymentMethods';
import { IPaymentMethod, PaymentMethodNames } from '../../../../types';

const PaymentPage: FC = () => {
    const handleSubmit = (event: FormEvent, paymentMethod: PaymentMethodNames) => {
        event.preventDefault();
    };
    return (
        <div className="container">
            <div className="row mt-3">
                <div className="col-md-12">
                    <BreadCrumb
                        breadCrumbItems={[
                            {
                                id: 1,
                                text: 'ostoskori',
                                href: '/ostoskori',
                                ariaCurrent: 'page',
                                active: false,
                                className: 'breadcrumb-item',
                            },
                            {
                                id: 2,
                                text: 'kassa',
                                href: '/ostoskori/kassa',
                                ariaCurrent: 'page',
                                active: false,
                                className: 'breadcrumb-item',
                            },
                            {
                                id: 3,
                                text: 'maksu',
                                href: '/ostoskori/kassa/maksu',
                                ariaCurrent: 'page',
                                active: true,
                                className: 'breadcrumb-item',
                            },
                        ]}
                    />
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 mt-3">
                    <h2>Maksutavat</h2>
                </div>
            </div>
            <div className="row">
                {paymentMethods.map((paymentMethod: IPaymentMethod) => {
                    return (
                        <div key={paymentMethod.name} className="col-md-4 mt-3">
                            <h3>{paymentMethod.displayName}</h3>
                            <Form
                                handleSubmit={(event: FormEvent) =>
                                    handleSubmit(event, pay)
                                }
                            >
                                <Button type="button" color="default">
                                    <Icon size="sm" icon={paymentMethod.icon} />
                                    {paymentMethod.buttonText}
                                </Button>
                            </Form>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default PaymentPage;
