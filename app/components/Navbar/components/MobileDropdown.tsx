import React from 'react';
import Link from 'next/link';
import styles from '@/styles/Navbar/Navbar.module.css';

type DropdownListProps = {
    sections: string[];
    showMobileDropDown: boolean;
};

function MobileDropdown({ sections, showMobileDropDown }:DropdownListProps) {
    return (
        <>
            {sections?.length > 0 && showMobileDropDown && (
                <div className={`btn ${styles.mobile_dropdown_content}`}>
                    {sections.map((item, index) => (
                        <Link href="#" key={index}>
                            {item}
                        </Link>
                    ))}
                </div>
            )}
        </>
    )
}

export default MobileDropdown;






