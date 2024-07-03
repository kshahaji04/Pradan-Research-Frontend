'use client'
import React from 'react'
import styles from "@/app/styles/research/researchLayout.module.css"
import Link from 'next/link';
import { usePathname } from 'next/navigation'

function ResearchLayout({ navItems }: any) {
    const pathname = usePathname()

    const handleActiveLink = (href: any) => {
        return pathname === href ? styles.active : ''; // Add active class conditionally
    };

    return (
        <div className={`${styles.master}`}>
            <nav className={` ${styles.main}`}>
                <div id="navbarNav">
                    <ul className={styles.navb}>
                        {navItems.map((item: any, index: any) => {
                            return <li key={index} className={`nav-item ${styles.navItem} ${handleActiveLink(item.href)}`} >
                                {
                                    <Link className={`nav-link ${styles.navLink}`} href={item.href}>{item.label}</Link>
                                }
                            </li>
                        })
                        }
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default ResearchLayout