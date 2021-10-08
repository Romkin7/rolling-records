import React, { FC, FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { signUpFormFields } from '../../data/forms';
import { signUpUser } from '../../store/actions/userAuthActions';
import { IFormField, ISignUpForm } from '../../types';
import { resetSignUpForm } from '../../utils/reset';
import Button from '../Button/Button';
import Card from '../Card/Card';
import Form from '../Form/Form';
import Input from '../Input/Input';

const SignUpForm: FC = () => {
    const [signUpFormState, updateSignUpFormState] = useState<ISignUpForm>(
        resetSignUpForm(),
    );
    const dispatch = useDispatch();
    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        dispatch(signUpUser(signUpFormState));
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleChange = (event: any) => {
        updateSignUpFormState({
            ...signUpFormState,
            [event.target.name]: event.target.value,
        } as Pick<ISignUpForm, keyof ISignUpForm>);
    };
    return (
        <Card>
            <Form handleSubmit={(event: FormEvent) => handleSubmit(event)}>
                <div className="row p-4">
                    <div className="col-12">
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
                                    />
                                );
                            },
                        )}
                        <h3>Osoitetiedot</h3>
                        {signUpFormFields.partTwo.map(
                            (formField: IFormField) => {
                                return (
                                    <Input
                                        key={formField.id}
                                        formField={formField}
                                        handleChange={(event: any) =>
                                            handleChange(event)
                                        }
                                        value={signUpFormState[formField.name]}
                                    />
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
                                    />
                                );
                            },
                        )}

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
