import React from 'react'
import styles from '@/app/styles/contactUs/contactUs.module.css'
import { NextArrow, PrevArrow } from '@/app/cards/SlickButtons/SlickButtons';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ContactUsCard from '@/app/cards/contactUs/ContactUsCard';
import Image from 'next/image';
import Link from 'next/link';

import Skeleton from 'react-loading-skeleton';
import OrganizationCardSkeleton from '../cards/OrganizationCardSkeleton';
import ContactUsCardSkeleton from '../cards/ContactUsCardSkeleton';

const ContactUsSkeleton = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    pauseOnHover: true,
    autoplay: false,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
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
      <Skeleton
        width={1040}
        className={styles.bannerImage}
        height={500}
      />
      <div className={`container ${styles.mainConatiner}`}>
        <OrganizationCardSkeleton />
        <h2 className={styles.title}>
          <Skeleton width={150} height={30}/>
        </h2>
        <div className="row teamSlider teams">
          <div style={{ width: '95%', margin: '0 auto' }}>
            <Slider {...settings}>
              {
                Array.from({length:6}).map((e, idx) => (
                  <ContactUsCardSkeleton  idx={idx} key={idx} />
                ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactUsSkeleton