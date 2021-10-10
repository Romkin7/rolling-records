import React, { FC, useState } from 'react';
import { IFormField } from '../../types';
import styles from './Select.module.scss';

interface ISelectProps {
    formField: IFormField;
    handleChange: (event: any) => void;
    value: string;
    errorText: string;
}

const Select: FC<ISelectProps> = ({
    formField,
    value,
    handleChange,
    errorText,
}) => {
    const [showOtherCountry, setShowOtherCountry] = useState<boolean>(
        () => false,
    );
    const changeHandler = (event: any) => {
        setShowOtherCountry(() =>
            event.target.value === 'World' ? true : false,
        );
        handleChange(event);
    };
    const { name, label, id, options, required } = formField;
    return (
        <div className={`mb-3 ${styles.wrapper}`}>
            <label htmlFor={id} className="form-label">
                {label}
            </label>
            <select
                name={name}
                id={id}
                required={required}
                className={`form-control ${styles.select}`}
                onChange={changeHandler}
            >
                <option value={`${value || 'Finland'}`}>
                    {value || 'Finland'}
                </option>
                {options.map((option: any) => {
                    return <option key={option}>{option}</option>;
                })}
            </select>
            {showOtherCountry && (
                <input
                    type="text"
                    autoFocus={true}
                    name={name}
                    required={required}
                    value={value}
                    onInput={handleChange}
                    className={`form-control ${styles.select}`}
                />
            )}
            {errorText && <p className={styles.errorText}>{errorText}</p>}
        </div>
    );
};

export default Select;
