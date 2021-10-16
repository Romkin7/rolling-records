import React, { FC } from 'react';
import { ButtonTypes } from '../../types';
import styles from './Button.module.scss';

interface IButtonProps {
    type: ButtonTypes;
    color: string;
    disabled?: boolean;
    handleClick?: (event: any) => void;
}

const Button: FC<IButtonProps> = ({
    type,
    color,
    children,
    disabled,
    handleClick,
}) => {
    return (
        <button
            type={type}
            disabled={disabled}
            className={`btn btn-${color} ${styles.button}`}
            onClick={handleClick}
        >
            {children}
        </button>
    );
};

export default Button;
