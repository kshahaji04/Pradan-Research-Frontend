"use client";
import React, { useState } from "react";
import PaginationAll from "@/app/components/PaginationAll";
import Link from "next/link";
import Image from "next/image";
import styles from "@/app/styles/research/researchCard.module.css";
import ResearchCards from "@/app/cards/research/ResearchCards";
import Slider from "react-slick";
import NoDataFound from "@/app/components/NoDataFound";
import ErrorComponent from "@/app/components/ErrorComponent";
import useReportChapters from "@/app/hooks/research_hooks/research-report-chapter-hooks";

function Reports() {
  const { reportChaptersData, loadingReportChapters, reportChaptersError } =
    useReportChapters("Concluded Research");

    console.log(reportChaptersData)

  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 0,
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
    <div className="container pb-4">
      {reportChaptersError ? (
        <div className="mb-5 pb-5 position-relative" style={{ zIndex: 9 }}>
          <ErrorComponent />
        </div>
      ) : (
        <div className="row pt-3">
          <div className="col-12">
            <div className="row">
              <div className="col-12 pt-4">
                <h2
                  className="mb-2 text-center ms-0"
                  style={{ color: "var(--primary)" }}
                >
                  Reports Chapter Wise
                </h2>
              </div>
            </div>
          </div>

          {/*research card section with pagination*/}
          <div className="col-12">
            {reportChaptersData?.length > 0 ? (
              <div className="row">
                <Slider {...settings}>
                  {reportChaptersData.map((item: any, index: number) => (
                    <ResearchCards item={item} key={index} />
                  ))}
                </Slider>
              </div>
            ) : (
              !loadingReportChapters && <div className="mb-5 pt-3">
                <NoDataFound />
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Reports;
