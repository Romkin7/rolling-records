import React, { FC, FormEvent, useState } from 'react';
import { IFormField } from '../../types';
import { Methods } from '../../../@types';
import Button from '../Button/Button';
import Input from '../Input/Input';

interface IFormProps {
    formFields: IFormField[];
    buttonText: string;
    method: Methods;
    url: string;
}

interface ILoginFormState {
    email: string;
    password: string;
}

const Form: FC<IFormProps> = ({ formFields, buttonText, url, method }) => {
    const [loginFormState, updateLoginFormState] = useState<ILoginFormState>({
        email: '',
        password: '',
    });
    console.log(loginFormState);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleChange = (event: any) => {
        updateLoginFormState({
            ...loginFormState,
            [event.target.name]: event.target.value,
        } as Pick<ILoginFormState, keyof ILoginFormState>);
    };

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();
        // Default options are marked with *
        const response = await fetch(url, {
            method: method, // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'default', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json',
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer-when-downgrade', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify(loginFormState), // body data type must match "Content-Type" header
        });
        const res = await response.json();
        console.log(res);
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
