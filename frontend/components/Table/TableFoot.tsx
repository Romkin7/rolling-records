import React, { FC } from 'react';
import { ITFootSettings } from '../../types';
import ButtonLink from '../ButtonLink/ButtonLink';
import styles from './Table.module.scss';

interface ITFootProps {
    tFootSettings: ITFootSettings;
}
const TableFoot: FC<ITFootProps> = ({ tFootSettings }) => {
    const { prevHref, prevLinkText, nextHref, nextLinkText } = tFootSettings;
    return (
        <tfoot>
            <tr className={styles.tfootRow}>
                <td>
                    <ButtonLink href={prevHref} color="secondary">{prevLinkText}</ButtonLink>
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td>
                    <ButtonLink href={nextHref}>{nextLinkText}</ButtonLink>
                </td>
            </tr>
        </tfoot>
    );
};

export default TableFoot;
