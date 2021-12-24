import React, { FC } from 'react';
import { IFormField } from '../../types';
import styles from './RadioButton.module.scss';

interface IRadioButtonProps {
    formField: IFormField;
    handleChange: (event: any) => void;
    checked: boolean;
    secondaryText?: string;
}

const RadioButton: FC<IRadioButtonProps> = ({
    formField,
    secondaryText,
    checked,
    handleChange,
}) => {
    const { id, label, type, name, disabled, required, value } = formField;
    return (
        <div className={`form-check ${styles.radioButton}`}>
            <input
                className="form-check-input"
                type={type}
                name={name}
                value={value}
                id={id}
                required={required}
                disabled={disabled}
                checked={checked}
                onClick={handleChange}
            />
            <label className="form-check-label" htmlFor={id}>
                {label}
            </label>
            {secondaryText && (
                <p className={styles.secondaryText}>{secondaryText}</p>
            )}
        </div>
    );
};

export default RadioButton;
