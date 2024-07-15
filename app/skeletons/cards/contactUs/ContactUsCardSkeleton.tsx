
import React from 'react'
import styles from '@/app/styles/contactUs/contactUsCard.module.css'
import Skeleton from 'react-loading-skeleton';

interface contactUs {

    idx: any
}

const ContactUsCardSkeleton: React.FC<contactUs> = ({ idx }) => {

    return (
        <div className={`card col-sm-6 ${styles.car}`} key={idx}>
            <div className={styles.topContainer}>
                <Skeleton
                  style={
                    {overflow:'hidden', width:'100%'}
                  }
                    // className={` ${styles.img}`}
                    width={120}
                    height={200}
                />
            </div>
            <div className="card-body">
                <div className={`card-title ${styles.card1}`}>
                    <Skeleton width={'100%'} height={40} />
                </div>
                <div className={`card-title ${styles.company}`}>
                    <Skeleton width={'60%'} height={30} />
                </div>
                <p className={`card-text ${styles.cardText}`}>
                    <Skeleton width={'100%'} height={20} count={3} />
                    <Skeleton width={'50%'} height={20} count={1} />
                </p>
                <div className={`card-title ${styles.cardTitle}`}>
                    <div className={styles.cardLink}>
                        <Skeleton width={'50%'} height={20} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUsCardSkeleton