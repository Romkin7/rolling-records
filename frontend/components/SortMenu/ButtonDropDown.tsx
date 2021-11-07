import Link from 'next/link';
import React, { FC, useEffect, useRef, useState } from 'react';
import { IGenreItem } from '../../types';
import styles from '../DropDown/DropDown.module.scss';

interface IButtonDropDownProps {
    buttonText: string;
    color: string;
    items: IGenreItem[];
    queryString: string;
}

const ButtonDropDown: FC<IButtonDropDownProps> = ({
    buttonText,
    color,
    items,
    queryString,
}) => {
    const [open, setOpen] = useState<boolean>(() => false);
    const menuRef: any = useRef();
    const toggleOpen = (open: boolean) => {
        setOpen(() => open);
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
                                    href={`/lp:t${queryString}&genre=${item.value}`}
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
