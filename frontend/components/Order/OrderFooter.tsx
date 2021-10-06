import React, { FC } from 'react';
import Button from '../Button/Button';
import Icon from '../Icon/Icon';

const OrderFooter: FC = () => {
    const handleClick = (event: any) => {
        event.preventDefault();
        window.print();
    };
    return (
        <tfoot className="pt-3">
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>
                    <Button
                        color="info"
                        type="button"
                        handleClick={(event: any) => handleClick(event)}
                    >
                        <Icon icon="print" /> Tulosta
                    </Button>
                </td>
            </tr>
        </tfoot>
    );
};

export default OrderFooter;
