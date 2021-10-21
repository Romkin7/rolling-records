import React, { FC, FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { checkoutFormFields } from '../../data/forms';
import { addCustomerToCart } from '../../store/actions/cartActions';
import { ICheckoutForm, IFormField } from '../../types';
import { resetCheckoutForm } from '../../utils/reset';
import Button from '../Button/Button';
import Card from '../Card/Card';
import Form from '../Form/Form';
import Input from '../Input/Input';
import Select from '../Select/Select';
import { fieldFormErrorMessages } from '../SignUpForm/errorMessages';
import { validate } from '../SignUpForm/validation';

const CheckoutForm: FC = () => {
    const dispatch = useDispatch();
    const [checkoutFormState, updateCheckoutFormState] =
        useState<ICheckoutForm>(() => resetCheckoutForm());
    const [errorMessage, setErrorMessage] = useState<{
        field: string;
        message: string;
    }>({ field: '', message: '' });
    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        dispatch(addCustomerToCart(checkoutFormState));
    };
    const handleChange = (event: any) => {
        event.preventDefault();
        if (
            event.target.value.length > 2 &&
            validate[event.target.name] &&
            validate[event.target.name](
                event.target.value,
                checkoutFormState.email,
            )
        ) {
            setErrorMessage({
                field: event.target.name,
                message: fieldFormErrorMessages[event.target.name],
            });
            updateCheckoutFormState({
                ...checkoutFormState,
                [event.target.name]: event.target.value,
            } as Pick<ICheckoutForm, keyof ICheckoutForm>);
        } else {
            setErrorMessage({
                field: '',
                message: '',
            });
            updateCheckoutFormState({
                ...checkoutFormState,
                [event.target.name]: event.target.value,
            } as Pick<ICheckoutForm, keyof ICheckoutForm>);
        }
    };
    return (
        <Card>
            <Form handleSubmit={(event: FormEvent) => handleSubmit(event)}>
                <div className="row p-4">
                    <div className="col-12">
                        <p>Vaaditut kentät ovat merkitty *</p>
                        <h3>Nimi- ja yhteystiedot</h3>
                        {checkoutFormFields.partOne.map(
                            (formField: IFormField) => {
                                return (
                                    <Input
                                        formField={formField}
                                        handleChange={(event: any) =>
                                            handleChange(event)
                                        }
                                        value={
                                            checkoutFormState[formField.name]
                                        }
                                        errorText={
                                            errorMessage.field ===
                                                formField.name &&
                                            errorMessage.message
                                        }
                                    />
                                );
                            },
                        )}
                        <h3>Osoitetiedot</h3>
                        {checkoutFormFields.partTwo.map(
                            (formField: IFormField) => {
                                return formField.type === 'select' ? (
                                    <Select
                                        formField={formField}
                                        handleChange={(event: any) =>
                                            handleChange(event)
                                        }
                                        value={
                                            checkoutFormState[formField.name]
                                        }
                                        errorText={
                                            errorMessage.field ===
                                                formField.name &&
                                            errorMessage.message
                                        }
                                    />
                                ) : (
                                    <Input
                                        formField={formField}
                                        handleChange={(event: any) =>
                                            handleChange(event)
                                        }
                                        value={
                                            checkoutFormState[formField.name]
                                        }
                                        errorText={
                                            errorMessage.field ===
                                                formField.name &&
                                            errorMessage.message
                                        }
                                    />
                                );
                            },
                        )}
                        <Button type="submit" color="success">
                            Hyväksy
                        </Button>
                    </div>
                </div>
            </Form>
        </Card>
    );
};

export default CheckoutForm;
