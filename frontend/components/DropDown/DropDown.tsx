import Link from 'next/link';
import React, { FC, useState, useRef, useEffect } from 'react';
import styles from './DropDown.module.scss';
import { INavbarDropdownItem, INavbarItem } from '../../types';
import styles2 from '../Header/Header.module.scss';

interface IDropDownProps {
    item: INavbarItem;
}

const Dropdown: FC<IDropDownProps> = ({ item }) => {
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
            <a
                className={item.className2 + ' ' + styles2.link}
                href={item.href}
                onFocus={() => toggleOpen(true)}
                tabIndex={0}
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
                                    <li
                                        onClick={() => toggleOpen(false)}
                                        key={dropDownItem.id}
                                    >
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
        </div>
    );
};

export default Dropdown;
