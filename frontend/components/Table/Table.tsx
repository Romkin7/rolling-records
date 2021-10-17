import React from 'react';
import { useSelector } from 'react-redux';
import { AppState } from '../../store/store';
import Card from '../Card/Card';
import TableBody from './TableBody';
import TableHead from './TableHead';

const Table = () => {
    const cart = useSelector((state: AppState) => state.cart);
    return (
        <Card>
            <table className="table">
                <TableHead />
                <TableBody items={cart.items} />
            </table>
        </Card>
    );
};

export default Table;
