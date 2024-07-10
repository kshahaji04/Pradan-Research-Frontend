import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from '@/app/styles/joinOurEvent/join_our_event.module.css'
import moment from 'moment'
import RegistrationModal from '@/app/components/JoinOurEvent/components/RegistrationModal'

const JoinOurEventCards = ({ data }: any) => {
  
    return (
        <div key={data.id} >
            <div className="col-lg-12 px-2 mb-5 pt-0 pb-3 mx-0 d-flex align-items-center justify-content-center">
                <div className={`card py-0 text-left cursor`} style={{ width: '97%', maxWidth: '380px' }}>
                    <Link href='/media' className={`${styles.news_slide} pt-0 pb-0`}>
                        <Image
                            src={data?.src}
                            className={`card-img-top ${styles.zoom_image}`}
                            alt={data?.title}
                            height={500} width={500}
                        />
                    </Link>
                    <div className="card-body px-0 pb-0">
                        <div className={`${styles.card_content}`}>
                            <div className={`${styles.card_body}`}>
                                <p className="card-title mb-4">{data?.title}</p>
                                <p>{data?.text?.length > 60 ? `${data.text.slice(0, 60)}...` : data?.text}</p>
                            </div>
                            <div className="row">
                                <div className="col-7 d-flex align-items-start flex-column justify-content-end pb-2 pe-0" style={{ marginTop: '-10px' }}>
                                    
                                    <p className="card-text text-secondary mb-0">{moment(data?.date, "DD.MM.YY").format('D MMMM YYYY')}</p>
                                    {/* <Link href={`/media/publication/${data?.slug}`} className="text-primary align-items-start justify-content-start">
                                        Subscribe
                                    </Link> */}
                                    
                                    <RegistrationModal/>
                                </div>
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JoinOurEventCards