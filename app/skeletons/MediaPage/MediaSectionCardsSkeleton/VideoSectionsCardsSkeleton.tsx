import React from 'react'
import styles from '@/app/styles/joinOurEvent/audio.module.css'
import Skeleton from "react-loading-skeleton";

const VideoSectionsCardsSkeleton = ({ data }: any) => {
    return (
        <div className='d-flex align-items-center justify-content-center h-100'>
            <div className={`card h-100 rounded-0 ${styles.videoCard}`} style={{ width: "90%", maxWidth: "380px" }}>
                <Skeleton height={200} />
                <div className="card-body pt-2 ps-0 mt-2 position-relative">
                    <p className={`card-text m-0 mb-2 ${styles.videoText}`}>
                        <Skeleton count={1} width={180} />
                    </p>
                    <p className={`card-title m-0 ${styles.videoTitle}`}>
                        <Skeleton count={2} />
                    </p>
                </div>
                <div className={`card-footer p-0 ${styles.videoFooter}`}>
                    <div className="d-flex align-items-end justify-content-between">
                        <div className="col-12 pb-3">
                            <div>
                                <p><Skeleton count={1} width={110} /></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VideoSectionsCardsSkeleton