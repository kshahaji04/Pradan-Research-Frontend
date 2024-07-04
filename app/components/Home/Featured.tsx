'use client'
import Image from 'next/image'
import React from 'react'
import { featuredData } from '@/app/utils/data';
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from 'next/link';

function Featured({ title }: any) {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        pauseOnHover: true,
        autoplay: true,
        vertical: true,
        verticalSwiping: true, // Enable vertical swiping
        // responsive: [
        //     {
        //         breakpoint: 1024,
        //         settings: {
        //             slidesToShow: 2,
        //             slidesToScroll: 1,
        //             infinite: true,
        //             dots: false,
        //         },
        //     },
        //     {
        //         breakpoint: 600,
        //         settings: {
        //             slidesToShow: 2,
        //             slidesToScroll: 1,
        //             initialSlide: 1,
        //         },
        //     },
        //     {
        //         breakpoint: 480,
        //         settings: {
        //             slidesToShow: 1,
        //             slidesToScroll: 1,
        //         },
        //     },
        // ],
    };

    function ImageOverlay({ isText = false, icon, src, text }: any) {
        return (
            <div className="imageOverlay">
                <Image
                    src={src}
                    width={1200}
                    height={1200}
                    alt='featuredImage'
                    className='bgImg'
                />
                <div className="data">
                    {icon}
                    {isText && <h3>{text}</h3>}
                </div>
            </div>
        )
    }

    return (
        <div className="container">
            <div className="d-flex align-items-center justify-content-center w-100">
                <h2 style={{ color: 'var(--primary)' }}>{title}</h2>
            </div>
            <div className="row w-full my-5">
                <div className="col-md-6 mb-4">
                    <Link href="#">
                        <ImageOverlay icon={<featuredData.latest.icon />} text={featuredData.latest.text}
                            src={featuredData.latest.src} isText={true} />
                    </Link>
                </div>
                <div className="col-md-6" style={{ overflow: 'hidden' }}>
                    <Slider {...settings}>{featuredData?.data && featuredData?.data?.length > 0 &&
                        featuredData.data.map((info: any, index: number) => (
                            <Link href='#' className="details" key={index}>
                                <ImageOverlay icon={<info.icon />} src={info.src} />
                                <div className="info">
                                    <h4>{info.title}</h4>
                                    <div className="detailInfo">
                                        <p>{info.para}</p>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default Featured