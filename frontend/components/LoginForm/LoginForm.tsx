import React, { FC, FormEvent, useState } from 'react';
import { IFormField } from '../../types';
import Button from '../Button/Button';
import Input from '../Input/Input';
import { useDispatch } from 'react-redux';
import { fetchUser } from '../../store/actions/userAuthActions';
import Form from '../Form/Form';
import { loginFormFields } from '../../data/forms';
import Card from '../Card/Card';

interface ILoginFormStateProps {
    email: string;
    password: string;
}

const LoginForm: FC = () => {
    const [loginFormState, updateLoginFormState] =
        useState<ILoginFormStateProps>({
            email: '',
            password: '',
        });

    const dispatch = useDispatch();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleChange = (event: any) => {
        updateLoginFormState({
            ...loginFormState,
            [event.target.name]: event.target.value,
        } as Pick<ILoginFormStateProps, keyof ILoginFormStateProps>);
    };

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();
        dispatch(
            fetchUser({
                email: event.target[0].value,
                password: event.target[1].value,
            }),
        );
    };
    const formFields = loginFormFields;
    return (
        <Card>
            <Form handleSubmit={(event: FormEvent) => handleSubmit(event)}>
                <div className="row p-4">
                    <div className="col-12">
                        {formFields.length &&
                            formFields.map((formfield: IFormField) => {
                                return (
                                    <Input
                                        formField={formfield}
                                        key={formfield.id}
                                        handleChange={handleChange}
                                        value={loginFormState[formfield.name]}
                                    />
                                );
                            })}
                        <div className="my-3">
                            <Button type="submit" color="success">
                                Kirjaudu
                            </Button>
                        </div>
                    </div>
                </div>
            </Form>
        </Card>
    );
};

export default LoginForm;
