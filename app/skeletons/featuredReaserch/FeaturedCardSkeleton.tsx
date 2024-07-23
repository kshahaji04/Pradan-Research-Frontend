import React from 'react'
import Skeleton from 'react-loading-skeleton'
import styles from '@/app/styles/featuredResearch/featuredReseareh.module.css'

function FeaturedCardSkeleton() {
    return (
        <div className={`row  ${styles.mainRow}`}>
            <div className={`col-sm-7 `}>
                <Skeleton width={500} height={416} className={`${styles.featuredImage}`} />
            </div>
            <div className={`col-sm-5 card ${styles.cardMain}`}>
                <div className="card-body">
                    <div className='card-title'>
                        <div >
                            <Skeleton width={'100%'} height={30} count={2} />
                            <Skeleton width={'50%'} height={30} count={1} />
                        </div>
                    </div>
                    <div className={`${styles.author}`}>
                        <p>
                            <Skeleton width={'25%'} height={30} count={1} />
                        </p>
                    </div>
                    <div className={styles.describtion}>

                        <Skeleton width={'100%'} height={20} count={12} />
                        <Skeleton width={'50%'} height={20} count={1} />

                    </div>
                    <div>
                        <div className={`${styles.roundedMain}`}>
                            <div className={`${styles.rounded} ${styles.one}`} style={{ backgroundColor: '#ffff' }}></div>
                            <div className={`${styles.rounded} ${styles.two}`} style={{ backgroundColor: '#ffff' }}></div>
                            <div className={`${styles.rounded} ${styles.three}`} style={{ backgroundColor: '#ffff' }}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeaturedCardSkeleton