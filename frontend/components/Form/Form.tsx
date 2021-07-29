import React, { FC, FormEvent, useState } from 'react';
import { IFormField, Methods } from '../../types';
import Button from '../Button/Button';
import Input from '../Input/Input';

interface IFormProps {
    formFields: IFormField[];
    buttonText: string;
    method: Methods;
    url: string;
}

const Form: FC<IFormProps> = ({ formFields, buttonText, url, method }) => {
    const [loginFormState, updateLoginFormState] = useState<any>({
        email: '',
        password: '',
    });

    const handleChange = (event: any) => {
        updateLoginFormState({ [event.target.name]: event.target.value });
    };

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();
        // Default options are marked with *
        const response = await fetch(url, {
            method: method, // *GET, POST, PUT, DELETE, etc.
            mode: 'no-cors', // no-cors, *cors, same-origin
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
