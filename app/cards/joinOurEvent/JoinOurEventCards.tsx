import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import styles from '@/app/styles/joinOurEvent/join_our_event.module.css'
import moment from 'moment'
import RegistrationModal from '@/app/components/JoinOurEvent/components/RegistrationModal'
import JoinOurEventCardsSkeleton from '@/app/skeletons/cards/joinOurEvent/JoinOurEventCardsSkeleton'
import { imageLoader } from '@/app/utils/image_loader_utils'
import noImage from '@/public/assets/images/no_image.jpg'
import NoDataFound from '@/app/components/NoDataFound'

const JoinOurEventCards = ({ data, loading }: any) => {

    return (

        <div className="col-lg-12 px-2 mb-5 pt-5 pb-3 mx-0 d-flex align-items-center justify-content-center">
            <div className={`card h-100 py-0 text-left cursor`} style={{ width: '97%', maxWidth: '380px' }}>
                <Link href={`/join-our-event/${data?.url}`} className={`${styles.news_slide} pt-0 pb-0`}>
                    {
                        data?.image ?
                            <Image
                                src={data?.image}
                                className={`card-img-top ${styles.zoom_image}`}
                                alt={data?.title}
                                height={500} width={500}
                                loader={imageLoader}
                            /> :
                            <Image
                                src={noImage}
                                className={`card-img-top ${styles.zoom_image}`}
                                alt={data?.title}
                                height={500} width={500}
                            />
                    }

                </Link>
                <div className="card-body px-0 pb-0">
                    <div className={`pb-1 ${styles.card_content}`}>
                        <div className={`${styles.card_body}`}>
                            {/* <p className={`card-text mb-0 pb-2`}>hello</p> */}
                            <p className="card-title text-secondary">{data?.title}</p>
                            <p className="card-title text-secondary">{data?.sub_title}</p>
                            <h6 className='mb-0'>{data?.type}</h6>
                            <p>
                                <span dangerouslySetInnerHTML={{
                                    /* @ts-ignore */
                                    __html: data?.short_description?.length > 100 ? `${data?.short_description.slice(0, 100)}...` : data?.short_description
                                }}>
                                </span>
                            </p>
                        </div>
                        <div className="d-flex align-items-start gap-3 pb-2 pe-0" style={{ marginTop: '-10px', fontSize: '13px' }}>
                            <p className={`card-text text-secondary mb-0 ${styles.vertical_bar}`}>{moment(data?.from_date, "YYYY-MM-DD").format('D MMMM YYYY')}</p>
                            {/* <p className={`card-text text-secondary mb-0 ${styles.vertical_bar}`}>{moment(data?.to_date, "YYYY-MM-DD").format('D MMMM YYYY')}</p> */}
                            <p className={`card-text text-secondary mb-0`}>{data?.state}</p>
                        </div>

                        {data?.slug ? <Link href={`/join-our-event/featured-event/${data?.slug}`} className="btn btn-outline-success">Register</Link> :
                            <RegistrationModal data={data} />}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JoinOurEventCards