import React, { FC } from 'react';
import { cartHeaderItems, ICartItemHeader } from '../../data/cart';

const TableHead: FC = () => {
    return (
        <thead>
            <tr className="table_dark">
                {cartHeaderItems.map((cartHeaderItem: ICartItemHeader) => {
                    return (
                        <th key={cartHeaderItem.id}>{cartHeaderItem.value}</th>
                    );
                })}
            </tr>
        </thead>
    );
};

export default TableHead;
