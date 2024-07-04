import React from 'react'
import styles from '@/app/styles/research/partnerCard.module.css'
import Image from 'next/image'

interface team {
    item: {
        img: string;
        title1: string;
        title2: string;
        text: string;
    },
    index: any
}

function PartnerCards({ item, index }:team) {
    return (
        <div className={`card col-sm-6 ${styles.car}`} key={index}>
            <div className={styles.topContainer}>
                <Image
                    className={`card-img-top ${styles.img}`}
                    width={120}
                    height={200}
                    src={item.img}
                    alt="Partner Image"
                />
            </div>
            <div className="card-body">
                <div className={`card-title ${styles.card1}`}>{item.title1 && item.title1.length > 15 ? `${item.title1.slice(0, 15)}...` : item.title1}</div>
                <div className={`card-title ${styles.cardTitle}`}>{item.title2 && item.title2.length > 30 ? `${item.title2.slice(0, 30)}...` : item.title2}</div>
                <p className={`card-text ${styles.cardText}`}>
                    {
                        item.text.length > 200 ? `${item.text.slice(0, 200)}...` : item.text
                    }</p>
            </div>
        </div>
    )
}

export default PartnerCards