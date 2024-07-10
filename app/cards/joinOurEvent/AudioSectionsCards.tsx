import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from '@/app/styles/joinOurEvent/audio.module.css'
import PlayCircleFilledWhiteRoundedIcon from '@mui/icons-material/PlayCircleFilledWhiteRounded';

const AudioSectionsCards = ({ data }: any) => {
    return (
        <div className='d-flex align-items-center justify-content-center h-100'>
            <div className={`card h-100 rounded-0 ${styles.gridViewCard}`} style={{ width: "90%", maxWidth: "380px" }}>
                <div className="card-img-top position-relative">
                    <Image src={data.src} className="card-img-top rounded-0" height={200} width={100} alt={data.text} />
                    <div className={styles.gridViewPlayBtn}>
                        <PlayCircleFilledWhiteRoundedIcon />
                    </div>
                </div>
                <div className="card-body pt-4 mt-2 position-relative">
                    <p className={`card-title m-0 ${styles.gridViewTitle}`}>
                        {data.text?.length > 50 ? `${data.text.slice(0, 50)}...` : data.text}
                    </p>
                </div>
                <div className={`card-footer pb-0 pe-0 pt-0 ${styles.gridViewFooter}`}>
                    <div className="d-flex align-items-end justify-content-between">
                        <div className="col-6 pb-3">
                            <div>
                                <p>{data.author?.length > 0 && data.author[0]}</p>
                                {/* {data.author?.map((info: any, i: number) => <p key={i}>{info}</p>)} */}
                            </div>
                            <Link href={'/media/audio/eric'} className="d-flex align-items-center g-2 pt-2">
                                <p>{'View More'}</p>
                            </Link>
                        </div>
                        {/* <div className="col-6">
                            <div className="d-flex align-items-center justify-content-end g-2">
                                {data.avatars?.length > 0 && data.avatars?.map((info: any, i: number) => <Image key={i} width={60} height={60} src={info} alt='avatars' className='w-25' />)}
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AudioSectionsCards