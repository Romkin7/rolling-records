import React, { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
    addToCart,
    removeFromCart,
    substractFromCart,
} from '../../store/actions/cartActions';
import { ModButtonMethods } from '../../types';
import { updateCartItemsQuantity } from '../../utils/utils';
import ModButton from './ModButton';
import styles from './ModButtons.module.scss';

interface IModButtonsProps {
    itemId: string;
    totalQuantity: number;
    itemsTotalQuantity: number;
}

const ModButtons: FC<IModButtonsProps> = ({
    itemId,
    totalQuantity,
    itemsTotalQuantity,
}) => {
    const [amount, setAmount] = useState<number>(() => totalQuantity);
    const dispatch = useDispatch();
    const handleClick = (
        event: any,
        itemId: string,
        method: ModButtonMethods,
        totalQuantity?: number,
        itemsTotalQuantity?: number,
    ) => {
        event.preventDefault();
        const quantity = updateCartItemsQuantity(
            itemsTotalQuantity,
            totalQuantity,
            method,
        );
        if (method === 'plus') {
            dispatch(addToCart(itemId, quantity));
        } else if (method === 'minus') {
            dispatch(substractFromCart(itemId, quantity));
        } else {
            dispatch(removeFromCart(itemId));
        }
    };
    return (
        <div className={styles.modButtons}>
            <ModButton
                method="minus"
                itemId={itemId}
                handleClick={(event: any) =>
                    handleClick(
                        event,
                        itemId,
                        'minus',
                        totalQuantity,
                        itemsTotalQuantity,
                    )
                }
            />
            <input type="number" name="amount" value={} />
            <ModButton
                method="plus"
                itemId={itemId}
                handleClick={(event: any) =>
                    handleClick(
                        event,
                        itemId,
                        'plus',
                        totalQuantity,
                        itemsTotalQuantity,
                    )
                }
            />
            <ModButton
                method="remove"
                itemId={itemId}
                handleClick={(event: any) =>
                    handleClick(event, itemId, 'remove')
                }
            />
        </div>
    );
};

export default ModButtons;
// 1026,30