"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { PublicationsGallerySkeleton, PublicationGallerySlick } from "@/app/skeletons/Media/PublicationsGallerySkeleton";
import ReportMasterSkeleton from "@/app/skeletons/Media/ReportMasterSkeleton";
import Skeleton from "react-loading-skeleton";
import gallery_hooks from "@/app/hooks/media_page_hooks/gallery_hooks";
import { imageLoader } from "@/app/utils/image_loader_utils";
import NoImage from '@/public/assets/images/no_image.jpg';
import ErrorComponent from '@/app/components/ErrorComponent'

function PublicationsGallery({ title }: any) {
  const { gallery, isLoading, galleryError } = gallery_hooks()
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

  // isLoading ? <PublicationsGallerySkeleton />

  return (
    <>
      {
        galleryError ? <ErrorComponent /> :
          <div className="container">
            {isLoading ? <PublicationsGallerySkeleton /> : <>
              <div className="row">
                <div className="col-12">
                  <h2 className="text-center ms-0">{title}</h2>
                </div>
              </div>
              <div className="row my-5">
                <div className="col-12">
                  <div className="text-end me-3">
                    <h5><Link href='/'>See More <ChevronRightIcon /></Link> </h5>
                  </div>
                </div>
                <Slider {...settings}>
                  {gallery &&
                    gallery?.length > 0 &&
                    gallery?.map((info: any) => (
                      <Link
                        href={`${info?.url}`}
                        key={info?.sequence}
                        // style={{ width: "95%", height: "100%", maxHeight: "300px" }}
                        className={`mx-auto my-0`}
                      >
                        {
                          info?.image !== null && info?.image !== '' ?
                            <Image
                              src={info?.image}
                              alt={"gallery-image"}
                              width={1200}
                              height={300}
                              style={{ width: "92%" }}
                              className={`mx-auto rounded-2 my-0`}
                              loader={imageLoader}
                            /> :
                            <Image
                              src={NoImage.src}
                              alt={"gallery-image"}
                              width={1200}
                              height={300}
                              style={{ width: "92%" }}
                              className={`mx-auto rounded-2 my-0`}
                            />
                        }

                      </Link>
                    ))}
                </Slider>
              </div>
            </>}

          </div>
      }
    </>
  );
}

export default PublicationsGallery;
