import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../store/store';
import Card from '../Card/Card';
import styles from './Coupon.module.scss';

const Coupon: FC = () => {
    const dispatch = useDispatch();
    const { user } = useSelector((state: AppState) => state.currentUser);
    const modalOpen = useSelector((state: AppState) => state.modalOpen);
    return (
        <div className={styles.couponWrapper}>
            <Card>
                <div className={styles.coupon}>
                    <div className={styles.titlePart}>Rolling Records</div>
                    <div className={styles.mainPart}>
                        <h2>
                            -
                            {user.bonus_system.coupons &&
                                user.bonus_system.coupons[0].value}
                            €
                        </h2>
                        <p>Bonuskuponki</p>
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default Coupon;
