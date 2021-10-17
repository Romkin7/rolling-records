import React, { FC } from 'react';
import { cartHeaderItems, ICartItemHeader } from '../../data/cart';

const TableHead: FC = () => {
    return (
        <thead>
            <tr>
                {cartHeaderItems.map((cartHeaderItem: ICartItemHeader) => {
                    return (
                        <th
                            key={cartHeaderItem.id}
                            colSpan={cartHeaderItem.colSpan}
                        >
                            {cartHeaderItem.value}
                        </th>
                    );
                })}
            </tr>
        </thead>
    );
};

export default TableHead;
