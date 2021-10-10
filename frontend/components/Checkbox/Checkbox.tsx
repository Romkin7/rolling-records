import React, { FC } from 'react';
import { IFormField } from '../../types';
import styles from './Checkbox.module.scss';

interface ICheckboxProps {
    formField: IFormField;
    errorText: string;
    handleChange: (event: any) => void;
    checked: boolean;
}

const Checkbox: FC<ICheckboxProps> = ({
    formField,
    handleChange,
    checked,
    errorText,
}) => {
    const { id, required, label, type, name } = formField;
    return (
        <div className={`form-check ${styles.checkbox}`}>
            <input
                className="form-check-input"
                type={type}
                onChange={handleChange}
                required={required}
                checked={checked}
                name={name}
                id={id}
            />
            <label className="form-check-label" htmlFor={id}>
                {label}
            </label>
            <p className={styles.errorText}>{errorText}</p>
        </div>
    );
};

export default Checkbox;
