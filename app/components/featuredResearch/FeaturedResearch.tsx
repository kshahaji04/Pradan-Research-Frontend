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
import FeaturedResearchCard from '@/app/cards/home/FeaturedResearchCard'
import SpotlightCard from '@/app/cards/home/SpotlightCard'

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
                    {featuredLoading || spotlightLoading ? <FeaturedResearchSkeleton /> : <>
                        {featuredData?.length > 0 && Object.keys(spotlightData)?.length > 0 ? <><div className="col-lg-9 col-md-12 pt-4">
                            <h3 className={styles.head}>
                                {featuredLoading ? <Skeleton width={200} /> : "Featured Research"}
                            </h3>
                            <Slider {...settings}>
                                {featuredData?.map((item: any, index: any) => {
                                    return featuredLoading ? <FeaturedCardSkeleton /> : <FeaturedResearchCard item={item} key={index} />
                                })}
                            </Slider>
                        </div>
                            <div className={`col-lg-3 col-md-6 pt-4 ${styles.cardSection}`} >
                                <h3 className={styles.head}>
                                    {spotlightLoading ? <Skeleton width={200} /> : "Spotlight"}
                                </h3>
                                {spotlightLoading ? <SpotlightCardSkeleton /> : <SpotlightCard spotlightData={spotlightData} />}
                            </div></> : <div className="mb-5 pt-3"><NoDataFound /></div>}
                    </>}
                </>}
        </>
    )
}

export default FeaturedResearch