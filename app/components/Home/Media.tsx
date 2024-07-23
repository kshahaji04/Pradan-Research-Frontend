'use client'
import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from 'next/link';
import Image from 'next/image';
import Slider from 'react-slick';
import moment from 'moment';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import usePublicationList from '@/app/hooks/home_page_hooks/publication_list_hook';
import Skeleton from 'react-loading-skeleton';
import ErrorComponent from '../ErrorComponent';
import { imageLoader } from '@/app/utils/image_loader_utils';
import NoDataFound from '../NoDataFound';
import { iconHandler } from '@/app/utils/icon_handler';
import MediaCardSkeleton from '@/app/skeletons/Home/MediaCardSkeleton';
function Media() {

    const { socialMediaData, loadingSocialMediaList, error } = usePublicationList();

    const settings = {
        dots: false,
        infinite: socialMediaData?.length > 1,
        slidesToShow: 4,
        slidesToScroll: 1,
        pauseOnHover: true,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: socialMediaData?.length > 1,
                    dots: true,
                },
            },
            {
                breakpoint: 995,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <>
            {error ? <div className="mb-5 pb-5 position-relative" style={{ zIndex: 9 }}><ErrorComponent /></div> : <div className="container">
                <div className="d-flex align-items-center justify-content-center w-100">
                    {loadingSocialMediaList ? <h2 style={{ color: 'var(--primary)' }}><Skeleton width={200} /></h2> : 
                        <h2 style={{ color: 'var(--primary)' }}>Social Media</h2>}
                </div>
                {socialMediaData?.length > 0 ? <div className="row my-5">
                    <Slider {...settings}>
                        {socialMediaData?.map((item: any, index: any) => (
                            <div key={index}>
                                {loadingSocialMediaList ? <MediaCardSkeleton /> : <div className='d-flex align-items-center justify-content-center h-100'>
                                    <div className={`card h-100 rounded-0`} style={{ width: "90%", maxWidth: "380px", border: 0 }}>
                                        <Link href={'#'} className="w-full d-flex align-items-center justify-content-center position-relative">
                                            <Image src={item?.image} loader={imageLoader} className="rounded-circle" height={150} width={150} alt={item?.title} />
                                        </Link>
                                        <Link href={'#'} className="card-body position-relative text-decoration-none text-start py-4">
                                            <p className={`card-title m-0`}>
                                                <span dangerouslySetInnerHTML={{ __html: item?.short_description }}></span>
                                            </p>
                                        </Link>
                                        <div className={`card-footer`} style={{ background: 'transparent', border: 0 }}>
                                            <div className="row d-flex align-items-center justify-content-center">
                                                <div className="col-6">
                                                    <div>
                                                        <p className='mb-0'>{item?.creation && moment(item.creation).format('MMM DD, YYYY')}</p>
                                                    </div>
                                                </div>
                                                <div className="col-6 text-center">
                                                    {item?.social_platform_name && <Link href={item?.url}>{iconHandler(item.social_platform_name)}</Link>}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>}
                            </div>
                        ))}
                    </Slider>
                </div> : <div className="mb-5 pt-3"><NoDataFound /></div>}
            </div>}
        </>
    )
}

export default Media