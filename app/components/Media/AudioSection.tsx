
import { data } from "@/app/utils/data2";
import AOS from "aos";
import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AudioSectionsCards from "@/app/cards/joinOurEvent/AudioSectionsCards";
import useAudioVideoList from "@/app/hooks/media_page_hooks/audio_video_list_hook";
import ErrorComponent from '@/app/components/ErrorComponent'
import SkeletonCard from "@/app/skeletons/general/SkeletonCard";
import AudioSectionsCardsSkeleton from '@/app/skeletons/MediaPage/MediaSectionCardsSkeleton/AudioSectionsCardsSkeleton';
import NoDataFound from '@/app/components/NoDataFound'

const AudioSection = ({ title }: any) => {
    const { audioList, loadingAudioVideoList, audioVideoError } = useAudioVideoList();

    useEffect(() => {
        AOS.init();
    }, []);

    const settings = {
        dots: false,
        infinite: audioList?.length > 1,
        slidesToShow: 4,
        slidesToScroll: audioList?.length > 3 ? 1 : 0,
        pauseOnHover: true,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: audioList?.length > 2 ? 1 : 0,
                    infinite: audioList?.length > 1,
                    dots: true,
                },
            },
            {
                breakpoint: 995,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: audioList?.length > 1 ? 1 : 0,
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
                    {loadingAudioVideoList ? <SkeletonCard Component={AudioSectionsCardsSkeleton} limit={audioList?.length || 3} /> : <>
                        {audioList?.length > 0 ? (
                            <Slider {...settings}>{Array.isArray(audioList) && audioList?.length > 0 && audioList?.map((info: any, index: any) => (
                                <AudioSectionsCards audioData={info} loadingAudioVideoList={loadingAudioVideoList} id={info?.id} key={index} />))}
                            </Slider>
                        ) :
                            <NoDataFound />}
                    </>}
                </div>
            </div>}

        </>
    )
}

export default AudioSection