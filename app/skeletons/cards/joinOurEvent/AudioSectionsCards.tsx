import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from '@/app/styles/joinOurEvent/audio.module.css'
import PlayCircleFilledWhiteRoundedIcon from '@mui/icons-material/PlayCircleFilledWhiteRounded';
import moment from 'moment';

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
                <div className="card-body px-0 pb-0">
                    <div className={`pb-3 ${styles.card_content}`}>
                        <div className={`${styles.card_body}`}>
                            <p className="card-title text-secondary">{data?.title}</p>
                            <p>{data?.text?.length > 60 ? `${data.text.slice(0, 60)}...` : data?.text}</p>
                        </div>
                        <div className="d-flex align-items-start gap-3 pb-2 pe-0" style={{ marginTop: '-10px', fontSize: '14px' }}>

                            <p className={`card-text text-secondary mb-0 ${styles.vertical_bar}`}>{moment(data?.date, "DD.MM.YY").format('D MMMM YYYY')}</p>
                            {/* <Link href={`/media/publication/${data?.slug}`} className="text-primary align-items-start justify-content-start">
                                        Subscribe
                                    </Link> */}
                            <p className={`card-text text-secondary mb-0`}>{data?.location}</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AudioSectionsCards