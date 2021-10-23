import React, { FC } from 'react';
import { IFormField } from '../../types';

interface IRadioButtonProps {
    formField: IFormField;
    value: boolean;
    handleChange: (event: any) => void;
}

const RadioButton: FC<IRadioButtonProps> = ({
    formField,
    value,
    handleChange,
}) => {
    const { id, label, type, name, disabled, required } = formField;
    return (
        <div className="form-check">
            <input
                className="form-check-input"
                type={type}
                name={name}
                id={id}
                required={required}
                disabled={disabled}
                checked={value}
                onChange={(event: any) => handleChange(event)}
            />
            <label className="form-check-label" htmlFor={id}>
                {label}
            </label>
        </div>
    );
};

export default RadioButton;
