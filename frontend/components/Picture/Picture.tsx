import React, { FC } from 'react';
import styles from './Picture.module.scss';

interface IPictureProps {
    src: string;
    alt: string;
    title?: string;
}

const Picture: FC<IPictureProps> = ({ src, alt, title }) => {
    return (
        <picture className={styles.picture}>
            <img src={src} alt={alt} title={title} />
        </picture>
    );
};

export default Picture;
