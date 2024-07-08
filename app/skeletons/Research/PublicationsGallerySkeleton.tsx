'use client'

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Skeleton from "react-loading-skeleton"

function PublicationsGallerySkeleton() {
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

  const data:any = [];

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h2 className="mb-2 text-center ms-0"><Skeleton width={200}></h2>
        </div>
      </div>
      <div className="row my-5">
        <Slider {...settings}>
          {data &&
            data.length > 0 &&
            data.map((info:any, index:number) => (
              <div key={index} style={{ width: "95%", height:'100%', maxHeight:'300px' }} className={`mx-auto my-0`}>
                <Skeleton width={'100%'} height={300} />
              </div>
            ))}
        </Slider>
      </div>
    </div>
  );
}

export default PublicationsGallerySkeleton;
