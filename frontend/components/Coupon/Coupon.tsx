import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useCoupon } from '../../store/actions/cartActions';
import { AppState } from '../../store/store';
import Button from '../Button/Button';
import Card from '../Card/Card';
import styles from './Coupon.module.scss';

const Coupon: FC = () => {
    const dispatch = useDispatch();
    const { user } = useSelector((state: AppState) => state.currentUser);
    const modalOpen = useSelector((state: AppState) => state.modalOpen);
    const handleClick = (event: any) => {
        event.preventDefault();
        dispatch(useCoupon());
    };
    return (
        <div className={styles.couponWrapper}>
            <Card>
                <div className={styles.coupon}>
                    <div className={styles.titlePart}>
                        <h4>Bonuskuponki</h4>
                    </div>
                    <div className={styles.mainPart}>
                        <h2>
                            -
                            {user.bonus_system.coupons &&
                                user.bonus_system.coupons[0].value}
                            €
                        </h2>
                        <p>Rolling Records</p>
                        <Button
                            type="button"
                            color="success"
                            handleClick={(event: any) => handleClick(event)}
                        >
                            Käytä
                        </Button>
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default Coupon;
