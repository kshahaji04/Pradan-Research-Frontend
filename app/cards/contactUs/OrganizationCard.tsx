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
import OrganizationCardSkeleton from '@/app/skeletons/cards/OrganizationCardSkeleton';
import Image from 'next/image';
const OrganizationCard = () => {
    const [loading, setLoading] = useState(false)
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

    return (
        <>
            { 
              loading ? <OrganizationCardSkeleton/> :
                <>
                    <h2 className={styles.title}>
                        Organization
                    </h2>
                    <div className={`row ${styles.cardOrganization}`}>
                        {
                            data.map((item, index) => {
                                return (
                                    <div className="col-md-6 col-xl-3 col-sm-6 g-4" key={index}>
                                        <div className="card h-100">
                                            <div className={`mx-4 ${styles.iconCont}`}>
                                              <Image width={80} height={80} src={`${item.icon}`}
                                              alt='com' className={styles.iconContainer}
                                              />

                                            </div>
                                            <div className="card-body justify-content-between">
                                                <div className={`card-title ${styles.name}`}>
                                                    {item.name}
                                                </div>
                                                <div className="card-text pt-2">
                                                    {item.desc}
                                                </div>
                                                {/* <div className={`card-text ${styles.cardText2}`}>
                                                    {item.address}
                                                </div> */}

                                            </div>
                                            <ul className={`card-footer list-inline  ${styles.foot}`}>
                                                <li className='list-inline-item'><Link href={`${item.fd}`} className={`${styles.faceBook}`}><FacebookIcon /></Link></li>
                                                <li className='list-inline-item'><Link href={`${item.insta}`} className={`${styles.insta_icon}`}><InstagramIcon /></Link></li>
                                                <li className='list-inline-item'><Link href={`${item.whatsApp}`} className={`${styles.whats_app_icon}`}><WhatsAppIcon /></Link></li>
                                                <li className='list-inline-item'><Link href={`${item.linkdin}`} className={`${styles.linkdin}`}  ><LinkedInIcon /></Link></li>
                                                <li className='list-inline-item'><Link href={`${item.x}`} className={`${styles.tweeter_icon}`}><XIcon /></Link></li>
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

export default OrganizationCard