import React, { FC } from 'react';
import { IFormField } from '../../types';
import styles from './Input.module.scss';

interface IInputProps {
    formField: IFormField;
    handleChange: (event: any) => void;
    value: string;
    errorText?: string;
}

const Input: FC<IInputProps> = ({
    formField,
    handleChange,
    value,
    errorText,
}) => {
    const { id, name, label, type } = formField;
    return (
        <div className={`mb-3 ${styles.wrapper}`}>
            <label htmlFor={id} className="form-label">
                {label}
            </label>
            <input
                id={id}
                className={`form-control ${styles.input}`}
                type={type}
                name={name}
                value={value}
                onInput={(event: any) => handleChange(event)}
            />
            {errorText && <p className={styles.errorText}>{errorText}</p>}
        </div>
    );
};

export default Input;
