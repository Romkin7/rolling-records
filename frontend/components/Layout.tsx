import React, { FC } from 'react';
import styles from '../sass/Main.module.scss';

const Layout: FC = ({ children }) => {
    return (
        <div className={styles.body}>
            <main className={styles.main}>{children}</main>
        </div>
    );
};

export default Layout;
