"use client";

import React from "react";
import PartnerCards from "@/app/cards/research/PartnerCards";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import usePartners from "@/app/hooks/research_hooks/research-partner-hooks";
import NoDataFound from "@/app/components/NoDataFound";
import ErrorComponent from "@/app/components/ErrorComponent";
import Skeleton from "react-loading-skeleton";
function Partners() {
  const { partnersData, loadingPartners, partnersError } = usePartners();

  //   console.log(partnersData, "partners");

  const settings = {
    dots: false,
    slidesToScroll: partnersData?.length > 4 ? 1 : 0,
    infinite: partnersData?.length > 4,
    slidesToShow: 4,
    pauseOnHover: true,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: partnersData?.length > 3 ? 1 : 0,
          infinite: partnersData?.length > 3,
          dots: true,
        },
      },
      {
        breakpoint: 995,
        settings: {
          slidesToShow: 2,
          slidesToScroll: partnersData?.length > 2 ? 1 : 0,
          infinite: partnersData?.length > 2,
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
    <div className="container py-5">
      {partnersError ? (
        <div className="mb-5 pb-5 position-relative" style={{ zIndex: 9 }}>
          <ErrorComponent />
        </div>
      ) : (
        <div className="row">
          <div className="col-12">
            <div className="text-center">
              <h3 style={{ color: "var(--primary)", marginBottom: "20px" }}>
                {loadingPartners ? <Skeleton width={200} /> : 'Partners'}
              </h3>
            </div>
          </div>
          {loadingPartners ? (
            <div className="col-12 py-5">
              <div className="row">
                <Slider {...settings}>
                  <div>
                    <div style={{ width: "fit-content", margin: "0 auto" }}>
                      <Skeleton width={100} height={50} />
                    </div>
                  </div>
                  <div>
                    <div style={{ width: "fit-content", margin: "0 auto" }}>
                      <Skeleton width={100} height={50} />
                    </div>
                  </div>
                  <div>
                    <div style={{ width: "fit-content", margin: "0 auto" }}>
                      <Skeleton width={100} height={50} />
                    </div>
                  </div>
                  <div>
                    <div style={{ width: "fit-content", margin: "0 auto" }}>
                      <Skeleton width={100} height={50} />
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          ) : (
            <div className="col-12 py-5">
              {partnersData?.partners_detail?.length > 0 ? (
                <div className="row">
                  <Slider {...settings}>
                    {partnersData?.partners_detail?.map(
                      (item: any, index: number) => (
                        <PartnerCards item={item} key={index} />
                      )
                    )}
                  </Slider>
                </div>
              ) : (
                <div className="mb-5 pt-3">
                  <NoDataFound />
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Partners;
