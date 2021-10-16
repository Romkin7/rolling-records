import React, { FC } from 'react';
import styles from '../sass/Main.module.scss';
import { useSelector } from 'react-redux';
import Sidebar from './Sidebar/Sidebar';
import { AppState } from '../store/store';
import ProtectedRoute from './HOC/ProtectedRoute';

const LayoutProfile: FC = ({ children }) => {
    const { user } = useSelector((state: AppState) => state.currentUser);
    return (
        <div className={`${styles.body} bg-light`}>
            <div className={`container-fluid ${styles.main}`}>
                <div className="row mx-0">
                    <div className={styles.sidebarWrapper}>
                        <Sidebar user={user} />
                    </div>
                    <div className={styles.mainWrapper}>
                        <main>{children}</main>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProtectedRoute(LayoutProfile);
