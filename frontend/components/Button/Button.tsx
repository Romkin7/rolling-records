import React, { FC } from 'react';
import { ButtonTypes } from '../../types';
import styles from './Button.module.scss';

interface IButtonProps {
    type: ButtonTypes;
    color: string;
}

const Button: FC<IButtonProps> = ({ type, color, children }) => {
    return (
        <button type={type} className={`btn btn-${color} ${styles.button}`}>
            {children}
        </button>
    );
};

export default Button;
