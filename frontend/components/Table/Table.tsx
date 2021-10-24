import React, { FC } from 'react';
import { ITFootSettings } from '../../types';
import Card from '../Card/Card';
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
        </Card>
    );
};

export default Table;
