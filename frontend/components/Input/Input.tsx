import React, { FC } from 'react';
import { IFormField } from '../../types';

interface IInputProps {
    formField: IFormField;
    handleChange: (event: any) => void;
}

const Input: FC<IInputProps> = ({ formField, handleChange }) => {
    const { className, className2, id, name, label, type } = formField;
    return (
        <div className="mb-3">
            <label htmlFor={id} className={className}>
                {label}
            </label>
            <input
                id={id}
                className={className2}
                type={type}
                name={name}
                onInput={(event: any) => handleChange(event)}
            />
        </div>
    );
};

export default Input;
