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
import ContactUsSkeleton from '@/app/skeletons/constactUs/ContactUsSkeleton';
import bannerBg from '@/public/assets/images/bg/bannerBg.jpg';
import whiteBanner from '@/public/assets/images/bg/whiteBanner.jpg';


const ContactUs = () => {
  const [loading, setLoading] = useState(false)
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
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1200,
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
      title1: ' OluTimehin Adegbeye OluTimehin Adegbeye',
      designation:'Scientist',
      company: '8848 Digital',
      mail: 'test@mail.com',
      text: 'As the Climate correspondent, I seek to tell better stories about the biggest problem facing our world – from the complex science to visions of a better society that works for everyone. Ask me about: slow travel, beekeeping, autism.',
    },
    {
      img: 'https://archive.cdn-thecorrespondent.com/image/vN99Hg0cW0j0xvHFO9zaTnxRjaQ=/380x440/1c2433e933c84307ae162c52b706f750.png',
      title1: 'Eric Holthaus',
      designation:'Analyst',
      company: '8848 Digital',
      mail: 'test@mail.com',
      text: 'As the Climate correspondent, I seek to tell better stories about the biggest problem facing our world – from the complex science to visions of a better society that works for everyone. Ask me about: slow travel, beekeeping, autism'
    },
    {
      img: 'https://archive.cdn-thecorrespondent.com/image/VQXB9E7AZmUbkQDc-YZRNCyne5Q=/380x440/cb67e766a93b428a870c6a23de77204d.png',
      title1: ' Sanne Blauw',
      designation:'Scientist',
      company: '8848 Digital',
      mail: 'test@mail.com',
      text: 'Sanne holds a PhD in Econometrics from the Erasmus School of Economics. As the Numeracy correspondent, she explores the world of numbers and how they affect our lives. She is the author of the Dutch bestseller "The Number Bias".'
    },
    {
      img: 'https://archive.cdn-thecorrespondent.com/image/KYLF_5N3RYgrBKQQ2wbRJJTWixM=/380x440/0495c5cb7d0a420a88dd1871292f1afb.png',
      title1: 'Irane Caseli',
      designation:'Manager',
      company: '8848 Digital',
      mail: 'test@mail.com',
      text: 'I will report on how important the beginning of life is, and show why children’s perspectives should not be left out of journalism and policymaking. Ask me about: nomadic lifestyles, breastfeeding, Latin America.'
    },
    {
      img: 'https://archive.cdn-thecorrespondent.com/image/vN99Hg0cW0j0xvHFO9zaTnxRjaQ=/380x440/1c2433e933c84307ae162c52b706f750.png',
      title1: 'Thomas Oudman',
      designation:'Analyst',
      company: '8848 Digital',
      mail: 'test@mail.com',
      text: 'I will report on how important the beginning of life is, and show why children’s perspectives should not be left out of journalism and policymaking. Ask me about: nomadic lifestyles, breastfeeding, Latin America.'
    }
  ]
  return (
    <>
      {
        loading ? <ContactUsSkeleton /> :
          <>
            <div className="bgImageWrapper">
              <div style={{ zIndex: '2', position: "relative", padding: "0px 0px 160px" }}>
                <Image
                  width={1040}
                  className={styles.bannerImage}
                  height={500}
                  alt='Images'
                  src={'https://images.unsplash.com/photo-1506765515384-028b60a970df?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
                />
              </div>
              <figure>
                <Image width={1200} height={1200} src={bannerBg} alt="bg" />
              </figure>
            </div>
            <div className="bgImageWrapper">
              <div className={`container`} style={{ zIndex: '2', position: "relative", padding: '0px 20px 80px', marginTop: '-40px' }}>
                <div className={styles.organizationCard}>
                  <OrganizationCard />
                </div>
              </div>
              <figure>
                {/* {width < 768 ?
                                <Image width={1200} height={1200} src={mobWhiteBanner} alt="bg" /> : */}
                <Image width={1200} height={1200} src={whiteBanner} alt="bg" />
                {/* } */}
              </figure>
            </div>
            <div className="bgImageWrapper py-5" style={{backgroundColor:'#f5f5f5'}}>
              <div className="container">
                <h2 className={styles.title}>
                  Experts
                </h2>
                <div className="row teamSlider teams">
                  <div style={{ width: '95%', margin: '0 auto' }}>
                    <Slider {...settings}>
                      {
                        data.map((e, idx) => (
                          <ContactUsCard e={e} idx={idx} key={idx} />
                        ))}
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