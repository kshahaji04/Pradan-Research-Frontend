import React, { useState } from 'react';
import styles from '@/app/styles/contactUs/contactUsCard.module.css';
import Image from 'next/image';
import Link from 'next/link';
import ContactUsCardSkeleton from '@/app/skeletons/cards/contactUs/ContactUsCardSkeleton';
import EmailIcon from '@mui/icons-material/Email';
import { imageLoader } from '@/app/utils/image_loader_utils';



const ContactUsCard = ({ e, idx, loading }: any) => {

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
                                src={e?.image}
                                alt="Team Image"
                                loader={imageLoader}
                            />
                        </div>
                        <div className="card-body">
                            <div className={`card-title ${styles.card1}`}>
                                {e?.name?.length > 50 ? `${e?.name.slice(0, 50)}...` : e?.name}
                            </div>
                            <div className={`${styles.designation}`}>
                                {e.designation}
                            </div>
                            <div className={`card-title ${styles.company}`}>
                                {e?.company_name?.length > 30 ? ` ${e?.company_name?.slice(0, 30)}...` : e?.company_name}
                            </div>
                            <p className={`card-text ${styles.cardText}`}>
                                {
                                    e?.description?.length > 160 ? `${e?.description?.slice(0, 160)}...` : e?.description
                                }
                            </p>
                            <div className={`card-title ${styles.cardTitle}`}>
                                <a href={`mailto:${e?.email}`} className={styles.cardLink}>
                                    <span className='me-2'>
                                        <EmailIcon sx={{ fontSize: '1rem' }} />
                                    </span>
                                    {e?.email}
                                </a>
                            </div>
                        </div>
                    </div>
            }
        </>
    )
}

export default ContactUsCard