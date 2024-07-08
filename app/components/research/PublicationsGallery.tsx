import Image from "next/image";
import Link from "next/link";
import React from "react";
import Slider from "react-slick";

function PublicationsGallery() {
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
          <h2 className="mb-2 text-center ms-0">Gallery</h2>
        </div>
      </div>
      <div className="row my-5">
        <Slider {...settings}>
          {data &&
            data.length > 0 &&
            data.map((info:any, index:number) => (
              <Link href={`#`} key={index} style={{ width: "95%", height:'100%', maxHeight:'300px' }} className={`mx-auto my-0`}>
                <Image
                  src={info}
                  alt={"gallery-image"}
                  width={1200}
                  height={1200}
                  style={{ width: "100%" }}
                />
              </Link>
            ))}
        </Slider>
      </div>
    </div>
  );
}

export default PublicationsGallery;
