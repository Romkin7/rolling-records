import React, { FC, FormEvent } from 'react';
import { useSelector } from 'react-redux';
import BreadCrumb from '../../../../components/Breadcrumb/Breadcrumb';
import Button from '../../../../components/Button/Button';
import Form from '../../../../components/Form/Form';
import Icon from '../../../../components/Icon/Icon';
import { paymentMethods } from '../../../../data/paymentMethods';
import { AppState } from '../../../../store/store';
import { IPaymentMethod, PaymentMethodNames } from '../../../../types';
import { setPriceTag } from '../../../../utils/utils';

const PaymentPage: FC = () => {
    const cart = useSelector((state: AppState) => state.cart);
    const handleSubmit = (
        event: FormEvent,
        paymentMethod: PaymentMethodNames,
    ) => {
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
                            <p>
                                <strong>{paymentMethod.displayName}</strong>
                            </p>
                            <Form
                                handleSubmit={(event: FormEvent) =>
                                    handleSubmit(event, paymentMethod.name)
                                }
                            >
                                <Button
                                    type="button"
                                    color={paymentMethod.name}
                                >
                                    <Icon size="sm" icon={paymentMethod.icon} />
                                    {paymentMethod.buttonText}
                                </Button>
                            </Form>
                        </div>
                    );
                })}
            </div>
            <div className="row mt-5">
                <div className="col-md-12">
                    <h3>Maksettava yhteensä</h3>
                    <p className="lead">
                        <strong>{setPriceTag(cart.finalPrice)}</strong>
                    </p>
                    <h4>Maksutapa</h4>
                    <p>Paytrail</p>
                </div>
            </div>
        </div>
    );
};

export default PaymentPage;
