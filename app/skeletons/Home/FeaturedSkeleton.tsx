'use client'
import Image from 'next/image'
import React from 'react'
import { featuredData } from '@/app/utils/data';
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from 'next/link';
import Skeleton from 'react-loading-skeleton';

function FeaturedSkeleton({ title }: any) {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        pauseOnHover: true,
        autoplay: true,
        vertical: true,
        verticalSwiping: true,
    };

    function ImageOverlay() {
        return (
            <div className="imageOverlay">
                <Skeleton width={'100%'} height={150} />
            </div>
        )
    }

    return (
        <div className="container">
            <div className="d-flex align-items-center justify-content-center w-100">
                <h2 style={{ color: 'var(--primary)', width:'240px' }}><Skeleton width={240} /></h2>
            </div>
            <div className="row w-full my-5">
                <div className="col-md-6 mb-4">
                    <div className="imageOverlay">
                        <Skeleton width={'100%'} height={650} />
                    </div>
                </div>
                <div className="col-md-6" style={{ overflow: 'hidden' }}>
                    {featuredData?.data && featuredData?.data?.length > 0 &&
                        featuredData.data.slice(0, 4).map((info: any, index: number) => (
                            <div className="details" key={index}>
                                <ImageOverlay />
                                <div className="info">
                                    <h4 style={{width:'100%'}}><Skeleton width={'60%'} /></h4>
                                    <div className="detailInfo" style={{width:'100%'}}>
                                        <p><Skeleton count={3} /><Skeleton width={'60%'} /></p>
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    )
}

export default FeaturedSkeleton