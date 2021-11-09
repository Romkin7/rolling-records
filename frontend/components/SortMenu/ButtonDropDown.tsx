import Link from 'next/link';
import React, { FC, useEffect, useRef, useState } from 'react';
import { Genres, IQuery } from '../../../@types';
import { IGenreItem } from '../../types';
import { QueryReq } from '../../utils/queryClass';
import styles from '../DropDown/DropDown.module.scss';

interface IButtonDropDownProps {
    buttonText: string;
    color: string;
    items: IGenreItem[];
    query: IQuery;
    genre?: boolean;
}

const ButtonDropDown: FC<IButtonDropDownProps> = ({
    buttonText,
    color,
    genre,
    items,
    query,
}) => {
    const [open, setOpen] = useState<boolean>(() => false);
    const menuRef: any = useRef();
    const toggleOpen = (open: boolean) => {
        setOpen(() => open);
    };
    const getQueryString = (data: any): string => {
        const queryObj = new QueryReq(query)
            .filterQuery()
            .dynamicKeyValue(data);
        const queryString = queryObj.generateQueryString(queryObj);
        return queryString;
    };
    useEffect(() => {
        const checkIfClickedOutside = (event: any) => {
            // If the menu is open and the clicked target is not within the menu,
            // then close the menu
            if (
                open &&
                menuRef.current &&
                !menuRef?.current?.contains(event.target)
            ) {
                setOpen(() => false);
            }
        };

        document.addEventListener('mousedown', checkIfClickedOutside);

        return () => {
            // Cleanup the event listener
            document.removeEventListener('mousedown', checkIfClickedOutside);
        };
    }, [open, setOpen]);

    return (
        <div ref={menuRef}>
            <button
                id="dd"
                type="button"
                className={`btn btn-${color} dropdown-toggle`}
                onFocus={() => toggleOpen(true)}
                aria-expanded="false"
            >
                {buttonText}
            </button>
            {open && (
                <ul
                    className={`dropdown-menu ${styles.visible}`}
                    aria-labelledby="dd"
                >
                    {items.map((item: IGenreItem) => {
                        return (
                            <li
                                key={item.value}
                                onClick={() => toggleOpen(false)}
                            >
                                <Link
                                    href={`/lp:t${getQueryString(
                                        genre
                                            ? { genre: item.value }
                                            : {
                                                  [item.value.split('=')[0]]:
                                                      item.value.split('=')[1],
                                              },
                                    )}`}
                                >
                                    <a className="dropdown-item">{item.name}</a>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            )}
        </div>
    );
};

export default ButtonDropDown;
