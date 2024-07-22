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

const OrganizationCard = () => {
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

    const data = [
        {
            icon: `https://www.zarla.com/images/apple-logo-2400x2400-20220512-2.png?crop=1:1,smart&width=150&dpr=2`,
            name: 'Apple',
            desc: 'One Apple Park Way, Cupertino, CA 95014, United States',
            address: 'Mumbai Maharashtra',
            fd: '/',
            insta: '/',
            linkdin: '/',
            whatsApp: '/',
            x: '/'
        },
        {
            icon: 'https://www.zarla.com/images/google-logo-2400x2400-20220519.png?crop=1:1,smart&width=150&dpr=2',
            name: 'Google',
            desc: '1600 Amphitheatre Parkway. Mountain View, CA 94043, USA.',
            address: 'Nashik Maharashtra'
        },
        {
            icon: 'https://www.zarla.com/images/bmw-logo-2400x2400-20220512.png?crop=1:1,smart&width=150&dpr=2',
            name: 'BMW',
            desc: '1600 Amphitheatre Parkway. Mountain View, CA 94043, USA.',
            address: 'Pune Maharashtra'
        },
        {
            icon:'https://www.zarla.com/images/visa-logo-2400x2400-20220513.png?crop=1:1,smart&width=150&dpr=2',
            name: 'VISA',
            desc: ' A, The Capital, 1702, G Block Rd, G Block BKC, Bandra Kurla Complex, Bandra East, Mumbai, Maharashtra 400051',
            address: 'Nagpur Maharashtra'
        }
    ]
    // const maxLength = Math.max(...data.map(item => item.desc.length));
    // const paddedData = data.map(item => ({
    //     ...item,
    //     desc: `${item.desc.padEnd(maxLength , ' ')}.`
    // }));
    return (
        <>
            { 
              loading ? <OrganizationCardSkeleton/> :
                <>
                    <h2 className={styles.title}>
                        Organization
                    </h2>
                    <div className={`row teamSlider ${styles.cardOrganization}`}>
                    <div >
                        <Slider {...settings}>
                        {
                            data.map((item, index) => {
                                return (
                                    <div className={`col-md-6 col-xl-3 col-sm-6 ${styles.car}`} key={index} >
                                        <div className={`card  ${styles.mainOrgCard}`}>
                                            <div className={`px-3 ${styles.iconCont}`}>
                                              <Image width={80} height={80} src={`${item.icon}`}
                                              alt='com' className={styles.iconContainer}
                                              />
                                            </div>
                                            <div className="card-body justify-content-between">
                                                <div className={`card-title ${styles.name}`}>
                                                    {item.name}
                                                </div>
                                                <div className={`card-text pt-2  ${styles.carText}`}>
                                                    {item.desc?.length > 108 ? item.desc?.slice(0,108) : item?.desc }
                                                </div>
                                                {/* <div className={`card-text ${styles.cardText2}`}>
                                                    {item.address}
                                                </div> */}

                                            </div>
                                            <ul className={`card-footer list-inline  ${styles.foot}`}>
                                                <li className='list-inline-item'><Link href={`${item.fd}`} className={`${styles.faceBook}`}><FacebookIcon /></Link></li>
                                                <li className='list-inline-item'><Link href={`${item.insta}`} className={`${styles.insta_icon}`}><InstagramIcon /></Link></li>
                                                {/* <li className='list-inline-item'><Link href={`${item.whatsApp}`} className={`${styles.whats_app_icon}`}><WhatsAppIcon /></Link></li> */}
                                                <li className='list-inline-item'><Link href={`${item.linkdin}`} className={`${styles.linkdin}`}  ><LinkedInIcon /></Link></li>
                                                <li className='list-inline-item'><Link href={`${item.x}`} className={`${styles.tweeter_icon}`}><XIcon /></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                )
                            })
                        }

                        </Slider>
                     </div>

                    </div>
                </>
            }
        </>
    )
}

export default OrganizationCard