import React, { FC, FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fieldFormErrorMessages } from './errorMessages';
import { signUpFormFields } from '../../data/forms';
import { signUpUser } from '../../store/actions/userAuthActions';
import { IFormField, ISignUpForm } from '../../types';
import { resetSignUpForm } from '../../utils/reset';
import Button from '../Button/Button';
import Card from '../Card/Card';
import Form from '../Form/Form';
import Input from '../Input/Input';
import { validate } from './validation';
import Checkbox from '../Checkbox/Checkbox';
import Recaptha from '../Recpatha/Recaptha';
import Select from '../Select/Select';

const SignUpForm: FC = () => {
    const [signUpFormState, updateSignUpFormState] = useState<ISignUpForm>(
        resetSignUpForm(),
    );
    const [errorMessage, setErrorMessage] = useState<{
        field: string;
        message: string;
    }>({ field: '', message: '' });
    const dispatch = useDispatch();
    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        dispatch(signUpUser(signUpFormState));
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleChange = (event: any) => {
        if (
            event.target.value.length > 2 &&
            validate[event.target.name] &&
            validate[event.target.name](
                event.target.value,
                signUpFormState.email,
            )
        ) {
            setErrorMessage({
                field: event.target.name,
                message: fieldFormErrorMessages[event.target.name],
            });
            updateSignUpFormState({
                ...signUpFormState,
                [event.target.name]: event.target.value,
            } as Pick<ISignUpForm, keyof ISignUpForm>);
        } else {
            setErrorMessage({
                field: '',
                message: '',
            });
            updateSignUpFormState({
                ...signUpFormState,
                [event.target.name]: event.target.value,
            } as Pick<ISignUpForm, keyof ISignUpForm>);
        }
    };
    console.log(signUpFormState);
    return (
        <Card>
            <Form handleSubmit={(event: FormEvent) => handleSubmit(event)}>
                <div className="row p-4">
                    <div className="col-12">
                        <p>Vaaditut kentät ovat merkitty *</p>
                        <h3>Nimi- ja yhteystiedot</h3>
                        {signUpFormFields.partOne.map(
                            (formField: IFormField) => {
                                return (
                                    <Input
                                        key={formField.id}
                                        formField={formField}
                                        handleChange={(event: any) =>
                                            handleChange(event)
                                        }
                                        value={signUpFormState[formField.name]}
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
                        {signUpFormFields.partTwo.map(
                            (formField: IFormField) => {
                                return (
                                    <>
                                        {formField.type !== 'select' ? (
                                            <Input
                                                key={formField.id}
                                                formField={formField}
                                                handleChange={(event: any) =>
                                                    handleChange(event)
                                                }
                                                value={
                                                    signUpFormState[
                                                        formField.name
                                                    ]
                                                }
                                                errorText={
                                                    errorMessage.field ===
                                                        formField.name &&
                                                    errorMessage.message
                                                }
                                            />
                                        ) : (
                                            <Select
                                                key={formField.id}
                                                formField={formField}
                                                value={signUpFormState.country}
                                                errorText={errorMessage.message}
                                                handleChange={(event: any) =>
                                                    handleChange(event)
                                                }
                                            />
                                        )}
                                    </>
                                );
                            },
                        )}
                        <h3>Kirjautumistiedot</h3>
                        {signUpFormFields.partThree.map(
                            (formField: IFormField) => {
                                return (
                                    <Input
                                        key={formField.id}
                                        formField={formField}
                                        handleChange={(event: any) =>
                                            handleChange(event)
                                        }
                                        value={signUpFormState[formField.name]}
                                        errorText={
                                            errorMessage.field ===
                                                formField.name &&
                                            errorMessage.message
                                        }
                                    />
                                );
                            },
                        )}
                        <h3>Käyttöehdot ja uutiskirje</h3>
                        {signUpFormFields.partFour.map(
                            (formField: IFormField) => {
                                return (
                                    <Checkbox
                                        key={formField.id}
                                        formField={formField}
                                        handleChange={(event: any) =>
                                            handleChange(event)
                                        }
                                        checked={
                                            signUpFormState[formField.name]
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
                    </div>
                    {typeof window !== 'undefined' && (
                        <div className="col-12 my-3">
                            <Recaptha />
                        </div>
                    )}
                    <div className="col-12 my-3">
                        <Button type="submit" color="success">
                            Rekisteröidy
                        </Button>
                    </div>
                </div>
            </Form>
        </Card>
    );
};

export default SignUpForm;
