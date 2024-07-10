
import { data } from "@/app/utils/data2";
import AOS from "aos";
import React, { useEffect } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import VideoSectionsCards from "@/app/cards/joinOurEvent/VideoSectionsCards";


const VideoSection = ({ title }: any) => {
    useEffect(() => {
        AOS.init();
    }, []);

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

    return (
        <>
            <div className={`container ${title?.toLowerCase() === 'video' ? 'pt-5' : ""}`} style={{ overflow: 'hidden' }}>
                <div className="row">
                    <div className="col-12 mb-5">
                        <div className="row">
                            <div className="col-12">
                                <h2 className="mb-2 text-center ms-0">{title}'s</h2>
                            </div>
                        </div>
                    </div>
                        <Slider {...settings}>{data?.slice(0, 5).map((doc) => (<VideoSectionsCards data={doc} id={doc.id} key={doc.id} />))}</Slider> 
                </div>
            </div>
        </>
    )
}

export default VideoSection