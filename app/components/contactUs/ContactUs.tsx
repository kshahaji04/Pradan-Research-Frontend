'use client'
import React, { useState } from 'react'
import styles from '@/app/styles/contactUs/contactUs.module.css'
import { NextArrow, PrevArrow } from '@/app/cards/SlickButtons/SlickButtons';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ContactUsCard from '@/app/cards/contactUs/ContactUsCard';
import Image from 'next/image';
import Link from 'next/link';
import OrganizationCard from '@/app/cards/contactUs/OrganizationCard';
import bannerBg from '@/public/assets/images/bg/bannerBg.jpg';
import whiteBanner from '@/public/assets/images/bg/whiteBanner.jpg';
import GetContactUs from '@/app/hooks/contactUs/Contact_Us_hooks';
import { imageLoader } from '@/app/utils/image_loader_utils';
import Skeleton from 'react-loading-skeleton';
import ErrorComponent from '../ErrorComponent';
import noImage from '@/public/assets/images/no_image.jpg'
import NoDataFound from '../NoDataFound';
import ContactUsCardSkeleton from '@/app/skeletons/cards/contactUs/ContactUsCardSkeleton';

const ContactUs = () => {
  const { contactUs, loading, error } = GetContactUs()
  const settings = {
    dots: false,
    infinite: contactUs?.experts?.length > 1,
    slidesToShow: 4,
    slidesToScroll: 1,
    pauseOnHover: true,
    autoplay: false,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: contactUs?.experts?.length > 1,
          dots: false,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: contactUs?.experts?.length > 1,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      {
        error ? <div className="mb-5 pb-5"><ErrorComponent /></div> :
          <>
            <div className="bgImageWrapper">
              <div style={{ zIndex: '2', position: "relative", padding: "0px 0px 160px" }}>
                {
                  loading ? <Skeleton
                    width={1040}
                    className={styles.bannerImage}
                    height={500}
                  /> :
                  contactUs?.banner ? 
                    <Image
                      width={1040}
                      className={styles.bannerImage}
                      height={500}
                      alt='Images'
                      src={contactUs?.banner}
                      loader={imageLoader}
                    /> : ''
                }
              </div>
              <figure>
                <Image width={1200} height={1200} src={bannerBg} alt="bg" />
              </figure>
            </div>
            <div className="bgImageWrapper">
              <div className={`container`} style={{ zIndex: '2', position: "relative", padding: '0px 20px 80px', marginTop: '-40px' }}>
                <div className={styles.organizationCard}>
                  <OrganizationCard data={contactUs?.organizations} loading={loading} />
                </div>
              </div>
              <figure>
                {/* {width < 768 ?
                                <Image width={1200} height={1200} src={mobWhiteBanner} alt="bg" /> : */}
                <Image width={1200} height={1200} src={whiteBanner} alt="bg" />
                {/* } */}
              </figure>
            </div>
            <div className="bgImageWrapper py-5" style={{ backgroundColor: '#f5f5f5' }}>
              <div className="container">
                <h2 className={styles.title}>
                  {
                    loading ? <Skeleton width={150} height={30} /> : `Experts`
                  }
                </h2>
                <div className="row teamSlider teams">
                  <div style={{ width: '95%', margin: '0 auto' }}>
                    <Slider {...settings}>
                      {
                        loading
                          ? Array.from({ length: 4 }).map((item, index) => (
                            <ContactUsCardSkeleton key={index} />
                          ))
                          : contactUs?.experts?.length > 0
                            ? contactUs.experts.map((e: any, idx: any) => (
                              <ContactUsCard e={e} idx={idx} key={idx} loading={loading} />
                            ))
                            : (
                              <div className="mb-5 pt-3">
                                <NoDataFound />
                              </div>
                            )}
                    </Slider>
                  </div>
                </div>
              </div></div>
          </>
      }
    </>
  )
}

export default ContactUs