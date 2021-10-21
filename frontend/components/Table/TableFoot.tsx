import Link from 'next/link';
import React, { FC } from 'react';
import { ITFootSettings } from '../../types';

interface ITFootProps {
    tFootSettings: ITFootSettings;
}
const TableFoot: FC<ITFootProps> = ({ tFootSettings }) => {
    const { prevHref, prevLinkText, nextHref, nextLinkText } = tFootSettings;
    return (
        <tfoot>
            <tr>
                <td>
                    <Link href={prevHref}>{prevLinkText}</Link>
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td>
                    <Link href={nextHref}>{nextLinkText}</Link>
                </td>
            </tr>
        </tfoot>
    );
};

export default TableFoot;
