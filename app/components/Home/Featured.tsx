'use client'
import Image from 'next/image'
import React from 'react'
import Slider from 'react-slick'
import { featuredData } from '@/app/utils/data';

const Featured = () => {
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
                <h2 style={{ color: 'var(--primary)' }}>Featured Publications</h2>
            </div>
            <div className="row w-full my-5">
                <div className="col-md-6 mb-4">
                    <ImageOverlay icon={<featuredData.latest.icon />} text={featuredData.latest.text}
                        src={featuredData.latest.src} isText={true} />
                </div>
                <div className="col-md-6">
                    <Slider {...settings}>{featuredData?.data && featuredData?.data?.length > 0 &&
                        featuredData.data.map((info: any, index: number) => (
                            <div className="details" key={index}>
                                <ImageOverlay icon={<info.icon />} src={info.src} />
                                <div className="info">
                                    <h4>{info.title}</h4>
                                    <div className="detailInfo">
                                        <p>{info.para}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default Featured