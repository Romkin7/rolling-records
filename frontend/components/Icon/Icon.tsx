import React, { FC } from 'react';
import { Icons } from '../../types';
import { iconsData } from '../Icons/iconsData';
import styles from './Icon.module.scss';

interface IIconProps {
    icon: Icons;
    color?: '#fff' | '#434343';
}

const Icon: FC<IIconProps> = ({ icon, color = '#fff' }) => {
    return <span className={`${styles.icon}`}>{iconsData[icon]}</span>;
};

export default Icon;
