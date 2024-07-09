import React from 'react'
import styles from "@/app/styles/research/researchLayout.module.css"
import Skeleton from 'react-loading-skeleton';

function ResearchLayoutSkeleton({ navItems }: any) {
    return (
        <div className={`${styles.skeletonMaster}`} style={{ backgroundColor: '#fff', boxShadow: 'none', zIndex: '99999' }}>
            <nav>
                <div id="navbarNav">
                    <ul className={styles.navb}>
                        {navItems.map((item: any, index: any) => {
                            return <li key={index} className={`nav-item ${styles.navItem}`} >
                                {
                                    <div className={`nav-link`} style={{ whiteSpace: 'nowrap' }}><Skeleton width={180} height={25} /></div>
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