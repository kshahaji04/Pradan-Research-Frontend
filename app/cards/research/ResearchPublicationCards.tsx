import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from '@/app/styles/FeaturedPublication/featured_publication_list.module.css'
import moment from 'moment'
import { imageLoader } from '@/app/utils/image_loader_utils'
import NoImage from '@/public/assets/images/no_image.jpg'
import { featuredPublicationListData } from '@/app/interfaces/featured_publication_interface';
interface ResearchPublicationCardsProps {
    data: featuredPublicationListData;
    key: number;
}

const ResearchPublicationCards: React.FC<ResearchPublicationCardsProps> = ({ data, key }) => {
    // console.log(data)
    const authors = data?.authors || [];
    const description = data?.description || '';

    return (
        <>
            <div className="col-md-4 px-2 mb-5 pt-0 pb-3 mx-0 w-100 d-flex align-items-center justify-content-center" key={key}>
                <div className={`card py-0 text-left cursor`} style={{ width: '97%', maxWidth: '380px' }}>
                    <div className={`${styles.news_slide} pt-0 pb-0`}>
                        <Image
                            src={data?.image || NoImage.src}
                            className={`card-img-top ${styles.zoom_image}`}
                            alt={data?.title || ''}
                            height={500} width={500}
                            loader={imageLoader}
                        />
                    </div>
                    <div className="card-body px-0 pb-0">
                        <div className={`${styles.card_content}`}>
                            <div className={`${styles.card_body}`}>
                                <h5 className="card-title mb-4" style={{ height: '50px' }}>{data?.title}</h5>
                                <p style={{ height: '50px' }}>
                                    <span dangerouslySetInnerHTML={{
                                        /* @ts-ignore */
                                        __html: description?.length > 50 ?
                                            `${data?.description?.slice(0, 50)}...` : data?.description
                                    }}>
                                    </span>
                                </p>
                                {/* <p>{data?.text?.length > 60 ? `${data.text.slice(0, 60)}...` : data?.text}</p> */}
                            </div>
                            <div className="row">
                                <div className="col-7 d-flex align-items-start flex-column justify-content-end pb-2 ps-4 pe-0" style={{ marginTop: '-10px' }}>
                                    {authors?.length > 0 && authors?.map((info: any, index: any) => (
                                        <p className="card-text text-center text-secondary mb-0" style={{ color: 'var(--primary)', height: '25px' }} key={index}>{info?.author_name}</p>
                                    ))}
                                    <p className="card-text text-secondary mb-0" style={{ height: '25px' }}>{moment(data?.creation).format('MMM. YYYY')}</p>
                                    <Link href={`/featured-publication-detail/${data?.slug}`} className="text-primary align-items-start justify-content-start">
                                        View More
                                    </Link>
                                </div>
                                <div className="col-5 pb-0">
                                    <div className="d-flex h-100 align-items-end justify-content-end g-2">
                                        {/* {data.authors?.length > 0 && <Image width={70} height={70} src={data?.authors[0]} alt='avatars' />} */}
                                        {authors?.length > 0 && data?.authors?.map((info: any, index: number) => <>
                                            {info?.author_image !== null && info?.author_image !== '' ? <Image key={index} width={70} height={70} src={info?.author_image || NoImage.src} alt={info?.author_name} loader={imageLoader} /> : ''}
                                        </>)}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ResearchPublicationCards