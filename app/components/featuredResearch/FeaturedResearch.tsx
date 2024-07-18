'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import styles from '@/app/styles/featuredResearch/featuredReseareh.module.css'
import Slider from 'react-slick'
import { researchData } from '@/app/utils/data'
import { NextArrow, PrevArrow } from '@/app/cards/SlickButtons/SlickButtons'
import FeaturedResearchSkeleton from '@/app/skeletons/featuredReaserch/FeaturedResearchSkeleton'

const FeaturedResearch = () => {
    const [loading, setLoading] = useState(false)
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
            {
                loading ? <FeaturedResearchSkeleton /> :
                    <>
                        <div className="col-lg-9 col-md-12 pt-4">
                            <h3 className={styles.head}>
                                Featured Research
                            </h3>
                            <Slider {...settings}>
                                {
                                    researchData.data.map((item: any, index: any) => (
                                        <div className={`row  ${styles.mainRow}`} key={index}>
                                            <div className={`col-sm-7 `}>
                                                <Image width={500} height={416} className={` ${styles.featuredImage}`} alt='Image' src={item.img} />
                                            </div>
                                            <div className={`col-sm-5 card ${styles.cardMain}`}>
                                                <div className="card-body">
                                                    <div className='card-title'>
                                                        <Link href='/' className={styles.card1Title}>
                                                            {item.title}
                                                        </Link>
                                                    </div>
                                                    <div className={`${styles.author}`}>
                                                        <p>
                                                            {item.author}
                                                        </p>
                                                    </div>
                                                    <div className={styles.describtion}>
                                                        {
                                                            item.desc
                                                        }
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
                                    ))
                                }
                            </Slider>

                        </div>
                        <div className={`col-lg-3 col-md-6 pt-4 ${styles.cardSection}`} >
                            <h3 className={styles.head}>
                                Spotlight
                            </h3>
                            <div className={`card ${styles.cardMain2}`}>
                                <Image width={200} height={200} className='card-img-top' src='https://www.ceew.in/sites/default/files/styles/spotlight_view_image_style/public/Priyanka%20Singh_0.jpg?itok=Md3iPHSP' alt='images' />
                                <div className="card-body">
                                    <div className={`card-title`}>
                                        <Link href={'/'} className={`${styles.card1Title}`} >
                                            {researchData.authorDetails.name}
                                        </Link>

                                    </div>
                                    <div className={`card-text ${styles.role}`}>
                                        {researchData.authorDetails.role}
                                    </div>
                                    <div className="card-text" >
                                        <Link href='/' className={styles.card2text}>
                                            {researchData.authorDetails.short_desc.slice(1,240)}
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
            }

        </>

    )
}

export default FeaturedResearch