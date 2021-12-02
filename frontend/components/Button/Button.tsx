import React, { FC } from 'react';
import { ButtonColors, ButtonTypes } from '../../types';
import styles from './Button.module.scss';
import clsx from 'clsx';
import classNames from 'classnames';

interface IButtonProps {
    type: ButtonTypes;
    color: ButtonColors;
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
    const buttonStyles = clsx({
        [styles[`${color}`]]: true,
    });
    return (
        <button
            type={type}
            disabled={disabled}
            className={classNames('btn', styles.button, buttonStyles)}
            onClick={handleClick}
        >
            {children}
        </button>
    );
};

export default Button;
