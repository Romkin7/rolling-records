import React, { FC } from 'react';
import { ModButtonMethods } from '../../types';
import Icon from '../Icon/Icon';
import styles from './ModButtons.module.scss';

interface IModButtonProps {
    itemId: string;
    method: ModButtonMethods;
    handleClick: (event: any) => void;
}

const ModButton: FC<IModButtonProps> = ({ method, handleClick }) => {
    return (
        <button
            onClick={handleClick}
            className={`btn btn-${method === 'remove' ? 'danger' : 'light'} ${
                styles.modButton
            }`}
        >
            <Icon icon={method} size="xs" />
        </button>
    );
};

export default ModButton;
