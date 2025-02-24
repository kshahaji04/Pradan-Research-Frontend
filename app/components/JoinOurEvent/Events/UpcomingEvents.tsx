import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from '@/app/styles/joinOurEvent/join_our_event.module.css'
import Image from "next/image";
import JoinOurEventCards from "@/app/cards/joinOurEvent/JoinOurEventCards";
import whiteBanner from '@/public/assets/images/bg/whiteBanner.jpg';
import topRoundedBorders from '@/public/assets/images/bg/topRoundedBorders.jpg'
import { NextArrow, PrevArrow } from "@/app/cards/SlickButtons";
import Link from "next/link";
import useRegularEvenetHook from "@/app/hooks/event_hook/join_evevnt_upcomingevents_regular_hooks";
import ErrorComponent from "../../ErrorComponent";
import NoDataFound from "../../NoDataFound";
import useFeaturedEvents from "@/app/hooks/event_hook/featured_events_hooks";
import JoinOurEventCardsSkeleton from "@/app/skeletons/cards/joinOurEvent/JoinOurEventCardsSkeleton";
import dateFormat from "@/app/utils/dateFormat";
import { imageLoader } from '@/app/utils/image_loader_utils';
import FeaturedEventSkeleton from "@/app/skeletons/JoinOurEvent/FeaturedEventSkeleton";
import img from '@/public/assets/images/Screenshot 2024-07-30 180704.png';
import { CONSTANTS } from "@/app/services/config/app-config";


const UpcomingEvents = () => {
  const { data, isLoading, error } = useRegularEvenetHook()
  console.log(data, 'inside upcomg events')
  useEffect(() => {
    AOS.init();
  }, []);
  const settings = {
    dots: false,
    infinite: data?.length > 4,
    slidesToShow: 4,
    slidesToScroll: data?.length > 3 ? 1 : 0,
    pauseOnHover: true,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: data?.length > 2 ? 1 : 0,
          infinite: data?.length > 1,
          dots: true,
        },
      },
      {
        breakpoint: 995,
        settings: {
          slidesToShow: 2,
          slidesToScroll: data?.length > 1 ? 1 : 0,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: data?.length > 1 ? 1 : 0,
        },
      },
    ],
  };



  const dataForFeaturedEvent = [
    {
      backGround: 'https://images.unsplash.com/photo-1509078302641-7553084efc8f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      image: '/files/photo-1591851395349-6d8c2fe76e24.webp',
      title: ' Indian Rural Colloquy',
      short_description: '  Ignite With Rural Renaissance lorem ipsum is a placeholder text commonly used to demonstrate the visual',
      sub_title: ' August Kranti Week ',
      from_date: '2024-07-26',
      to_date: '2024-07-30',
      state: 'Chatisgarh',
      type: 'In-person',
      slug: 'feature-event',
      backgroungImage: false,
      fearturedImg: img
    }
  ]

  const venueData = [{
    venue_name: 'Mumbai',
    from_date: '2024-07-26',
    to_date: '2024-07-30',
    time: '9:00 AM to 6:00 PM'

  },
  {
    venue_name: 'Gujarat',
    from_date: '2024-07-26',
    to_date: '2024-07-30',
    time: '9:00 AM to 6:00 PM'

  },
  {
    venue_name: 'Chatisgarh',
    from_date: '2024-07-26',
    to_date: '2024-07-30',
    time: '9:00 AM to 6:00 PM'

  }]


  const { featuredEventData, featuredEventError, featuredEventLoading } = useFeaturedEvents();
  return (
    <>
      <div className='bgImageWrapper pt-4'>
        <div className={`${styles.news_carousel_container} container`} style={{ zIndex: '2', position: "relative", paddingTop: '100px' }}>
          <div className="row">
            <div className="col-12">
              <h2 className="mb-4 text-center ms-0">Upcoming Events</h2>
            </div>
            {
              featuredEventError ? <ErrorComponent /> :
                <div className="col-12">
                  {/* <h2 className="mb-4 ">Featured Events</h2> */}
                  {
                    featuredEventLoading ? <FeaturedEventSkeleton /> :
                      <div className="row">
                        <div className="col-lg-1"></div>
                        <div className="col-lg-10">
                          <div className="my-4 teamSlider">
                            {
                              featuredEventData.length > 0 ? featuredEventData?.map((data: any, index: number) => {
                                return (
                                  <div className="container" key={index}>
                                    {
                                      Boolean(data?.full_banner_image) ?
                                        <div className={`${styles.mainRow}`}>
                                          <Image
                                            src={data?.full_image}
                                            width={100}
                                            height={100}
                                            alt="image"
                                            className={`${styles.bannerImage}`}
                                            loader={imageLoader}
                                          />
                                          <div className={styles.registerbtn}>
                                            <Link href={`/join-our-event/featured-event/${data?.slug}`} className={`btn btn-outline-success`}>Register</Link>
                                          </div>
                                        </div>
                                        :
                                        <div className={`row pointer  justify-content-center ${styles.mainRow}`}
                                          style={{
                                            backgroundImage: `url('${CONSTANTS.API_BASE_URL}${data.background_image}')`,
                                          }}>
                                          <div className={`col-lg-4 col-sm-6 p-4 ${styles.imageContainer}`}>
                                            <Image className={styles.mainImage} src={`${data?.image}`} height={350} width={200} alt="Image" loader={imageLoader} />
                                          </div>
                                          <div className="col-lg-8 col-sm-6 p-4 d-flex flex-column justify-content-center">
                                            <div className="">
                                              <h1 className={styles.second}>
                                                {data?.title}
                                              </h1>
                                              <p className={styles.third}>
                                                <span dangerouslySetInnerHTML={{ __html: data?.short_description ? data?.short_description : '' }}></span>
                                              </p>
                                            </div>
                                            <div>
                                              <h6 className={styles.four}>
                                                {data?.sub_title}
                                              </h6>
                                              {/* <h4 className="text-center mt-4">
                                                {dateFormat(data?.from_date)} to  {dateFormat(data?.to_date)}
                                              </h4>
                                              <h4 className="text-center mt-4">
                                                9:00 AM to 6:00 PM
                                              </h4> */}
                                            </div>
                                            {/* venue cards */}
                                            {
                                              data?.type === 'In-Person' ? <>
                                                <div className="text-center"><h4>Venue</h4></div>
                                                <div className="d-flex gap-2 flex-wrap justify-content-center text-center">
                                                  {data?.venue?.length > 0 && data?.venue?.map((data: any, index: number) =>
                                                    <div className="card mb-3" style={{ "width": '11rem' }} key={index}>
                                                      <div className="card-body">
                                                        <h6 className="card-subtitle mb-2">{data?.name}</h6>
                                                        <h6 className="card-subtitle mb-2">{data?.state}</h6>
                                                        <h6 className="card-subtitle mb-2 text-body-secondary" style={{ "fontSize": '12px' }}>{dateFormat(data?.from_date)} {data?.to_date ? `to  ${dateFormat(data?.to_date)}` : ''}</h6>
                                                        <h6 className="card-subtitle text-body-secondary" style={{ "fontSize": '12px' }}>{data?.from_time} to {data?.to_time}</h6>
                                                      </div>
                                                    </div>
                                                  )}

                                                </div>
                                              </> : ''
                                            }

                                            <div>
                                              <h4 className="text-center">{data?.type}</h4>
                                            </div>
                                            <div className="text-center mt-3 my-0 mx-auto">
                                              <Link href={`/join-our-event/featured-event/${data?.slug}`} className="btn btn-outline-success">Register</Link>
                                            </div>
                                          </div>
                                        </div>
                                    }
                                  </div>

                                )
                              }) : <NoDataFound />

                            }

                          </div>

                        </div>
                        <div className="col-lg-1"></div>
                      </div>
                  }
                </div>
            }


            {
              error ? <ErrorComponent /> : <div className="pt-4">
                <Slider {...settings} className="row-slick">
                  {
                    isLoading ?
                      Array.from({ length: 4 }).map((item, index) => {
                        return (
                          <JoinOurEventCardsSkeleton key={index} />
                        )
                      }) :
                      data?.length > 0 ?
                        data?.map((item, index) => (
                          <JoinOurEventCards data={item} loading={isLoading} id={index} key={index} />
                        )) :
                        <NoDataFound />
                  }
                </Slider>
              </div>
            }
          </div>
        </div >
        <figure>
          <Image width={1200} height={1200} src={topRoundedBorders} alt="bg" />
        </figure>
      </div >

    </>

  );
};

export default UpcomingEvents;

