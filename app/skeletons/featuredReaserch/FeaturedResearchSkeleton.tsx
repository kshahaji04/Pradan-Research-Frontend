import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from '@/app/styles/featuredResearch/featuredReseareh.module.css'
import Slider from 'react-slick'
import { researchData } from '@/app/utils/data'
import { NextArrow, PrevArrow } from '@/app/cards/SlickButtons/SlickButtons'
import Skeleton from 'react-loading-skeleton'

const FeaturedResearchSkeleton = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: true,
        autoplay: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };
    return (
        <>
            <div className="col-lg-9 col-md-12 pt-4">
                <h3 className={styles.head}>
                    <Skeleton width={150} height={30} />
                </h3>
                <Slider {...settings}>
                    {
                        Array.from({length:2}).map((item: any, index: any) => (
                            <div className={`row  ${styles.mainRow}`} key={index}>
                                <div className={`col-sm-7 `}>
                                    <Skeleton width={500} height={416} className={`${styles.featuredImage}`} />
                                </div>
                                <div className={`col-sm-5 card ${styles.cardMain}`}>
                                    <div className="card-body">
                                        <div className='card-title'>
                                            <div >
                                                <Skeleton width={'100%'} height={30} count={2} />
                                                <Skeleton width={'50%'} height={30} count={1} />
                                            </div>
                                        </div>
                                        <div className={`${styles.author}`}>
                                            <p>
                                                <Skeleton width={'25%'} height={30} count={1} />
                                            </p>
                                        </div>
                                        <div className={styles.describtion}>

                                            <Skeleton width={'100%'} height={20} count={12} />
                                            <Skeleton width={'50%'} height={20} count={1} />

                                        </div>
                                        <div>
                                            <div className={`${styles.roundedMain}`}>
                                                <div className={`${styles.rounded} ${styles.one}`} style={{backgroundColor:'#ffff'}}></div>
                                                <div className={`${styles.rounded} ${styles.two}`} style={{backgroundColor:'#ffff'}}></div>
                                                <div className={`${styles.rounded} ${styles.three}`} style={{backgroundColor:'#ffff'}}></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </Slider>

            </div>
            <div className={`col-lg-3 col-md-6 pt-4 ${styles.cardSection}`}  >
                <h3 className={styles.head}>
                   <Skeleton width={150} height={30} />
                </h3>
                <div className={`card ${styles.cardMain2}`}>
                    <Skeleton width={'100%'} height={200} className='card-img-top'/>
                    <div className="card-body">
                        <div className={`card-title`}>
                            <div>
                         <Skeleton width={'60%'} height={20}  />
                            </div>

                        </div>
                        <div className={`card-text ${styles.role}`}>
                          <Skeleton width={'60%'} height={20}  />
                        </div>
                        <div className="card-text" >
                            <div>
                               <Skeleton width={'60%'} height={20} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default FeaturedResearchSkeleton