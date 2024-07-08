import React from 'react'
import styles from "@/app/styles/research/researchLayout.module.css"
import Skeleton from 'react-loading-skeleton';

function ResearchLayoutSkeleton({ navItems }: any) {
    return (
        <div className={`${styles.master}`} style={{backgroundColor:'transparent'}}>
            <nav className={` ${styles.main}`}>
                <div id="navbarNav">
                    <ul className={styles.navb}>
                        {navItems.map((item: any, index: any) => {
                            return <li key={index} className={`nav-item ${styles.navItem}`} >
                                {
                                    <div className={`nav-link ${styles.navLink}`} style={{whiteSpace:'nowrap'}}><Skeleton width={180} /></div>
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

export default ResearchLayoutSkeleton