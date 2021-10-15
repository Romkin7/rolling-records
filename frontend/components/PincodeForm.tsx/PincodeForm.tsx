import React, { FC, FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { pincodeFormFields } from '../../data/forms';
import { IFormField, IPincodeForm } from '../../types';
import { resetPincodeForm } from '../../utils/reset';
import Button from '../Button/Button';
import Card from '../Card/Card';
import Form from '../Form/Form';
import Input from '../Input/Input';
import { fieldFormErrorMessages } from '../SignUpForm/errorMessages';

const PincodeForm: FC = () => {
    const [pincodeFormState, updatePincodeFormState] = useState<IPincodeForm>(
        resetPincodeForm(),
    );
    const [errorMessage, setErrorMessage] = useState<{
        field: string;
        message: string;
    }>({ field: '', message: '' });
    const dispatch = useDispatch();
    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
    };
    const handleChange = (event: any) => {
        if (event.target.value.length > 4) {
            setErrorMessage({
                field: event.target.name,
                message: fieldFormErrorMessages[event.target.name],
            });
            updatePincodeFormState({
                ...pincodeFormState,
                [event.target.name]: event.target.value,
            } as Pick<IPincodeForm, keyof IPincodeForm>);
        } else {
            setErrorMessage({
                field: '',
                message: '',
            });
            updatePincodeFormState({
                ...pincodeFormState,
                [event.target.name]: event.target.value,
            } as Pick<IPincodeForm, keyof IPincodeForm>);
        }
    };
    return (
        <Card>
            <Form handleSubmit={(event: FormEvent) => handleSubmit(event)}>
                <div className="row p-4">
                    <div className="col-12">
                        <p>Vaaditut kentät ovat merkitty *</p>
                        <h3>Käyttäjätilin varmennus Pinkodi</h3>
                        {pincodeFormFields.map((formField: IFormField) => {
                            return (
                                <Input
                                    key={formField.id}
                                    value={pincodeFormState.pincode}
                                    errorText={errorMessage.message}
                                    formField={formField}
                                    handleChange={(event: any) =>
                                        handleChange(event)
                                    }
                                />
                            );
                        })}
                        <Button type="submit" color="success">
                            Varmenna pinkoodi
                        </Button>
                    </div>
                </div>
            </Form>
        </Card>
    );
};

export default PincodeForm;
