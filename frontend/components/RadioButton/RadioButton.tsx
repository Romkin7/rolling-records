import React, { FC } from 'react';
import { IFormField } from '../../types';

interface IRadioButtonProps {
    formField: IFormField;
    handleChange: (event: any) => void;
    checked: boolean;
}

const RadioButton: FC<IRadioButtonProps> = ({
    formField,
    checked,
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
                checked={checked}
                onChange={(event: any) => handleChange(event)}
            />
            <label className="form-check-label" htmlFor={id}>
                {label}
            </label>
        </div>
    );
};

export default RadioButton;
