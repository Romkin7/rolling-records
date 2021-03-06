import React, { FC, FormEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { passwordRecoveryFormFields } from '../../data/forms';
import { updateResetPasswordForm } from '../../store/actions/resetPasswordFormActions';
import { requestResetPasswordPincode } from '../../store/actions/userAuthActions';
import { AppState } from '../../store/store';
import { IFormField, IResetPasswordForm } from '../../types';
import Button from '../Button/Button';
import Card from '../Card/Card';
import Form from '../Form/Form';
import Input from '../Input/Input';
import { fieldFormErrorMessages } from '../SignUpForm/errorMessages';
import { validate } from '../SignUpForm/validation';

const PasswordRecoveryEmailForm: FC = () => {
    const dispatch = useDispatch();
    const { resetPasswordForm } = useSelector(
        (state: AppState) => state.resetPasswordForm,
    );
    const [errorMessage, setErrorMessage] = useState<{
        field: string;
        message: string;
    }>({ field: '', message: '' });
    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();
        dispatch(requestResetPasswordPincode(resetPasswordForm));
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleChange = (event: any) => {
        if (
            event.target.value.length > 2 &&
            validate[event.target.name] &&
            validate[event.target.name](
                event.target.value,
                resetPasswordForm.email,
            )
        ) {
            setErrorMessage({
                field: event.target.name,
                message: fieldFormErrorMessages[event.target.name],
            });
            dispatch(
                updateResetPasswordForm({
                    [event.target.name]: event.target.value,
                } as Pick<IResetPasswordForm, keyof IResetPasswordForm>),
            );
        } else {
            setErrorMessage({
                field: '',
                message: '',
            });
            dispatch(
                updateResetPasswordForm({
                    [event.target.name]: event.target.value,
                } as Pick<IResetPasswordForm, keyof IResetPasswordForm>),
            );
        }
    };
    return (
        <Card>
            <Form handleSubmit={(event: FormEvent) => handleSubmit(event)}>
                <div className="row p-4">
                    <div className="col-12">
                        <p>Vaaditut kent??t ovat merkitty *</p>
                        <h3>Palauta salasana</h3>
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
                            Vahvista
                        </Button>
                    </div>
                </div>
            </Form>
        </Card>
    );
};

export default PasswordRecoveryEmailForm;
