import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import styles from '@/app/styles/joinOurEvent/audio.module.css'
import PlayCircleFilledWhiteRoundedIcon from '@mui/icons-material/PlayCircleFilledWhiteRounded';
import moment from 'moment';
import VideoSectionsCardsSkeleton from '@/app/skeletons/cards/joinOurEvent/VideoSectionsCardsSkeleton';

const AudioSectionsCards = ({ data }: any) => {
    const [loading,setLoading] = useState(false)
    return (
        <div className='d-flex align-items-center justify-content-center h-100'>
         { 
         loading ? <VideoSectionsCardsSkeleton/> :
            <div className={`card h-100 rounded-0 ${styles.gridViewCard}`} style={{ width: "90%", maxWidth: "380px" }}>
                <div className="card-img-top position-relative">
                    {data?.src !== null && data?.src !== '' ? <Image src={data?.src} className="card-img-top rounded-0"
                        height={200} width={100} alt='' /> : ''}
                    {/* <Image src={data.src} className="card-img-top rounded-0" height={200} width={100} alt={data.text} /> */}
                    <div className={styles.gridViewPlayBtn} style={{ cursor: 'auto' }}>
                        <PlayCircleFilledWhiteRoundedIcon />
                    </div>
                </div>
                <div className="card-body pb-0 pt-4 mt-2 position-relative">

                    <p className="card-title text-secondary">{data?.title}</p>
                    <p>{data?.text?.length > 60 ? `${data.text.slice(0, 60)}...` : data?.text}</p>
                    <div className="d-flex align-items-start gap-3 pb-2 pe-0" style={{ marginTop: '-10px', fontSize: '14px' }}>

                        <p className={`card-text text-secondary mb-0 ${styles.vertical_bar}`}>{moment(data?.date, "DD.MM.YY").format('D MMMM YYYY')}</p>

                        <p className={`card-text text-secondary mb-0`}>{data?.location}</p>
                    </div>

                </div>
                <div className={`card-footer pb-0 pe-0 pt-0 ${styles.gridViewFooter}`}>
                    <div className="d-flex align-items-end justify-content-between">
                        <div className="col-6 pb-3">
                            <div>
                                <p>{data?.author}</p>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="d-flex align-items-center justify-content-end g-2">
                                {data?.Authors?.length > 0 && data?.Authors?.map((info: any, i: number) =>
                                    <Image key={i} width={60} height={60} src={info?.author_image} alt='avatars' className='w-25' />)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            }
        </div>
    )
}

export default AudioSectionsCards