import React from 'react'
import styles from '@/app/styles/FeaturedPublication/featured_publication_list.module.css'
import Skeleton from 'react-loading-skeleton'

const PublicationSectionsCardsSkeleton = () => {
    return (
        <div className={`card py-0 text-left cursor`} style={{ width: '97%', maxWidth: '380px' }}>
            <div style={{ marginTop: '-7px' }}><Skeleton height={200} /></div>
            <div className="card-body px-0 pb-0">
                <div className={`${styles.card_content}`}>
                    <div className={`${styles.card_body}`}>
                        <h5 className="card-title mb-4"><Skeleton width={180} height={25} /></h5>
                        <p><Skeleton width={'90%'} height={35} /></p>
                        {/* <p>{data?.text?.length > 60 ? `${data.text.slice(0, 60)}...` : data?.text}</p> */}
                    </div>
                    <div className="row">
                        <div className="col-7 d-flex align-items-start flex-column justify-content-end pb-2 ps-4 pe-0" style={{ marginTop: '-10px' }}>
                            <p className="card-text text-center text-secondary mb-0" style={{ color: 'var(--primary)' }}><Skeleton width={80} /></p>
                            <p className="card-text text-secondary mb-0"><Skeleton width={70} /></p>
                            <div className="text-primary align-items-start justify-content-start">
                                <Skeleton width={90} />
                            </div>
                        </div>
                        <div className="col-5 pb-0 pe-1">
                            <div className="d-flex h-100 align-items-end justify-content-end" style={{ marginRight: '3px' }}>
                                <Skeleton width={70} height={70} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PublicationSectionsCardsSkeleton