import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "aos/dist/aos.css";

import Skeleton from "react-loading-skeleton";


const ReportMasterSkeleton = ({ title }: any) => {
  return (

    <> 
    <div className="col-12 my-4 d-flex justify-content-center">
    <Skeleton width={80} height={40}/>
    </div>
    </>
  );
};

export default ReportMasterSkeleton;

