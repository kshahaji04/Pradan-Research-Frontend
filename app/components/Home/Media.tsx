"use client";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import Image from "next/image";
import Slider from "react-slick";
import moment from "moment";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import usePublicationList from "@/app/hooks/home_page_hooks/publication_list_hook";
import Skeleton from "react-loading-skeleton";
import ErrorComponent from "../ErrorComponent";
import { imageLoader } from "@/app/utils/image_loader_utils";
import NoDataFound from "../NoDataFound";
import { iconHandler } from "@/app/utils/icon_handler";
import MediaCardSkeleton from "@/app/skeletons/Home/MediaCardSkeleton";
import MediaCard from "@/app/cards/home/MediaCard";
function Media() {
  const { socialMediaData, loadingSocialMediaList, error } =
    usePublicationList();

  const settings = {
    dots: false,
    infinite: socialMediaData?.length > 1,
    slidesToShow: 4,
    slidesToScroll: socialMediaData?.length > 3 ? 1 : 0,
    pauseOnHover: true,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: socialMediaData?.length > 1,
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
    <>
      {error ? (
        <div className="mb-5 pb-5 position-relative" style={{ zIndex: 9 }}>
          <ErrorComponent />
        </div>
      ) : (
        <div className="container">
          <div className="d-flex align-items-center justify-content-center w-100">
            {loadingSocialMediaList ? (
              <h2 style={{ color: "var(--primary)" }}>
                <Skeleton width={200} />
              </h2>
            ) : (
              <h2 style={{ color: "var(--primary)" }}>Social Media</h2>
            )}
          </div>
          <>
            {loadingSocialMediaList ? (
              <div className="row my-5">
                <Slider {...settings}>
                  <div>
                    <MediaCardSkeleton />
                  </div>
                  <div>
                    <MediaCardSkeleton />
                  </div>
                  <div>
                    <MediaCardSkeleton />
                  </div>
                  <div>
                    <MediaCardSkeleton />
                  </div>
                </Slider>
              </div>
            ) : socialMediaData?.length > 0 ? (
              <div className="row my-5">
                <Slider {...settings} className="row-slick">
                  {socialMediaData?.map((item: any, index: any) => (
                    <div key={index}>
                      <MediaCard item={item} />
                    </div>
                  ))}
                </Slider>
              </div>
            ) : (
              <div className="mb-5 pt-3">
                <NoDataFound />
              </div>
            )}
          </>
        </div>
      )}
    </>
  );
}

export default Media;
