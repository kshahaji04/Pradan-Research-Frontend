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
import ReportCards from "@/app/cards/joinOurEvent/ReportCards";
import { InterActiveInfographicData } from "@/app/utils/data2";
import Skeleton from "react-loading-skeleton";


const ReportMasterSkeleton = ({ title }: any) => {
  return (

    <> 
    <div className="col-12 my-4 d-flex justify-content-center align-center">
    <Skeleton width={80} height={40}/>
    </div>
    </>

  );
};

export default ReportMasterSkeleton;

