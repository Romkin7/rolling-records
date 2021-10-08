import React, { FC, FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { passwordRecoveryFormFields } from '../../data/forms';
import { requestPasswordReset } from '../../store/actions/userAuthActions';
import { IFormField, IResetPasswordForm } from '../../types';
import { resetPasswordRecoveryForm } from '../../utils/reset';
import Button from '../Button/Button';
import Card from '../Card/Card';
import Form from '../Form/Form';
import Input from '../Input/Input';

const PasswordRecoveryForm: FC = () => {
    const dispatch = useDispatch();
    const [passwordRecoverFormState, updatePasswordRecoveryFormState] =
        useState<IResetPasswordForm>(() => resetPasswordRecoveryForm());
    const [step, setStep] = useState<number>(1);
    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();
        dispatch(requestPasswordReset(passwordRecoverFormState));
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleChange = (event: any) => {
        updatePasswordRecoveryFormState({
            ...passwordRecoverFormState,
            [event.target.name]: event.target.value,
        } as Pick<IResetPasswordForm, keyof IResetPasswordForm>);
    };
    return (
        <Card>
            <Form handleSubmit={(event: FormEvent) => handleSubmit(event)}>
                <div className="row p-4">
                    <div className="col-12">
                        {step === 1 && (
                            <>
                                {passwordRecoveryFormFields.partOne.map(
                                    (formField: IFormField) => {
                                        return (
                                            <Input
                                                formField={formField}
                                                handleChange={(event: any) =>
                                                    handleChange(event)
                                                }
                                                value={
                                                    passwordRecoveryFormFields[
                                                        formField.name
                                                    ]
                                                }
                                            />
                                        );
                                    },
                                )}
                                <Button type="submit" color="success">
                                    Palauta
                                </Button>
                            </>
                        )}
                        {step === 2 && (
                            <>
                                {passwordRecoveryFormFields.partTwo.map(
                                    (formField: IFormField) => {
                                        return (
                                            <Input
                                                formField={formField}
                                                handleChange={(event: any) =>
                                                    handleChange(event)
                                                }
                                                value={
                                                    passwordRecoveryFormFields[
                                                        formField.name
                                                    ]
                                                }
                                            />
                                        );
                                    },
                                )}
                                <Button type="submit" color="success">
                                    Varmenna pinkoodi
                                </Button>
                            </>
                        )}
                        {step === 3 && (
                            <>
                                {passwordRecoveryFormFields.partThree.map(
                                    (formField: IFormField) => {
                                        return (
                                            <Input
                                                formField={formField}
                                                handleChange={(event: any) =>
                                                    handleChange(event)
                                                }
                                                value={
                                                    passwordRecoveryFormFields[
                                                        formField.name
                                                    ]
                                                }
                                            />
                                        );
                                    },
                                )}
                                <Button type="submit" color="success">
                                    Palauta
                                </Button>
                            </>
                        )}
                    </div>
                </div>
            </Form>
        </Card>
    );
};

export default PasswordRecoveryForm;
