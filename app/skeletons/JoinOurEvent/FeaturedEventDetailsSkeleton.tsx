import SectionDivider from '@/app/components/SectionDivider'
import React from 'react'
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import styles from '@/app/styles/joinOurEvent/join_our_event.module.css'

const FeaturedEventDetailsSkeleton = () => {
    return (
        <>
            <div>
                <div>
                    <Skeleton height={500} />
                </div>
                <SectionDivider />
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <Skeleton count={5} />
                        </div>
                        <SectionDivider />
                        <div className="col-12 mt-5">
                            <div className={styles.more_about_event}>
                                <div className="row">
                                    <div className="col-md-6">
                                        <Skeleton count={3} />
                                    </div>
                                    <div className="col-md-6">
                                        <Skeleton height={400} width={600} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <SectionDivider />
                        <Skeleton height={300} />
                        <SectionDivider />
                        <div className="col-12">
                            <Skeleton width={200} height={30} />
                            <Skeleton height={500} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FeaturedEventDetailsSkeleton