import React, { useEffect, useState } from "react";
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
import ReportCards from "@/app/cards/joinOurEvent/ReportCards";
import { InterActiveInfographicData } from "@/app/utils/data2";
import ReportMasterSkeleton from "@/app/skeletons/Media/ReportMasterSkeleton";
import usePastEventReportHook from "@/app/hooks/joinOurEvenets/join_event_pastevent_report_hooks";
import ErrorComponent from "../ErrorComponent";


const ReportMaster = ({ title }: any) => {
  const {reportData,isLoading,error} = usePastEventReportHook()
  console.log(reportData,"reports Data ")
  useEffect(() => {
    AOS.init();
  }, []);
  const settings = {
    dots: false,
    infinite: reportData?.length > 1,
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
  <>
{  
  error ? <ErrorComponent/> :
    <div className={`container-fluid ${styles.news_carousel_container}`} style={{ zIndex: '2', position: "relative" }}>
      <div className="row">
          {
          isLoading ? <ReportMasterSkeleton /> :
            <>       <div className="col-12 mt-4">
              <h2 className="mb-4 text-center ms-0">{title}</h2>
            </div>
            </>
 
           }
        <div className="col-12">

        </div>
        <Slider {...settings}>
          {reportData?.map((item,index) => (
            <ReportCards item={item} key={index} loading={isLoading}/>
          ))}
        </Slider>
      </div>
    </div>
}
    </>
  );
};

export default ReportMaster;

