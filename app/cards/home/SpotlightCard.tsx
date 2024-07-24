import { imageLoader } from '@/app/utils/image_loader_utils'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from '@/app/styles/featuredResearch/featuredReseareh.module.css'
import { SpotlightDataInterface } from '@/app/interfaces/home_page_interface'
import noImage from '@/public/assets/images/no_image.jpg'

interface SpotlightCardProps {
    spotlightData: SpotlightDataInterface;
}

function SpotlightCard({ spotlightData }: SpotlightCardProps) {
    return (
        <div className={`card ${styles.cardMain2}`}>
            <Image width={200} height={200} className='card-img-top'
                src={spotlightData?.image || noImage} loader={imageLoader} alt='images' />
            <div className="card-body">
                <div className={`card-title`}>
                    <p className={`${styles.card1Title} mb-0`} >
                        {spotlightData?.name1}
                    </p>
                </div>
                <div className={`card-text ${styles.role} mb-2`}>
                    {spotlightData?.Designation}
                </div>
                <div className="card-text" >
                    <p className={styles.card2text}>
                        <span dangerouslySetInnerHTML={{
                            __html: spotlightData?.short_description ? spotlightData?.short_description?.length > 160 ?
                                `${spotlightData?.short_description?.slice(0, 160)}...` : spotlightData?.short_description : ''
                        }}></span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default SpotlightCard