import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from "aos";
import "aos/dist/aos.css";
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Link from "next/link";
import styles from '@/app/styles/joinOurEvent/join_our_event.module.css'
import Image from "next/image";
import topRoundedBorders from '@/public/assets/images/bg/topRoundedBorders.jpg';
import JoinOurEventCards from "@/app/cards/joinOurEvent/JoinOurEventCards";
import { data } from  "@/app/utils/data2";


const UpcomingEvents = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    pauseOnHover: true,
    autoplay: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  

  return (
    <div className='bgImageWrapper'>
      <div className={`container-fluid px-5 ${styles.news_carousel_container}`} style={{ zIndex: '2', position: "relative" }}>
        <div className="row">
        <div className="col-12">
                        <h2 className="mb-4 text-center ms-0">Upcoming Events</h2>
                    </div>
          <div className="col-12">
         
          </div>
          <div className="container">
          <Slider {...settings}>
            {data.map((item) => (
              <JoinOurEventCards data={item} id={item.id} key={item.id} />
            ))}
          </Slider>
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default UpcomingEvents;

