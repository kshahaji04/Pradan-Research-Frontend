import React from 'react';
import styles from '@/app/styles/Navbar/Navbar.module.css';
import Skeleton from 'react-loading-skeleton';

const WebNavbarSkeleton = () => {
  return (
    <div className={`py-2 px-5 ${styles.navbar_container}`}>
      <nav className={`navbar navbar-expand-sm row ${styles.nav_top}`}>
        <div className={styles.navGrid}>
          <div className=''>
            <div className='d-flex align-items-center'>
              <div style={{marginTop:'-6px'}}>
                <Skeleton width={160} height={60} />
              </div>
              <div className='ms-2'>
                <h3 className='mb-0 primary'><Skeleton width={120} /></h3>
                <p className='mb-0'><i><Skeleton width={120} /></i></p>
              </div>
            </div>
          </div>
          <div>
            <nav className={`navbar navbar-expand-sm row py-3`}>
              <div className={`col d-flex justify-content-center ${styles.navbar_list}`}>
                <div className={styles.dropdown}>
                  <button className={styles.dropbtn}><Skeleton width={90} /></button>
                </div>
                <div className={styles.dropdown}>
                  <button className={styles.dropbtn}><Skeleton width={90} /></button>
                </div>
                <div className={styles.dropdown}>
                  <button className={styles.dropbtn}><Skeleton width={90} /></button>
                </div>
                <div className={styles.dropdown}>
                  <button className={styles.dropbtn}><Skeleton width={90} /></button>
                </div>
              </div>
            </nav>
          </div>
          <div className='d-flex justify-content-center me-5'>
            <Skeleton width={250} height={36} />
            <div className={styles.mic_icon_container} style={{marginLeft:'5px'}}>
              <Skeleton width={25} height={36} />
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}



export default WebNavbarSkeleton



















