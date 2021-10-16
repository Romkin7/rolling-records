import React, { FC, FormEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IAddress } from '../../../@types';
import { addressFormFields } from '../../data/forms';
import { updateUserAddress } from '../../store/actions/userAuthActions';
import { AppState } from '../../store/store';
import { IAddressForm, IFormField } from '../../types';
import { resetAddressForm } from '../../utils/reset';
import Button from '../Button/Button';
import Card from '../Card/Card';
import Form from '../Form/Form';
import Input from '../Input/Input';
import Select from '../Select/Select';
import { fieldFormErrorMessages } from '../SignUpForm/errorMessages';
import { validate } from '../SignUpForm/validation';

interface IAddressFormProps {
    address: IAddress;
}

const AddressForm: FC<IAddressFormProps> = ({ address }) => {
    const dispatch = useDispatch();
    const { user } = useSelector((state: AppState) => state.currentUser);
    const [addressFormState, updateAddressFormState] = useState<IAddressForm>(
        () => resetAddressForm(address, user._id),
    );
    const [errorMessage, setErrorMessage] = useState<{
        field: string;
        message: string;
    }>({ field: '', message: '' });
    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        dispatch(updateUserAddress(addressFormState));
    };
    const handleChange = (event: any) => {
        if (
            event.target.value.length > 2 &&
            validate[event.target.name] &&
            validate[event.target.name](event.target.value)
        ) {
            setErrorMessage({
                field: event.target.name,
                message: fieldFormErrorMessages[event.target.name],
            });
            updateAddressFormState({
                ...addressFormState,
                [event.target.name]: event.target.value,
            } as Pick<IAddressForm, keyof IAddressForm>);
        } else {
            setErrorMessage({
                field: '',
                message: '',
            });
            updateAddressFormState({
                ...addressFormState,
                [event.target.name]: event.target.value,
            } as Pick<IAddressForm, keyof IAddressForm>);
        }
    };
    return (
        <Card>
            <Form handleSubmit={(event: FormEvent) => handleSubmit(event)}>
                <div className="row p-4">
                    <div className="col-12">
                        <p>Vaaditut kentät ovat merkitty *</p>
                        {addressFormFields.map((formField: IFormField) => {
                            return (
                                <>
                                    {formField.type === 'select' ? (
                                        <Select
                                            key={formField.id}
                                            errorText={
                                                errorMessage.field ===
                                                    formField.name &&
                                                errorMessage.message
                                            }
                                            formField={formField}
                                            value={addressFormState.country}
                                            handleChange={(event: any) =>
                                                handleChange(event)
                                            }
                                        />
                                    ) : (
                                        <Input
                                            key={formField.id}
                                            formField={formField}
                                            handleChange={(event: any) =>
                                                handleChange(event)
                                            }
                                            value={
                                                addressFormState[formField.name]
                                            }
                                            errorText={
                                                errorMessage.field ===
                                                    formField.name &&
                                                errorMessage.message
                                            }
                                        />
                                    )}
                                </>
                            );
                        })}
                        <Button
                            type="submit"
                            disabled={errorMessage.message ? true : false}
                            color="warning"
                        >
                            Tallenna
                        </Button>
                    </div>
                </div>
            </Form>
        </Card>
    );
};

export default AddressForm;
