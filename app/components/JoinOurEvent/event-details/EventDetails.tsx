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

const EventDetails = () => {
    const { featuredEventDetailData, featuredEventDetailError, featuredEventDetailLoading } = useFeaturedEventDetail();
    console.log('featured events details', featuredEventDetailData);

    return (
        <>
            {
                featuredEventDetailError ? <ErrorComponent /> : (
                    featuredEventDetailLoading ? <p className='text-center mt-5'>No Data Available</p> :
                        <div>
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
                            </div>
                            <SectionDivider />

                            <div className="container">
                                <div className="row">
                                    <div className="col-12">
                                        {/* <div className={styles.event_etails}>
                            <h1 className='text-success text-center mt-5 mb-3'>India Rural Colloquy 2024registration</h1>
                            <p className='text-center'>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus laudantium vitae consectetur deleniti maiores aliquam, minus officia facere, earum et culpa nisi asperiores fuga! Earum necessitatibus laborum deserunt ipsa nemo.
                                A cum sunt nobis nesciunt id enim modi dolorem eos? Tempore, fuga modi! Neque quia quod accusantium assumenda, qui cupiditate iure a sapiente architecto nobis quos? Animi quia harum veritatis?
                                Neque iste quia, debitis deserunt eveniet suscipit provident magnam porro laborum molestias! Ad quibusdam mollitia autem harum, neque reprehenderit placeat officiis cupiditate nihil ex commodi suscipit magnam dolore rerum sit.
                                Ea nam nesciunt enim assumenda tenetur itaque voluptatibus fuga harum voluptas? Sed, adipisci, temporibus assumenda reprehenderit recusandae animi unde quisquam eveniet doloremque reiciendis deserunt praesentium asperiores maiores. Et, architecto distinctio.
                                Ea ut eveniet sequi pariatur consequatur? Recusandae eum aspernatur asperiores perspiciatis itaque nulla, omnis maiores delectus ipsam deleniti, numquam voluptate ex earum iusto? Harum minus sapiente officia illum fugit recusandae.<br /><br /><br />
                                Modi expedita aliquid excepturi nisi laborum, ullam asperiores aperiam necessitatibus alias dignissimos sed vitae id dolor, eveniet ratione amet ad possimus dolores. Praesentium fugit molestias vel, cumque possimus voluptates eveniet?
                                Placeat, illo asperiores? Vel ipsum ipsa porro praesentium molestias placeat sequi magnam, tempore fugit sint voluptatum ratione qui error aut, doloremque eos eveniet, quia illo! Expedita necessitatibus nam aspernatur molestias.
                                Dolor fugiat ratione, a quidem iure perferendis, corporis, doloribus similique vel iusto minus sequi assumenda. Mollitia temporibus repudiandae cumque inventore deleniti. Quibusdam excepturi, alias modi quaerat in voluptate neque labore?
                                Sed ab vel dicta repudiandae at! Expedita cum dicta doloribus pariatur eaque doloremque laborum cupiditate, porro alias, deserunt enim veritatis quisquam nesciunt officiis ullam minus sunt saepe ex tempora totam.
                                Vel sint, explicabo culpa nulla voluptate, deleniti debitis quam doloremque nemo expedita incidunt. Iusto, quasi. Dolorem expedita nisi, minus quia incidunt rem harum provident perferendis! Ea molestiae vero corrupti sapiente?
                            </p>
                        </div> */}
                                        <span dangerouslySetInnerHTML={{ __html: featuredEventDetailData?.about_event ? featuredEventDetailData?.about_event : '' }}></span>
                                    </div>
                                    <SectionDivider />
                                    <div className="col-12 mt-5">
                                        <div className={styles.more_about_event}>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    {/* <div>
                                        <h1 className='text-success'>More About The Events</h1>
                                        <h5 className='text-secondary'>deleniti debitis quam doloremque</h5>
                                        <p className='text-secondary'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus laudantium vitae consectetur deleniti maiores aliquam, minus officia facere, earum et culpa nisi asperiores fuga! Earum necessitatibus laborum deserunt ipsa nemo.
                                            A cum sunt nobis nesciunt id enim modi dolorem eos? Tempore, fuga modi! Neque quia quod accusantium assumenda, qui cupiditate iure a sapiente architecto nobis quos? Animi quia harum veritatis?
                                        </p>
                                        <p className='text-secondary'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus laudantium vitae consectetur deleniti maiores aliquam, minus officia facere, earum et culpa nisi asperiores fuga! Earum necessitatibus laborum deserunt ipsa nemo.
                                            A cum sunt nobis nesciunt id enim modi dolorem eos? Tempore, fuga modi! Neque quia quod accusantium assumenda, qui cupiditate iure a sapiente architecto nobis quos? Animi quia harum veritatis?
                                        </p>
                                    </div> */}
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
                                    <VenueCard vanueData={featuredEventDetailData?.vanue} />
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