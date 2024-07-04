import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from "@/app/styles/research/researchCard.module.css"

function ResearchCards({item, index, link}:any) {
    return (
        <div className="col-md-6 col-lg-4 g-4 p-4" key={index}>
            <Link href={link} style={{ textDecoration: 'none' }}>
                <div className={`card  ${styles.car}`}>
                    <div>
                        <Image width={470} height={300} className={`${styles.img}`} src={item.image} alt='Image' />
                    </div>
                    <div className='p-4' >
                        <div >
                            <p>
                                {item.text1}
                            </p>
                        </div>
                        <div>
                            <h4>
                                {item.title2}
                            </h4>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default ResearchCards