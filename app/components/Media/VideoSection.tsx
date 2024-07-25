
import { data } from "@/app/utils/data2";
import AOS from "aos";
import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import VideoSectionsCards from "@/app/cards/joinOurEvent/VideoSectionsCards";
import useAudioVideoList from "@/app/hooks/media_page_hooks/audio_video_list_hook";
import ErrorComponent from '@/app/components/ErrorComponent'
import VideoSectionsCardsSkeleton from '@/app/skeletons/cards/joinOurEvent/VideoSectionsCardsSkeleton';
import SkeletonCard from "@/app/skeletons/general/SkeletonCard";
import NoDataFound from '@/app/components/NoDataFound'

const VideoSection = ({ title }: any) => {
    const [loading, setLoading] = useState(false)

    const { videoList, loadingAudioVideoList, audioVideoError } = useAudioVideoList();
   
    useEffect(() => {
        AOS.init();
    }, []);

    const settings = {
        dots: false,
        infinite: videoList?.length > 1,
        slidesToShow: 4,
        slidesToScroll: videoList?.length > 3 ? 1 : 0,
        pauseOnHover: true,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: videoList?.length > 2 ? 1 : 0,
                    infinite: videoList?.length > 1,
                    dots: true,
                },
            },
            {
                breakpoint: 995,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: videoList?.length > 1 ? 1 : 0,
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
            {audioVideoError ? <ErrorComponent /> : <div className={`container-fluid`} style={{ overflow: 'hidden' }}>
                <div className="row">
                    <div className="col-12 mb-5">
                        <div className="row">
                            <div className="col-12">
                                <h2 className="mb-2 text-center ms-0">{title}&apos;s</h2>
                            </div>
                        </div>
                    </div>
                    {loadingAudioVideoList ? <SkeletonCard Component={VideoSectionsCardsSkeleton} limit={videoList?.length || 3} /> : <>
                        {videoList?.length > 0 ? <Slider {...settings}>{Array.isArray(videoList) && videoList?.length > 0 && videoList?.map((info: any, index: any) => (
                            <VideoSectionsCards audioVideoData={info} loadingAudioVideoList={loadingAudioVideoList} id={info?.id} key={index} />))}
                        </Slider> : <NoDataFound />}

                    </>
                    }
                </div>
            </div>}

        </>
    )
}

export default VideoSection