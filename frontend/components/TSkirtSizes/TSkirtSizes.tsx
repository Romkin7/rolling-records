import React, { FC } from 'react';
import { ISize } from '../../../@types';
import RadioButton from '../RadioButton/RadioButton';
import styles from './TSkirtSizes.module.scss';

interface ITSkirtSizesProps {
    sizes: ISize[];
}

const TSkirtSizes: FC<ITSkirtSizesProps> = ({ sizes }) => {
    return (
        <div className={styles.tskirtSizes}>
            {sizes.length &&
                sizes.map((size: ISize) => {
                    return (
                        <button
                            tabIndex={0}
                            key={size.size}
                            disabled={size.quantity < 1 ? true : false}
                            className={`${styles.size} ${
                                size.quantity < 1 && styles.disabled
                            }`}
                        >
                            {size.size}
                            <input
                                type="radio"
                                name="size"
                                value={size.size}
                                style={{ display: 'none' }}
                            />
                        </button>
                    );
                })}
        </div>
    );
};

export default TSkirtSizes;
