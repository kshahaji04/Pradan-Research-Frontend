import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from '@/app/styles/joinOurEvent/join_our_event.module.css'
import Image from "next/image";
import JoinOurEventCards from "@/app/cards/joinOurEvent/JoinOurEventCards";
import { data } from "@/app/utils/data2";
import whiteBanner from '@/public/assets/images/bg/whiteBanner.jpg';
import topRoundedBorders from '@/public/assets/images/bg/topRoundedBorders.jpg'



const UpcomingEvents = () => {
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    AOS.init();
  }, []);
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    pauseOnHover: true,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 995,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const settings2 = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
    autoplay: true
  };

  const dataForFeaturedEvent = [
    {
      images:'https://images.unsplash.com/photo-1591851395349-6d8c2fe76e24?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      detail1:'Join Our Event 2024',
      detail2:' Indian Rural Colloquy',
      detail3:'  Ignite With Rural Renaissance',
      detail4:' August Kranti Week ',
      detail5:' 1-8 August 2024'

    },
    {
      images:'https://images.unsplash.com/photo-1591851395349-6d8c2fe76e24?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      detail1:'Join Our Event 2024',
      detail2:' Indian Rural Colloquy',
      detail3:'  Ignite With Rural Renaissance',
      detail4:' August Kranti Week ',
      detail5:' 1-8 August 2024'

    }
  ]

  return (
    <div className='bgImageWrapper pt-4'>
      <div className={`${styles.news_carousel_container} container`} style={{ zIndex: '2', position: "relative", paddingTop: '140px' }}>
        <div className="row">
          <div className="col-12">
            <h2 className="mb-4 text-center ms-0">Upcoming Events</h2>
          </div>
          <div className="col-12">
          <h2 className="mb-4 ">Featured Events</h2>
            <div className="row">
              <div className="col-lg-1"></div>
              <div className="col-lg-10">
                <div className="my-4">
                <Slider {...settings2}>
                  {
                    dataForFeaturedEvent.map((item,index)=>{
                      return(
                        <div className="container" key={index}>
                        <div className="row bg-success justify-content-center ">
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
          <h2 className="my-4">Regular Events</h2>
          <Slider {...settings}>
            {data.map((item) => (
              <JoinOurEventCards data={item} id={item.id} key={item.id} />
            ))}
          </Slider>
        </div>
      </div>
      <figure>
        <Image width={1200} height={1200} src={topRoundedBorders} alt="bg" />
      </figure>
    </div>
  );
};

export default UpcomingEvents;

