import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from '@/app/styles/joinOurEvent/video.module.css'
// import PlayCircleFilledWhiteRoundedIcon from '@mui/icons-material/PlayCircleFilledWhiteRounded';
import PlayCircleOutlineOutlinedIcon from '@mui/icons-material/PlayCircleOutlineOutlined';
import moment from 'moment';

const VideoSectionsCards = ({ data }: any) => {
    return (
        <div className='d-flex align-items-center justify-content-center h-100'>
            <div className={`card h-100 rounded-0 ${styles.videoCard}`} style={{ width: "90%", maxWidth: "380px" }}>
                <Link href={'/media'} className="card-img-top position-relative">
                    <Image src={data.src} className="card-img-top rounded-0" height={200} width={100} alt={data.text} />
                    <div className={styles.videoPlayBtn}>
                        <PlayCircleOutlineOutlinedIcon />
                    </div>
                </Link>
                {/* <Link href={'/media'} className="card-body pt-2 ps-0 mt-2 position-relative">
                    <p className={`card-text m-0 mb-2 ${styles.videoText}`}>
                        {data.author[0]}
                    </p>
                    <p className={`card-title m-0 ${styles.videoTitle}`}>
                        {data.text?.length > 40 ? `${data.text.slice(0, 40)}...` : data.text}
                    </p>
                </Link> */}
                <div className={`card-footer p-0 ${styles.videoFooter}`}>
                    <div className="d-flex align-items-end justify-content-between">
                        <div className="col-12 pb-3">
                            <div>
                                <p>{moment(data.date).format('MMM.YYYY')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VideoSectionsCards