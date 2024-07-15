
import React, { useState } from 'react'
import styles from '@/app/styles/contactUs/contactUsCard.module.css'
import Image from 'next/image'
import Link from 'next/link';
import ContactUsCardSkeleton from '@/app/skeletons/cards/contactUs/ContactUsCardSkeleton';
import EmailIcon from '@mui/icons-material/Email';

interface contactUs {
    e: {
        img: string;
        title1: string;
        company: string;
        mail: string;
        text: string;
    },
    idx: any
}

const ContactUsCard: React.FC<contactUs> = ({ e, idx }) => {
    const [loading, setLoading] = useState(false)
    return (
        <>
            {
                loading ? <ContactUsCardSkeleton idx={idx} /> :
                    <div className={`card col-sm-6 ${styles.car}`} key={idx}>
                        <div className={styles.topContainer}>
                            <Image
                                className={` ${styles.img}`}
                                width={120}
                                height={200}
                                src={e.img}
                                alt="Team Image"
                            />
                        </div>
                        <div className="card-body">
                            <div className={`card-title ${styles.card1}`}>
                                {e.title1.length > 20 ? `${e.title1.slice(0, 20)}...` : e.title1}
                            </div>
                            <div className={`card-title ${styles.company}`}>
                                {e?.company?.length > 30 ? ` ${e?.company?.slice(0, 30)}...` : e?.company}
                            </div>
                            <p className={`card-text ${styles.cardText}`}>
                                {
                                    e.text.length > 160 ? `${e.text.slice(0, 160)}...` : e.text
                                }
                            </p>
                            <div className={`card-title ${styles.cardTitle}`}>
                                <a href={`mailto:${e.mail}`} className={styles.cardLink}>
                                    <span className='me-2'>
                                        <EmailIcon sx={{ fontSize: '1rem' }} />
                                    </span>
                                    {e.mail}
                                    </a>
                            </div>
                        </div>
                    </div>
            }
        </>
    )
}

export default ContactUsCard