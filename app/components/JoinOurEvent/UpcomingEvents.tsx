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
import useRegularEvenetHook from "@/app/hooks/joinOurEvenets/join_evevnt_upcomingevents_regular_hooks";
import ErrorComponent from "../ErrorComponent";
import NoDataFound from "../NoDataFound";
import useFeaturedEvents from "@/app/hooks/event_hook/featured_events_hooks";
import JoinOurEventCardsSkeleton from "@/app/skeletons/cards/joinOurEvent/JoinOurEventCardsSkeleton";



const UpcomingEvents = () => {
  const { data, isLoading, error } = useRegularEvenetHook()

  useEffect(() => {
    AOS.init();
  }, []);
  const settings = {
    dots: false,
    infinite: data?.length > 1,
    slidesToShow: 4,
    slidesToScroll: data?.length > 1 ? 1 : 0,
    pauseOnHover: true,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: data?.length > 1 ? 1 : 0,
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

  const settings2 = {
    dots: false,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
    autoplay: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const dataForFeaturedEvent = [
    {
      images: 'https://images.unsplash.com/photo-1591851395349-6d8c2fe76e24?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      detail1: 'Join Our Event 2024',
      detail2: ' Indian Rural Colloquy',
      detail3: '  Ignite With Rural Renaissance',
      detail4: ' August Kranti Week ',
      detail5: ' 1-8 August 2024'

    },
    {
      images: 'https://images.unsplash.com/photo-1591851395349-6d8c2fe76e24?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      detail1: 'Join Our Event 2024',
      detail2: ' Indian Rural Colloquy',
      detail3: '  Ignite With Rural Renaissance',
      detail4: ' August Kranti Week ',
      detail5: ' 1-8 August 2024'

    }
  ]

  const {featuredEventData, featuredEventError, featuredEventLoading} = useFeaturedEvents();

  console.log('featured events',featuredEventData);


  return (
    <>
       {
        error ?  <ErrorComponent /> :
        <div className='bgImageWrapper pt-4'>
        <div className={`${styles.news_carousel_container} container`} style={{ zIndex: '2', position: "relative", paddingTop: '100px' }}>
          <div className="row">
            <div className="col-12">
              <h2 className="mb-4 text-center ms-0">Upcoming Events</h2>
            </div>
            <div className="col-12">
              {/* <h2 className="mb-4 ">Featured Events</h2> */}
              <div className="row">
                <div className="col-lg-1"></div>
                <div className="col-lg-10">
                  <div className="my-4 teamSlider">
                    <Slider {...settings2}>
                      {
                        dataForFeaturedEvent.map((item, index) => {
                          return (
                            <div className="container" key={index}>
                              <div className={`row pointer bg-success justify-content-center ${styles.mainRow}`}>
                                <div className={`col-xl-4 col-sm-6 ${styles.imageContainer}`}>
                                  <Image className={styles.mainImage} src={`${item?.images}`} height={410} width={200} alt="Image" />
                                </div>
                                <div className="col-xl-8 col-sm-6 p-4 d-flex flex-column justify-content-center">
                                  <div className="">
                                    <h6 className={styles.first}>
                                      {item?.detail1}
                                    </h6>
                                    <h1 className={styles.second}>
                                      {item.detail2}
                                    </h1>
                                    <p className={styles.third}>
                                      {item.detail3}
                                    </p>
                                  </div>
                                  <div>
                                    <h6 className={styles.four}>
                                      {item.detail4}
                                    </h6>
                                    <h2 className={styles.five}>
                                      {item.detail5}
                                    </h2>
                                  </div>
                                  <div>
                                    <h4 className="text-center">Type: Online</h4>
                                  </div>
                                  <div className="text-center mt-3">
                                    <Link href='/components/JoinOurEvent/event-details' className="btn btn-outline-success">Register</Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )
                        })
  
                      }
                    </Slider>
                  </div>
  
                </div>
                <div className="col-lg-1"></div>
              </div>
            </div>
  
            <Slider {...settings} className="row-slick">
              {
              isLoading ? 
              Array.from({length:4}).map((item,index)=>{
                return(
                  <JoinOurEventCardsSkeleton key={index} />
                )
              }) :
              data?.length > 0 ?
              data?.map((item,index) => (
                <JoinOurEventCards data={item} loading={isLoading} id={index} key={index} />
              )):
                <NoDataFound/>
              } 
            </Slider>
          </div>
        </div>
        <figure>
          <Image width={1200} height={1200} src={topRoundedBorders} alt="bg" />
        </figure>
      </div> 
       }
    </>

  );
};

export default UpcomingEvents;

