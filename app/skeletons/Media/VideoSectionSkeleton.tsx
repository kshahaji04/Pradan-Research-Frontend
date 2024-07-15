
import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Skeleton from "react-loading-skeleton";


const VideoSectionSkeleton = ({ title }: any) => {
    return (
        <>
            <div className="col-12 mb-5 d-flex justify-content-center">
                <div className="row">
                    <div className="col-12">
                        <Skeleton width={80} height={40} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default VideoSectionSkeleton