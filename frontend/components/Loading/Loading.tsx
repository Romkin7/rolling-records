import React, { FC } from 'react';
import styles from './Spinner.module.scss';

const Loading: FC = () => {
    return (
        <div className={styles.spinnerContainer}>
            <h2>Rolling Records is rolling your Records...</h2>
            <div className={styles.spinner}></div>
        </div>
    );
};

export default Loading;
