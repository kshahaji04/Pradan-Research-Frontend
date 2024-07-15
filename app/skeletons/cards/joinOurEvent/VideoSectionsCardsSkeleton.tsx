import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from '@/app/styles/joinOurEvent/video.module.css'
// import PlayCircleFilledWhiteRoundedIcon from '@mui/icons-material/PlayCircleFilledWhiteRounded';
import PlayCircleOutlineOutlinedIcon from '@mui/icons-material/PlayCircleOutlineOutlined';
import moment from 'moment';
import Skeleton from 'react-loading-skeleton';

const VideoSectionsCardsSkeleton = ({ data }: any) => {
    return (
     
            <div className={`card h-100 rounded-0 ${styles.videoCard}`} style={{ width: "90%", maxWidth: "380px",  pointerEvents:'none'}}>
                <div className="card-img-top position-relative">
                    <Skeleton className="card-img-top rounded-0" height={200} width={'100%'}  />
                    <div className={styles.videoPlayBtn} >
                     <Skeleton circle width={40} height={40} />
                    </div>
                </div>
                <div className="card-body px-0 pb-0">
                    <div className={`pb-3 ${styles.card_content}`}>
                        <div className={`${styles.card_body}`}>
                            <p className="card-title text-secondary">
                             <Skeleton width={'50%'} height={20} />
                                </p>
                            <p>
                            <Skeleton width={'100%'} height={20}/>
                            <Skeleton width={'50%'} height={20} />
                            </p>
                        </div>
                        <div className="d-flex align-items-start gap-3 pb-2 pe-0" style={{ marginTop: '-10px', fontSize: '14px' }}>

                            <p className={`card-text text-secondary mb-0 ${styles.vertical_bar}`}>
                            <Skeleton width={70} height={20}/>
                                </p>
                            {/* <Link href={`/media/publication/${data?.slug}`} className="text-primary align-items-start justify-content-start">
                                        Subscribe
                                    </Link> */}
                            <p className={`card-text text-secondary mb-0`}>
                                <Skeleton width={70} height={20}/>  
                                </p>

                        </div>
                    </div>
                </div>
            </div>
    )
}

export default VideoSectionsCardsSkeleton