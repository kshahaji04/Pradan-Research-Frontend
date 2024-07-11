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
        <div key={index} className='d-flex justify-content-center'> 
                <Image
                    // className={`card-img-top`}
                    width={100}
                    height={50}
                    src={item.img}
                    alt="Partner Image"
                />     
        </div>
    )
}

export default PartnerCards