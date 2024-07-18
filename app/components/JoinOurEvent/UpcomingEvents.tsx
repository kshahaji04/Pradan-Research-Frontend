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

  return (
    <div className='bgImageWrapper pt-4'>
      <div className={`${styles.news_carousel_container} container`} style={{ zIndex: '2', position: "relative", paddingTop:'140px' }}>
        <div className="row">
          {/* <div className="col-12">
                        <h2 className="mb-4 text-center ms-0">Upcoming Events</h2>
                    </div> */}
          <div className="col-12">
          </div>
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

