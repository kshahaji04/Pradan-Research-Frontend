'use client'
import Image from 'next/image'
import React from 'react'
import bannerBg from '@/public/assets/images/photo-banner.avif';
import { imageLoader } from '@/app/utils/image_loader_utils';
import styles from '@/app/styles/joinOurEvent/join_our_event.module.css'
import { Carousel } from 'react-bootstrap';
import banner from '@/public/assets/images/banner.jpg'
import banner1 from '@/public/assets/images/banner1.avif'
import SectionDivider from '../../SectionDivider';
import RegistrationForm from '../components/RegistrationForm';
import VenueCard from './VenueCard';
import useFeaturedEventDetail from '@/app/hooks/event_hook/featured_event_detail_hooks';
import ErrorComponent from '../../ErrorComponent';
import FeaturedEventDetailsSkeleton from '@/app/skeletons/JoinOurEvent/FeaturedEventDetailsSkeleton';
import Link from 'next/link';

const EventDetails = () => {
    const { featuredEventDetailData, featuredEventDetailError, featuredEventDetailLoading } = useFeaturedEventDetail();
    console.log('featured events details', featuredEventDetailData);

    return (
        <>
            {
                featuredEventDetailError ? <ErrorComponent /> : (
                    featuredEventDetailLoading ? <FeaturedEventDetailsSkeleton /> :
                        <div>
                            {
                                featuredEventDetailData?.banner_image &&
                                <div className="">
                                    <div style={{ zIndex: '2', }}>

                                        <Image
                                            width={1500}
                                            className=''
                                            height={500}
                                            alt='Images'
                                            src={featuredEventDetailData?.banner_image}
                                            loader={imageLoader}
                                            style={{ width: '100%' }}
                                        />

                                    </div>
                                    <SectionDivider />
                                </div>
                            }

                            <div className="container">
                                <div className="row">
                                    <div className="col-12">

                                        <span dangerouslySetInnerHTML={{ __html: featuredEventDetailData?.about_event ? featuredEventDetailData?.about_event : '' }}></span>
                                    </div>
                                    <SectionDivider />
                                    <div className="col-12 mt-5">
                                        <div className={styles.more_about_event}>
                                            <div className="row">
                                                <div className="col-md-6">

                                                    <span dangerouslySetInnerHTML={{ __html: featuredEventDetailData?.more_about_event ? featuredEventDetailData?.more_about_event : '' }}></span>

                                                </div>
                                                <div className="col-md-6">
                                                    <div>
                                                        <Carousel>
                                                            {
                                                                featuredEventDetailData?.images && featuredEventDetailData?.images.map((data: any, index: number) => (
                                                                    <Carousel.Item key={index} >
                                                                        <Image
                                                                            src={data?.image}
                                                                            alt=''
                                                                            loader={imageLoader}
                                                                            height={400}
                                                                            width={600}
                                                                        />
                                                                    </Carousel.Item>
                                                                ))
                                                            }
                                                        </Carousel>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <SectionDivider />
                                    <VenueCard venueData={featuredEventDetailData?.vanue} />
                                    <div className='text-center'>

                                        <Link href='/' target='_blank' className='btn btn-outline-success w-25'>Download Event Broucher</Link>
                                    </div>

                                    <SectionDivider />

                                    <div className="col-12">
                                        <div>
                                            <h4 className='text-success text-center'>Here you can Register</h4>
                                            <RegistrationForm />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                )
            }
        </>
    )

}

export default EventDetails