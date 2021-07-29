import React, { FC } from 'react';
import { ButtonTypes } from '../../types';

interface IButtonProps {
    type: ButtonTypes;
    color: string;
}

const Button: FC<IButtonProps> = ({ type, color, children }) => {
    return (
        <button type={type} className={'btn btn-' + color}>
            {children}
        </button>
    );
};

export default Button;
