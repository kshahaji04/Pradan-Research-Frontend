import React, { useState } from 'react'
import styles from '@/app/styles/contactUs/contactUs.module.css'
import Link from 'next/link'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import OrganizationCardSkeleton from '@/app/skeletons/cards/contactUs/OrganizationCardSkeleton';
import Image from 'next/image';
import Slider from 'react-slick';
import { NextArrow, PrevArrow } from '../SlickButtons/SlickButtons';
import { max } from 'moment';
import { imageLoader } from '@/app/utils/image_loader_utils';
import Skeleton from 'react-loading-skeleton';
import NoDataFound from '@/app/components/NoDataFound';
import noImage from '@/public/assets/images/no_image.jpg'

const OrganizationCard = ({ data, loading }: any) => {

  const settings = {
    dots: false,
    infinite:  data?.length > 1,
    slidesToShow: 3,
    slidesToScroll: 1,
    pauseOnHover: true,
    autoplay: false,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite:  data?.length > 1,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,

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


  // const maxLength = Math.max(...data.map(item => item.desc.length));
  // const paddedData = data.map(item => ({
  //     ...item,
  //     desc: `${item.desc.padEnd(maxLength , ' ')}.`
  // }));
  return (
    <>
      <h2 className={styles.title}>
        {loading ? <Skeleton width={150} height={30} /> : `Organization`}
      </h2>
      <div className="row">
      <div className={`row teamSlider col-xl-9 ${styles.cardOrganization}`}>
          <Slider {...settings}>
            {
              loading ? 
              Array.from({length:4}).map((item,index)=>{
                return(
                <div className={`col-md-6 col-xl-3 col-sm-6 ${styles.car}`} key={index}>
                <OrganizationCardSkeleton/>
                </div>
                )
              })
             
               :
                data?.length > 0 &&
                data?.map((item: any, index: any) => {
                  return (
                    <div className={`col-md-6 col-xl-3 col-sm-6 ${styles.car}`} key={index}>
                      <div className={`card  ${styles.mainOrgCard}`}>
                        <div className={`px-3 ${styles.iconCont}`}>
                          <Image
                            width={80}
                            height={80}
                            src={`${item?.logo || noImage.src}`}
                            alt='com'
                            className={styles.iconContainer}
                            loader={imageLoader}
                          />
                        </div>
                        <div className="card-body justify-content-between">
                          <div className={`card-title ${styles.name}`}>
                            {item?.company_name}
                          </div>
                          <div className={`card-text pt-2  ${styles.carText}`}>
                            {item?.company_address?.length > 108 ? `${item?.company_address?.slice(0, 108)}...` : item?.company_address}
                          </div>
                        </div>
                        <ul className={`card-footer list-inline  ${styles.foot}`}>
                          {
                            item?.social_link?.length > 0 &&
                            item?.social_link?.map((e: any, index: any) => {
                              return (
                                <React.Fragment key={index}>
                                  {e?.title === 'Facebook' && <li className='list-inline-item'><Link href={`${e?.link}`} target='blank' className={`${styles.faceBook}`}><FacebookIcon /></Link></li>}
                                  {e?.title === 'Instagram' && <li className='list-inline-item'><Link href={`${e?.link}`} target='blank' className={`${styles.insta_icon}`}><InstagramIcon /></Link></li>}
                                  {e?.title === 'Linkedin' && <li className='list-inline-item'><Link href={`${e?.link}`} target='blank' className={`${styles.linkdin}`}><LinkedInIcon /></Link></li>}
                                  {e?.title === 'Twitter' && <li className='list-inline-item'><Link href={`${e?.link}`} className={`${styles.tweeter_icon}`}><XIcon /></Link></li>}
                                </React.Fragment>
                              )
                            })
                          }
                        </ul>
                      </div>
                    </div>
                     )
                   })
                  }
          </Slider>
      </div>
      <div className="com-xl-3"></div>
      </div>
    </>

  )
}

export default OrganizationCard