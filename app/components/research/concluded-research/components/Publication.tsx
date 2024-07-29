'use client'
import React, { useEffect } from 'react'
import AOS from "aos";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ResearchPublicationCards from '@/app/cards/research/ResearchPublicationCards';
import useResearchPublication from '@/app/hooks/research_hooks/publication-hooks';
import ErrorComponent from '@/app/components/ErrorComponent';
import NoDataFound from '@/app/components/NoDataFound'
import PublicationSectionsCardsSkeleton from '@/app/skeletons/MediaPage/MediaSectionCardsSkeleton/PublicationCardsSkeleton/PublicationSectionsCardsSkeleton';

const Publication = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    const type = 'Concluded Research'

    const { researchPublicationData, loadingResearchPublication, researchPublicationError } = useResearchPublication(type);
    console.log("researchPublicationData on Going", researchPublicationData)

    // console.log(printMedia, socialMedia)

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: researchPublicationData?.length > 2 ? 1 : 0,
        pauseOnHover: true,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: researchPublicationData?.length > 2 ? 1 : 0,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 995,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: researchPublicationData?.length > 2 ? 1 : 0,
                    initialSlide: 1,
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
            {researchPublicationError ? <ErrorComponent /> : (<div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <h2 className="mb-5 text-center ms-0">Publication&apos;s</h2>
                    </div>
                    {loadingResearchPublication ? (<div className="row my-5">
                        <Slider {...settings}>
                            <div>
                                <PublicationSectionsCardsSkeleton />
                            </div>
                            <div>
                                <PublicationSectionsCardsSkeleton />
                            </div>
                            <div>
                                <PublicationSectionsCardsSkeleton />
                            </div>
                            <div>
                                <PublicationSectionsCardsSkeleton />
                            </div>
                        </Slider>
                    </div>) : (<div className="col-12">
                        <div className={`container`} style={{ overflow: 'hidden' }}>
                            <div className="row">
                                {researchPublicationData?.length > 0 ? <Slider {...settings}>{researchPublicationData?.length > 0 && researchPublicationData?.map((info: any, index: any) => (<ResearchPublicationCards data={info} key={index} />))}</Slider> : <NoDataFound />}
                            </div>
                        </div>
                    </div>)}



                </div>
            </div>)}

        </>
    )
}

export default Publication