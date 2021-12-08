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
import { fieldFormErrorMessages } from '../SignUpForm/errorMessages';
import { validate } from '../SignUpForm/validation';

const PasswordRecoveryPincodeForm: FC = () => {
    const dispatch = useDispatch();
    const [passwordRecoveryFormState, updatePasswordRecoveryFormState] =
        useState<IResetPasswordForm>(() => resetPasswordRecoveryForm());
    const [errorMessage, setErrorMessage] = useState<{
        field: string;
        message: string;
    }>({ field: '', message: '' });
    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();
        dispatch(requestPasswordReset(passwordRecoveryFormState));
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleChange = (event: any) => {
        if (
            event.target.value.length > 2 &&
            validate[event.target.name] &&
            validate[event.target.name](
                event.target.value,
                passwordRecoveryFormState.email,
            )
        ) {
            setErrorMessage({
                field: event.target.name,
                message: fieldFormErrorMessages[event.target.name],
            });
            updatePasswordRecoveryFormState({
                ...passwordRecoveryFormState,
                [event.target.name]: event.target.value,
            } as Pick<IResetPasswordForm, keyof IResetPasswordForm>);
        } else {
            setErrorMessage({
                field: '',
                message: '',
            });
            updatePasswordRecoveryFormState({
                ...passwordRecoveryFormState,
                [event.target.name]: event.target.value,
            } as Pick<IResetPasswordForm, keyof IResetPasswordForm>);
        }
    };
    return (
        <Card>
            <Form handleSubmit={(event: FormEvent) => handleSubmit(event)}>
                <div className="row p-4">
                    <div className="col-12">
                        <p>Vaaditut kentät ovat merkitty *</p>
                        <h3>Vahvista pinkoodi</h3>

                        {passwordRecoveryFormFields.partTwo.map(
                            (formField: IFormField) => {
                                return (
                                    <Input
                                        formField={formField}
                                        handleChange={(event: any) =>
                                            handleChange(event)
                                        }
                                        errorText={
                                            errorMessage.field ===
                                                formField.name &&
                                            errorMessage.message
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
                    </div>
                </div>
            </Form>
        </Card>
    );
};

export default PasswordRecoveryPincodeForm;
