import React, { FC } from 'react';
import { ButtonSizes, Icons } from '../../types';
import { iconsData } from '../Icons/iconsData';
import styles from './Icon.module.scss';

interface IIconProps {
    icon: Icons;
    size: ButtonSizes;
    color?: '#fff' | '#434343';
    itemsTotal?: number;
}

const Icon: FC<IIconProps> = ({ icon, color = '#fff', itemsTotal, size }) => {
    return (
        <span className={`${styles.icon} positon-relative ${styles[size]}`}>
            {iconsData[icon]}
            {icon === 'cart' && (
                <span className="position-absolute top-5 start-1 translate-middle badge rounded-pill bg-light text-dark">
                    {itemsTotal}
                    <span className="visually-hidden">
                        carts total quantity
                    </span>
                </span>
            )}
        </span>
    );
};

export default Icon;
