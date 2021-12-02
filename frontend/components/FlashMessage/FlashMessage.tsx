import React, { FC, useEffect } from 'react';
import { Icons, Variants } from '../../types';
import Icon from '../Icon/Icon';
import styles from './FlashMessage.module.scss';
import { useDispatch } from 'react-redux';
import { removeMessage } from '../../store/actions/messageActions';
import { resetFlashMessage } from '../../utils/reset';

interface IFlashMessageProps {
    icon: Icons;
    text: string;
    variant: Variants;
}

const FlashMessage: FC<IFlashMessageProps> = ({ icon, text, variant }) => {
    const dispatch = useDispatch();
    useEffect(() => {
        let timer = setTimeout(() => {
            dispatch(removeMessage(resetFlashMessage()));
        }, 6000);
        return () => {
            clearTimeout(timer);
        };
    }, []);
    return (
        <div
            className={`alert alert-${variant} d-flex align-items-center ${styles.flashMessage}`}
            role="alert"
        >
            <Icon icon={icon} size="xs" />
            <div>{text}</div>
        </div>
    );
};

export default FlashMessage;
