import React, { FC, FormEvent, useState } from 'react';
import { IFormField } from '../../types';
import { Methods } from '../../../@types';
import Button from '../Button/Button';
import Input from '../Input/Input';
import { useDispatch } from 'react-redux';
import { fetchUser } from '../../store/actions/userAuthActions';

interface IFormProps {
    formFields: IFormField[];
    buttonText: string;
    method: Methods;
    url: string;
}

interface ILoginFormStateProps {
    email: string;
    password: string;
}

type LoginFormProps = ILoginFormStateProps & IFormProps;

const Form: FC<LoginFormProps> = ({ formFields, buttonText }) => {
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
    return (
        <form onSubmit={handleSubmit}>
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
                    {buttonText}
                </Button>
            </div>
        </form>
    );
};

export default Form;
