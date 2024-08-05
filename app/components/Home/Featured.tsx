'use client'
import Image from 'next/image'
import React from 'react'
import { featuredData } from '@/app/utils/data';
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from 'next/link';
import useFeaturedPublication from '@/app/hooks/home_page_hooks/featured_ publications_hooks';
import { imageLoader } from '@/app/utils/image_loader_utils';
import NoImage from '@/public/assets/images/no_image.jpg';
import FeaturedSkeleton from '@/app/skeletons/Home/FeaturedSkeleton';
import ErrorComponent from '@/app/components/ErrorComponent';
import NoDataFound from '@/app/components/NoDataFound';
import { FeaturedPublicationData, ImageOverlayProps } from '@/app/interfaces/featured_publication_interface';

function Featured({ title }: { title?: string }) {
    const { featuredPublicationData, featuredPublicationError, featuredPublicationLoading } = useFeaturedPublication()


    const latestPublication = Array.isArray(featuredPublicationData) && featuredPublicationData.length > 0
        ? featuredPublicationData.filter((data: FeaturedPublicationData) => data?.latest_category === 1)
        : [];

    const featuredPublicationlist = Array.isArray(featuredPublicationData) && featuredPublicationData.length > 0
        ? featuredPublicationData.filter((data: FeaturedPublicationData) => data?.latest_category !== 1)
        : [];


    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        pauseOnHover: true,
        autoplay: true,
        vertical: true,
        verticalSwiping: true, // Enable vertical swiping
    };

    function ImageOverlay({ isText = false, icon = '', src = '', text = '' }: ImageOverlayProps) {
        return (
            <div className="imageOverlay">
                <Image
                    src={src !== null && src !== '' ? src : NoImage.src}
                    width={1200}
                    height={1200}
                    alt='featuredImage'
                    className='bgImg'
                    loader={imageLoader}
                />
                <div className="data">
                    <Image
                        src={icon !== null && icon !== '' ? icon : NoImage.src}
                        width={90}
                        height={60}
                        alt='featuredImageLogo'
                        className=''
                        loader={imageLoader}
                        object-fit="cover"

                    />
                    {isText && <h3>{text}</h3>}
                </div>
            </div>
        )
    }

    return (
        <>
            {featuredPublicationError ? <ErrorComponent /> : <div className="container">
                {featuredPublicationLoading ? <FeaturedSkeleton /> :
                    <>
                        <div className="d-flex align-items-center justify-content-center w-100">
                            <h2 style={{ color: 'var(--primary)' }}>{title}</h2>
                        </div>
                        {featuredPublicationData?.length > 0 ? <div className="row w-full my-5">
                            <div className="col-md-6 mb-4">
                                {latestPublication?.length > 0 ? latestPublication?.map((data: FeaturedPublicationData, index: number) => (
                                    <Link href={`/featured-publication-list/${data?.title}`} key={index}>
                                        {/* <ImageOverlay icon={<featuredData.latest.icon />} text={featuredData.latest.text}
                            src={featuredData.latest.src} isText={true} /> */}
                                        <ImageOverlay icon={data?.icon_logo_image} text={data?.title}
                                            src={data?.image} isText={true} />
                                    </Link>
                                )) : 'No Data'}
                            </div>

                            <div className="col-md-6" style={{ overflow: 'hidden' }}>
                                <Slider {...settings}>{featuredPublicationlist?.length > 0 &&
                                    featuredPublicationlist?.map((data: FeaturedPublicationData, index: number) => (
                                        <Link href={`/featured-publication-list/${data?.title}`} className="details" key={index}>
                                            <ImageOverlay icon={data?.icon_logo_image} src={data?.image} />
                                            <div className="info">
                                                <h4>{data?.title}</h4>
                                                <div className="detailInfo">
                                                    <p>{data?.short_description}</p>
                                                </div>
                                            </div>
                                        </Link>
                                    ))}
                                </Slider>
                            </div>
                        </div> : <NoDataFound />
                        }
                    </>
                }

            </div>}
        </>
    )
}

export default Featured