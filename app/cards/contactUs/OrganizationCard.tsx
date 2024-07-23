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
import { imageLoader } from '@/app/utils/image_loader_utils copy';
import Skeleton from 'react-loading-skeleton';


const OrganizationCard = ({ data, loading }: any) => {

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
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
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
      <div className={`row teamSlider ${styles.cardOrganization}`}>
        <div >
          <Slider {...settings}>
            {
              data?.map((item: any, index: any) => {
                return (

                  <div className={`col-md-6 col-xl-3 col-sm-6 ${styles.car}`} key={index} >
                    {
                      loading ? <OrganizationCardSkeleton idx={index} /> :
                        <div className={`card  ${styles.mainOrgCard}`}>
                          <div className={`px-3 ${styles.iconCont}`}>
                            <Image width={80} height={80} src={`${item.logo}`}
                              alt='com' className={styles.iconContainer}
                              loader={imageLoader}
                            />
                          </div>
                          <div className="card-body justify-content-between">
                            <div className={`card-title ${styles.name}`}>
                              {item?.company_name}
                            </div>
                            <div className={`card-text pt-2  ${styles.carText}`}>
                              {item.company_address?.length > 108 ? item.company_address?.slice(0, 108) : item?.company_address}
                            </div>
                            {/* <div className={`card-text ${styles.cardText2}`}>
                                                    {item.address}
                                                </div> */}

                          </div>
                          <ul className={`card-footer list-inline  ${styles.foot}`}>
                            {
                              item?.social_link?.length > 0 &&
                              item?.social_link?.map((e: any, index: any) => {
                                console.log(e)
                                return (
                                  <>
                                   {e.title==='Facebook' ? <li className='list-inline-item'><Link href={`${e.link}`} target='blank' className={`${styles.faceBook}`}><FacebookIcon /></Link></li> :''}
                                  { e.title === 'Instagram' ?  <li className='list-inline-item'><Link href={`${e.link}`} target='blank' className={`${styles.insta_icon}`}><InstagramIcon /></Link></li> : ''}
                                    {/* <li className='list-inline-item'><Link href={`${item.whatsApp}`} className={`${styles.whats_app_icon}`}><WhatsAppIcon /></Link></li> */}
                                   {e.title === 'Linkedin' ? <li className='list-inline-item'><Link href={`${e.link}`} target='blank' className={`${styles.linkdin}`}  ><LinkedInIcon /></Link></li> : ''}
                                   {e.title ==='Twitter' ? <li className='list-inline-item'><Link href={`${e.link}`}  className={`${styles.tweeter_icon}`}><XIcon /></Link></li> : ''}
                                  </>
                                )
                              }
                              )

                            }
                          </ul>
                        </div>

                    }
                  </div>
                )
              })
            }

          </Slider>
        </div>

      </div>
    </>

  )
}

export default OrganizationCard