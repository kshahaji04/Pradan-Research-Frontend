import React from 'react'
import Skeleton from 'react-loading-skeleton'
import styles from '@/app/styles/featuredResearch/featuredReseareh.module.css'

function SpotlightCardSkeleton() {
    return (
        <div className={`card ${styles.cardMain2}`}>
            <Skeleton width={'100%'} height={200} className='card-img-top' />
            <div className="card-body">
                <div className={`card-title`}>
                    <div>
                        <Skeleton width={'60%'} height={20} />
                    </div>

                </div>
                <div className={`card-text ${styles.role}`}>
                    <Skeleton width={'60%'} height={20} />
                </div>
                <div className="card-text" >
                    <div>
                        <Skeleton width={'100%'} height={12} count={4} />
                        <Skeleton width={'60%'} height={12} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SpotlightCardSkeleton