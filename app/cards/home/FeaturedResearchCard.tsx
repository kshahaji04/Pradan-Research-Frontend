import { imageLoader } from '@/app/utils/image_loader_utils'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from '@/app/styles/featuredResearch/featuredReseareh.module.css'
import { FeaturedDataInterface } from '@/app/interfaces/home_page_interface'
import noImage from '@/public/assets/images/no_image.jpg'

interface FeaturedResearchCardProps {
    item: FeaturedDataInterface;
}

function FeaturedResearchCard({ item }: FeaturedResearchCardProps) {
    return (
        <div className={`row mx-auto  ${styles.mainRow}`}>
            <div className={`col-md-7 px-0`}>
                <Image width={500} height={450} className={`${styles.featuredImage}`} loader={imageLoader} alt='Image' src={item?.image || noImage} />
            </div>
            <div className={`col-md-5 card ${styles.cardMain}`}>
                <div className="card-body">
                    <div className='card-title'>
                        <Link href='/' className={styles.card1Title}>
                            {item?.title}
                        </Link>
                    </div>
                    <div className={`${styles.author}`}>
                        <p>
                            {item?.sub_title}
                        </p>
                    </div>
                    <div className={styles.describtion}>
                        <span dangerouslySetInnerHTML={{ __html: item?.short_description ?? '' }}></span>
                    </div>
                    <div>
                        <div className={`${styles.roundedMain}`}>
                            <div className={`${styles.rounded} ${styles.one}`}></div>
                            <div className={`${styles.rounded} ${styles.two}`}></div>
                            <div className={`${styles.rounded} ${styles.three}`}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeaturedResearchCard