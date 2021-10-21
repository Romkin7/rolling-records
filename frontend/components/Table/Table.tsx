import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { AppState } from '../../store/store';
import { ITFootSettings } from '../../types';
import Card from '../Card/Card';
import TableBody from './TableBody';
import TableFoot from './TableFoot';
import TableHead from './TableHead';

interface ITableProps {
    showModButtons: boolean;
    tFootSettings: ITFootSettings;
}

const Table: FC<ITableProps> = ({ showModButtons, tFootSettings }) => {
    const cart = useSelector((state: AppState) => state.cart);
    return (
        <Card>
            <table className="table">
                <TableHead />
                <TableBody
                    showModButtons={showModButtons}
                    items={cart.items}
                    cart={cart}
                />
                <TableFoot tFootSettings={tFootSettings} />
            </table>
        </Card>
    );
};

export default Table;
