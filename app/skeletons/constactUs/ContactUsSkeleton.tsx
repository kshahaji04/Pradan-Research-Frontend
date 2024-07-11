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
  const data = [
    {
      img: 'https://archive.cdn-thecorrespondent.com/image/KYLF_5N3RYgrBKQQ2wbRJJTWixM=/380x440/0495c5cb7d0a420a88dd1871292f1afb.png',
      title1: 'OluTimehin Adegbeye ',
      company: '8848 Digital',
      mail: 'test@mail.com',
      text: 'As the Climate correspondent, I seek to tell better stories about the biggest problem facing our world – from the complex science to visions of a better society that works for everyone. Ask me about: slow travel, beekeeping, autism.',
    },
    {
      img: 'https://archive.cdn-thecorrespondent.com/image/vN99Hg0cW0j0xvHFO9zaTnxRjaQ=/380x440/1c2433e933c84307ae162c52b706f750.png',
      title1: 'Eric Holthaus',
      company: '8848 Digital',
      mail: 'test@mail.com',
      text: 'As the Climate correspondent, I seek to tell better stories about the biggest problem facing our world – from the complex science to visions of a better society that works for everyone. Ask me about: slow travel, beekeeping, autism'
    },
    {
      img: 'https://archive.cdn-thecorrespondent.com/image/VQXB9E7AZmUbkQDc-YZRNCyne5Q=/380x440/cb67e766a93b428a870c6a23de77204d.png',
      title1: ' Sanne Blauw',
      company: '8848 Digital',
      mail: 'test@mail.com',
      text: 'Sanne holds a PhD in Econometrics from the Erasmus School of Economics. As the Numeracy correspondent, she explores the world of numbers and how they affect our lives. She is the author of the Dutch bestseller "The Number Bias".'
    },
    {
      img: 'https://archive.cdn-thecorrespondent.com/image/KYLF_5N3RYgrBKQQ2wbRJJTWixM=/380x440/0495c5cb7d0a420a88dd1871292f1afb.png',
      title1: 'Irane Caseli',
      company: '8848 Digital',
      mail: 'test@mail.com',
      text: 'I will report on how important the beginning of life is, and show why children’s perspectives should not be left out of journalism and policymaking. Ask me about: nomadic lifestyles, breastfeeding, Latin America.'
    },
    {
      img: 'https://archive.cdn-thecorrespondent.com/image/vN99Hg0cW0j0xvHFO9zaTnxRjaQ=/380x440/1c2433e933c84307ae162c52b706f750.png',
      title1: 'Thomas Oudman',
      company: '8848 Digital',
      mail: 'test@mail.com',
      text: 'I will report on how important the beginning of life is, and show why children’s perspectives should not be left out of journalism and policymaking. Ask me about: nomadic lifestyles, breastfeeding, Latin America.'
    }
  ]
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
                data.map((e, idx) => (
                  <ContactUsCardSkeleton e={e} idx={idx} key={idx} />
                ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactUsSkeleton