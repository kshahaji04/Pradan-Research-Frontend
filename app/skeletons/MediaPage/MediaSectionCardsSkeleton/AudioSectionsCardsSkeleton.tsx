import React from 'react'
import styles from '@/app/styles/joinOurEvent/audio.module.css'
import Skeleton from 'react-loading-skeleton';

const AudioSectionsCardsSkeleton = ({ data }: any) => {
    return (
        <div className='d-flex align-items-center justify-content-center h-100'>
            <div className={`card h-100 rounded-0 ${styles.gridViewCard}`} style={{ width: "90%", maxWidth: "380px" }}>
                <div style={{ marginTop: '-7px' }}>
                    <Skeleton height={207} />
                </div>
                <div className="card-body pt-4 mt-2 position-relative">
                    <p className={`card-title m-0 ${styles.gridViewTitle}`}>
                        <Skeleton count={3} />
                    </p>
                </div>
                <div className={`card-footer pb-0 pe-0 pt-0 ${styles.gridViewFooter}`}>
                    <div className="d-flex align-items-end justify-content-between">
                        <div className="col-6 pb-3">
                            <div>
                                <p><Skeleton count={1} width={110} /></p>
                            </div>
                            <Skeleton count={1} width={130} />
                        </div>
                        <div className="col-6">
                            <div className="d-flex align-items-center justify-content-end g-2">
                                <Skeleton width={60} height={60} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AudioSectionsCardsSkeleton