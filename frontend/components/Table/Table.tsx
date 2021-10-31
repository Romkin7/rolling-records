import React, { FC } from 'react';
import { ITFootSettings } from '../../types';
import Card from '../Card/Card';
import ModalC from '../Modal/Modal';
import TableBody from './TableBody';
import TableFoot from './TableFoot';
import TableHead from './TableHead';

interface ITableProps {
    showModButtons: boolean;
    showCheckoutForm: boolean;
    tFootSettings: ITFootSettings;
}

const Table: FC<ITableProps> = ({
    showModButtons,
    tFootSettings,
    showCheckoutForm,
}) => {
    return (
        <Card>
            <table className="table">
                <TableHead />
                <TableBody
                    showModButtons={showModButtons}
                    showCheckoutForm={showCheckoutForm}
                />
                <TableFoot tFootSettings={tFootSettings} />
            </table>
            <ModalC />
        </Card>
    );
};

export default Table;
