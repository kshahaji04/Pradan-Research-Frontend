import React, { useState } from 'react'
import styles from '@/app/styles/contactUs/contactUs.module.css'
import Link from 'next/link'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import PersonIcon from '@mui/icons-material/Person';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import DirectionsBikeIcon from '@mui/icons-material/DirectionsBike';
import Skeleton from 'react-loading-skeleton';
const OrganizationCardSkeleton = () => {

    const data = [
        {
            icon: <AccessibilityIcon className={styles.iconContainer} />,
            name: 'OluTimehin Adegbeye',
            desc: ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi corrupti, quos optio blanditiis',
            address: 'Mumbai Maharashtra',
            fd: '/',
            insta: '/',
            linkdin: '/',
            whatsApp: '/',
            x: '/'
        },
        {
            icon: <PersonIcon className={styles.iconContainer} />,
            name: 'Eric Holthaus',
            desc: ' ',
            address: 'Nashik Maharashtra'
        },
        {
            icon: <PersonOutlineIcon className={styles.iconContainer} />,
            name: 'Sanne Blauw',
            desc: ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi corrupti, quosoptio blanditiis',
            address: 'Pune Maharashtra'
        },
        {
            icon: <DirectionsBikeIcon className={styles.iconContainer} />,
            name: 'Irane Caseli',
            desc: ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi corrupti, quosoptio blanditiis',
            address: 'Nagpur Maharashtra'
        }
    ]

    return (
        <>
            {
                <>
                    <h2 className={styles.title}>
                        <Skeleton width={150} height={30} />
                    </h2>
                    <div className={`row ${styles.cardOrganization}`}>
                        {
                            data.map((item, index) => {
                                return (
                                    <div className="col-md-6 col-xl-3 col-sm-6 g-4" key={index}>
                                        <div className="card h-100">
                                            <div className='mx-4'>
                                              <Skeleton width={80} height={80}/>
                                            </div>
                                            <div className="card-body justify-content-between">
                                                <div className={`card-title ${styles.name}`}>
                                               <Skeleton width={'50%'} height={30}/>
                                                </div>
                                                <div className="card-text">
                                               <Skeleton width={'100%'} height={20} count={2}/>
                                               <Skeleton width={'50%'} height={20} count={1}/>
                                                </div>
                                                <div className={`card-text pt-2 ${styles.cardText2}`}>
                                                   <Skeleton width={'70%'} height={30}/>
                                                </div>

                                            </div>
                                            <ul className={`card-footer list-inline my-4 ${styles.foot}`}>
                                                <li className='list-inline-item'><div  className={`${styles.faceBook}`}>
                                                    <Skeleton circle={true} width={20} height={20}/>
                                                    </div></li> 
                                                <li className='list-inline-item'><div className={`${styles.insta_icon}`}>
                                                <Skeleton circle={true} width={20} height={20}/>
                                                </div></li>
                                                <li className='list-inline-item'><div  className={`${styles.whats_app_icon}`}>
                                                <Skeleton circle={true} width={20} height={20}/>
                                                </div></li>
                                                <li className='list-inline-item'><div  className={`${styles.linkdin}`}  >
                                                <Skeleton circle={true} width={20} height={20}/>
                                                    </div></li>
                                                <li className='list-inline-item'><div className={`${styles.tweeter_icon}`}>
                                                <Skeleton circle={true} width={20} height={20}/>
                                                    </div></li>
                                            </ul>
                                        </div>
                                    </div>
                                )
                            })
                        }

                    </div>
                </>
            }
        </>
    )
}

export default OrganizationCardSkeleton