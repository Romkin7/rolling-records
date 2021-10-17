import React, { FC, FormEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { contactInfoFormFields } from '../../data/forms';
import { updateUserData } from '../../store/actions/userAuthActions';
import { AppState } from '../../store/store';
import { IContactInfo, IContactInfoForm, IFormField } from '../../types';
import { resetContactInfoForm } from '../../utils/reset';
import Button from '../Button/Button';
import Card from '../Card/Card';
import Form from '../Form/Form';
import Input from '../Input/Input';
import { fieldFormErrorMessages } from '../SignUpForm/errorMessages';
import { validate } from '../SignUpForm/validation';

interface IContactInfoFormProps {
    contactInfo: IContactInfo;
}

const ContactInfoForm: FC<IContactInfoFormProps> = ({ contactInfo }) => {
    const dispatch = useDispatch();
    const { user } = useSelector((state: AppState) => state.currentUser);
    const [contactInfoFormState, updateContactInfoFormState] =
        useState<IContactInfoForm>(() =>
            resetContactInfoForm(contactInfo, user._id),
        );
    const [errorMessage, setErrorMessage] = useState<{
        field: string;
        message: string;
    }>({ field: '', message: '' });
    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        dispatch(updateUserData(contactInfoFormState));
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
            updateContactInfoFormState({
                ...contactInfoFormState,
                [event.target.name]: event.target.value,
            } as Pick<IContactInfoForm, keyof IContactInfoForm>);
        } else {
            setErrorMessage({
                field: '',
                message: '',
            });
            updateContactInfoFormState({
                ...contactInfoFormState,
                [event.target.name]: event.target.value,
            } as Pick<IContactInfoForm, keyof IContactInfoForm>);
        }
    };
    return (
        <Card>
            <Form handleSubmit={(event: FormEvent) => handleSubmit(event)}>
                <div className="row p-4">
                    <div className="col-12">
                        <p>Vaaditut kentät ovat merkitty *</p>
                        {contactInfoFormFields.map((formField: IFormField) => {
                            return (
                                <Input
                                    key={formField.id}
                                    formField={formField}
                                    handleChange={(event: any) =>
                                        handleChange(event)
                                    }
                                    value={contactInfoFormState[formField.name]}
                                    errorText={
                                        errorMessage.field === formField.name &&
                                        errorMessage.message
                                    }
                                />
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

export default ContactInfoForm;
