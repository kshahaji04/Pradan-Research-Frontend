import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from '@/app/styles/joinOurEvent/join_our_event.module.css'
import moment from 'moment'
import RegistrationModal from '@/app/components/JoinOurEvent/components/RegistrationModal'
import Skeleton from 'react-loading-skeleton'

const JoinOurEventCardsSkeleton= () => {

    return (
        <div >
            <div className="col-lg-12 px-2 mb-5 pt-0 pb-3 mx-0 d-flex align-items-center justify-content-center">
                <div className={`card py-0 text-left cursor`} style={{ width: '97%', maxWidth: '380px' }}>
                    <Link href='/join-our-event' className={`${styles.news_slide} pt-0 pb-0`}>
                        <Skeleton
                            className={`card-img-top ${styles.zoom_image}`}
                            height={200} width={260}
                        />
                    </Link>
                    <div className="card-body px-0 pb-0">
                        <div className={`pb-3 ${styles.card_content}`}>
                            <div className={`${styles.card_body}`}>
                                <p className="card-title text-secondary">
                                    <Skeleton width={'50%'} height={30}/>
                                    </p>
                                <p>
                                    <Skeleton width={'100%'} height={30}/>
                                    <Skeleton width={'70%'} height={30}/>
                                </p>
                            </div>
                            <div className="d-flex align-items-start gap-3 pb-2 pe-0" style={{ marginTop: '-10px', fontSize: '13px' }}>
                                <p className={`card-text text-secondary mb-0 ${styles.vertical_bar}`}>
                                    <Skeleton width={50} height={10}/>
                                </p>
                                {/* <Link href={`/media/publication/${data?.slug}`} className="text-primary align-items-start justify-content-start">
                                        Subscribe
                                    </Link> */}
                                <p className={`card-text text-secondary mb-0`}>
                                <Skeleton width={50} height={10}/>
                                </p>

                            </div>
                            <Skeleton width={50} height={20}/>
                            {/* <RegistrationModal /> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JoinOurEventCardsSkeleton