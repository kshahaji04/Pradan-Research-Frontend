import React from 'react'
import Image from 'next/image'
import styles from "@/app/styles/joinOurEvent/audioDetailsTop.module.css"
import Skeleton from 'react-loading-skeleton';

const AudioDetailsTopSkeleton: React.FC<any> = () => {
    return (
        <div>
            <div className="container ">
                <div className={styles.main}>
                    <div className={styles.uperSection}>
                        <Skeleton width={180} height={50} />
                        <div >
                            <div className={styles.time}>
                                <div>
                                    <Skeleton width={120} />
                                </div>
                                <div className={styles.fullStop}>
                                    .
                                </div>
                                <div>
                                    <Skeleton width={150} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.p}>
                        <p><Skeleton count={2} /><Skeleton width={'60%'} /></p>
                    </div>
                </div>
                <div className={styles.main2}>
                    <Skeleton width={'40%'} />
                </div>
            </div>
            <div className={styles.footer}>
                <div className={styles.footText}>
                    <div className={styles.imgContainer}>
                        <Skeleton width={150} height={150} />
                    </div>
                    <div>
                        <Skeleton width={140} height={20} />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default AudioDetailsTopSkeleton