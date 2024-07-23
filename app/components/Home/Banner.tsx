"use client"
import React from 'react'
import Image from 'next/image';
import { Carousel, CarouselItem } from 'react-bootstrap';
// import 'react-loading-skeleton/dist/skeleton.css';
import bannerBg from '@/public/assets/images/bg/bannerBg.jpg';
import useBanner from '@/app/hooks/home_page_hooks/banner_hooks';
import { imageLoader } from '@/app/utils/image_loader_utils';
import NoDataFound from '../NoDataFound';
import ErrorComponent from '../ErrorComponent';
import Skeleton from 'react-loading-skeleton';

function Banner() {

    const { bannerData, loadingBanner, bannerError } = useBanner();

    return (
        <>{loadingBanner ? <div className='mb-5'><Skeleton width={'100%'} height={520} /></div> : <div className='bgImageWrapper banner-image-wrapper'>
            {bannerError ?<div className="mb-5 pb-5 position-relative" style={{zIndex:9}}><ErrorComponent title={bannerError} /></div> : <div className="container-fluid" style={{ zIndex: '2', position: "relative", padding: "0px 0px 180px" }}>
                <div className="row align-items-center">
                    <div className="col-12 position-relative">
                        <div className="banner-wrapper mt-0">
                            {bannerData?.details?.portrait_image?.length > 0 ? <Carousel controls={false}>
                                {bannerData?.details?.portrait_image?.map((item: any, index: any) => (
                                    <CarouselItem key={index}>
                                        <Image src={item.image} loader={imageLoader} width={1200} height={550} alt='banners' className='w-100' style={{ objectFit: 'cover' }} />
                                    </CarouselItem>
                                ))}
                            </Carousel> : <div className="mb-5 pt-3"><NoDataFound /></div>}
                        </div>
                    </div>
                </div>
            </div>}
            <figure>
                <Image width={1200} height={1200} src={bannerBg} alt="bg" />
            </figure>
        </div>}</>
    )
}

export default Banner