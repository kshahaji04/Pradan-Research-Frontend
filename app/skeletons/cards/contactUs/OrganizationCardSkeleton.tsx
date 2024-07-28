import React, { useState } from 'react'
import styles from '@/app/styles/contactUs/contactUs.module.css'
import Skeleton from 'react-loading-skeleton';
const OrganizationCardSkeleton = ({ idx }: any) => {
    return (
                <div className="card h-100" >
                    <div className='mx-4'>
                        <Skeleton width={80} height={80} />
                    </div>
                    <div className="card-body justify-content-between">
                        <div className={`card-title ${styles.name}`}>
                            <Skeleton width={'50%'} height={30} />
                        </div>
                        <div className="card-text">
                            <Skeleton width={'100%'} height={20} count={2} />
                            <Skeleton width={'50%'} height={20} count={1} />
                        </div>
                        <div className={`card-text pt-2 ${styles.cardText2}`}>
                            <Skeleton width={'70%'} height={30} />
                        </div>

                    </div>
                    <ul className={`card-footer list-inline my-4 ${styles.foot}`}>
                        <li className='list-inline-item'><div className={`${styles.faceBook}`}>
                            <Skeleton circle={true} width={20} height={20} />
                        </div></li>
                        <li className='list-inline-item'><div className={`${styles.insta_icon}`}>
                            <Skeleton circle={true} width={20} height={20} />
                        </div></li>
                        <li className='list-inline-item'><div className={`${styles.whats_app_icon}`}>
                            <Skeleton circle={true} width={20} height={20} />
                        </div></li>
                        <li className='list-inline-item'><div className={`${styles.linkdin}`}  >
                            <Skeleton circle={true} width={20} height={20} />
                        </div></li>
                        <li className='list-inline-item'><div className={`${styles.tweeter_icon}`}>
                            <Skeleton circle={true} width={20} height={20} />
                        </div></li>
                    </ul>
                </div>
            )
}
export default OrganizationCardSkeleton