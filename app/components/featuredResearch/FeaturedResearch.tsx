'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from '@/app/styles/featuredResearch/featuredReseareh.module.css'
import Slider from 'react-slick'
import { NextArrow, PrevArrow } from '@/app/cards/SlickButtons/SlickButtons'
import useSpotlight from '@/app/hooks/home_page_hooks/featured_spotlight_hooks'
import Skeleton from 'react-loading-skeleton'
import { imageLoader } from '@/app/utils/image_loader_utils'
import useFeatured from '@/app/hooks/home_page_hooks/featured_research_hooks'
import FeaturedCardSkeleton from '@/app/skeletons/featuredReaserch/FeaturedCardSkeleton'
import ErrorComponent from '../ErrorComponent'
import NoDataFound from '../NoDataFound'
import SpotlightCardSkeleton from '@/app/skeletons/featuredReaserch/SpotlightCardSkeleton'
import FeaturedResearchSkeleton from '@/app/skeletons/featuredReaserch/FeaturedResearchSkeleton'

const FeaturedResearch = () => {

    const { spotlightData, spotlightError, spotlightLoading } = useSpotlight();

    const { featuredData, featuredError, featuredLoading } = useFeatured()

    // console.log(spotlightData, featuredData)
    const settings = {
        dots: false,
        infinite: featuredData?.length > 1,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: true,
        autoplay: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };
    return (
        <>
            {featuredError || spotlightError ?
                <div className="mb-5 pb-5 position-relative" style={{ zIndex: 9 }}><ErrorComponent /></div> : <>
                    {featuredData?.length > 0 && Object.keys(spotlightData)?.length > 0 ? <><div className="col-lg-9 col-md-12 pt-4">
                        <h3 className={styles.head}>
                            {featuredLoading ? <Skeleton width={200} /> : "Featured Research"}
                        </h3>
                        <Slider {...settings}>
                            {featuredData?.map((item: any, index: any) => {
                                return featuredLoading ? <FeaturedCardSkeleton /> : <div className={`row  ${styles.mainRow}`} key={index}>
                                    <div className={`col-sm-7 `}>
                                        <Image width={500} height={416} className={`${styles.featuredImage}`} loader={imageLoader} alt='Image' src={item?.image} />
                                    </div>
                                    <div className={`col-sm-5 card ${styles.cardMain}`}>
                                        <div className="card-body">
                                            <div className='card-title'>
                                                <Link href='/' className={styles.card1Title}>
                                                    {item?.title}
                                                </Link>
                                            </div>
                                            <div className={`${styles.author}`}>
                                                <p>
                                                    {item?.sub_title}
                                                </p>
                                            </div>
                                            <div className={styles.describtion}>
                                                <span dangerouslySetInnerHTML={{ __html: item?.short_description }}></span>
                                            </div>
                                            <div>
                                                <div className={`${styles.roundedMain}`}>
                                                    <div className={`${styles.rounded} ${styles.one}`}></div>
                                                    <div className={`${styles.rounded} ${styles.two}`}></div>
                                                    <div className={`${styles.rounded} ${styles.three}`}></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            })}
                        </Slider>

                    </div>
                        <div className={`col-lg-3 col-md-6 pt-4 ${styles.cardSection}`} >
                            <h3 className={styles.head}>
                                {spotlightLoading ? <Skeleton width={200} /> : "Spotlight"}
                            </h3>
                            {spotlightLoading ? <SpotlightCardSkeleton /> : <>
                                <div className={`card ${styles.cardMain2}`}>
                                    <Image width={200} height={200} className='card-img-top'
                                        src={spotlightData?.image} loader={imageLoader} alt='images' />
                                    <div className="card-body">
                                        <div className={`card-title`}>
                                            <Link href={'/'} className={`${styles.card1Title}`} >
                                                {spotlightData?.name1}
                                            </Link>
                                        </div>
                                        <div className={`card-text ${styles.role}`}>
                                            {spotlightData?.Designation}
                                        </div>
                                        <div className="card-text" >
                                            <p className={styles.card2text}>
                                                <span dangerouslySetInnerHTML={{ __html: spotlightData?.short_description }}></span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </>}
                        </div></> : <>{!featuredLoading && !spotlightLoading ? <div className="mb-5 pt-3"><NoDataFound /></div>: <FeaturedResearchSkeleton />}</>}
                </>}
        </>
    )
}

export default FeaturedResearch