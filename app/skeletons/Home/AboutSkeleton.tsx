import React from 'react'
import styles from '@/app/styles/Home/about.module.css'
import Image from 'next/image'
import Link from 'next/link'
import Skeleton from 'react-loading-skeleton'

function AboutSkeleton() {
    return (
        <div className={`${styles.about_section_wrapper} py-5`}>
            <div className='container' style={{ zIndex: '2', position: "relative", padding: '40px 20px' }}>
                <div className="row">
                    <div className='col-lg-7'>
                        <div className={`${styles.about_wrapper}`}>
                            <div className="row" style={{width:'100%'}}>
                                <div className="col-11">
                                    <div className={`${styles.content} w-full mb-3`}>
                                        <h3 style={{ color: 'var(--primary)' }}><Skeleton width={'70%'} /></h3>
                                        <p>
                                            <Skeleton count={6} />
                                            <Skeleton width={'70%'} />
                                        </p>
                                        <Skeleton width={140} height={38} />
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-5'>
                        <div className={`${styles.image_wrapper}`}>
                            <div className={`${styles.cover_image}`}>
                                <Skeleton width={'100%'} height={350} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default AboutSkeleton
