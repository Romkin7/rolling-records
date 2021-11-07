import React, { FC, FormEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { contactFormFields } from '../../data/forms';
import { AppState } from '../../store/store';
import { IContactForm, IFormField } from '../../types';
import { resetContactForm } from '../../utils/reset';
import Card from '../Card/Card';
import Form from '../Form/Form';
import Input from '../Input/Input';
import Select from '../Select/Select';
import { fieldFormErrorMessages } from '../SignUpForm/errorMessages';
import { validate } from '../SignUpForm/validation';

const ContactForm: FC = () => {
    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
    };
    const dispatch = useDispatch();
    const { user } = useSelector((state: AppState) => state.currentUser);
    const [contactFormState, updateContactFormState] = useState<IContactForm>(
        () => resetContactForm(user),
    );
    const [errorMessage, setErrorMessage] = useState<{
        field: string;
        message: string;
    }>({ field: '', message: '' });
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
            updateContactFormState({
                ...contactFormState,
                [event.target.name]: event.target.value,
            } as Pick<IContactForm, keyof IContactForm>);
        } else {
            setErrorMessage({
                field: '',
                message: '',
            });
            updateContactFormState({
                ...contactFormState,
                [event.target.name]: event.target.value,
            } as Pick<IContactForm, keyof IContactForm>);
        }
    };

    return (
        <Card>
            <Form handleSubmit={(event: FormEvent) => handleSubmit(event)}>
                <div className="row p-4">
                    <div className="col-12">
                        <p>Vaaditut kentät ovat merkitty *</p>
                        {contactFormFields.map((formField: IFormField) => {
                            return (
                                <>
                                    {formField.type === 'select' ? (
                                        <Select
                                            formField={formField}
                                            key={formField.id}
                                            value={contactFormState.subject}
                                            handleChange={(event: any) =>
                                                handleChange(event)
                                            }
                                            errorText={errorMessage.message}
                                        />
                                    ) : (
                                        <Input
                                            formField={formField}
                                            key={formField.id}
                                            handleChange={(event: any) =>
                                                handleChange(event)
                                            }
                                            value={
                                                contactFormState[formField.name]
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
                    </div>
                </div>
            </Form>
        </Card>
    );
};

export default ContactForm;
