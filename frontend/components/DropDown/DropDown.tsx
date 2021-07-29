import Link from 'next/link';
import React, { FC, useState } from 'react';
import styles from './DropDown.module.scss';
import { INavbarDropdownItem, INavbarItem } from '../../types';

interface IDropDownProps {
    item: INavbarItem;
}

const Dropdown: FC<IDropDownProps> = ({ item }) => {
    const [open, setOpen] = useState<boolean>(false);

    const toggleOpen = () => {
        setOpen(!open);
    };

    return (
        <>
            <a
                className={item.className2}
                href={item.href}
                onClick={toggleOpen}
                id={item.ariaLabelledby + String(item.id)}
                role={item.type}
                data-bs-toggle={item.dataBsToggle}
                aria-expanded={item.ariaExpanded}
            >
                {item.text}
            </a>
            {open && (
                <ul
                    className={item.className3 + ' ' + styles.visible}
                    aria-labelledby={item.ariaLabelledby + String(item.id)}
                >
                    {item.navbarDropdownItems &&
                        item.navbarDropdownItems.map(
                            (dropDownItem: INavbarDropdownItem) => {
                                return (
                                    <li key={dropDownItem.id}>
                                        <Link href={dropDownItem.href}>
                                            <a
                                                className={
                                                    dropDownItem.className
                                                }
                                            >
                                                {dropDownItem.text}
                                            </a>
                                        </Link>
                                    </li>
                                );
                            },
                        )}
                </ul>
            )}
        </>
    );
};

export default Dropdown;
