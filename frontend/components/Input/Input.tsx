import React, { FC } from 'react';
import { IFormField } from '../../types';
import styles from './Input.module.scss';

interface IInputProps {
    formField: IFormField;
    handleChange: (event: any) => void;
    value: string;
}

const Input: FC<IInputProps> = ({ formField, handleChange, value }) => {
    const { className, className2, id, name, label, type } = formField;
    return (
        <div className={`mb-3 ${styles.input}`}>
            <label htmlFor={id} className={className}>
                {label}
            </label>
            <input
                id={id}
                className={className2}
                type={type}
                name={name}
                value={value}
                onInput={(event: any) => handleChange(event)}
            />
            <p className={styles.errorText}></p>
        </div>
    );
};

export default Input;
