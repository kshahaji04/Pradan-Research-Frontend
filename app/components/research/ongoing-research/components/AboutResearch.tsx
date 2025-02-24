"use client";

import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useResearchDetails from "@/app/hooks/research_hooks/research-details-hooks";
import NoDataFound from "@/app/components/NoDataFound";
import ErrorComponent from "@/app/components/ErrorComponent";
import AboutResearchCard from "@/app/cards/research/research_details/AboutResearchCard";
import ResearchDetailsCard from "@/app/cards/research/research_details/ResearchDetailsCard";
import Slider from "react-slick";
import AboutResearchCardSkeleton from "@/app/skeletons/Research/AboutResearchCardSkeleton";
import ResearchDetailsCardSkeleton from "@/app/skeletons/Research/ResearchDetailsCardSkeleton";
import Skeleton from "react-loading-skeleton";

function AboutResearch() {
  const { researchDetails, loadingResearchDetails, researchError } =
    useResearchDetails();

  const settings = {
    dots: false,
    infinite: researchDetails?.teams_detail?.length > 3,
    slidesToShow: 3,
    slidesToScroll: researchDetails?.teams_detail?.length > 3 ? 1 : 0,
    pauseOnHover: true,
    autoplay: true,
    vertical: true,
    verticalSwiping: true,
    arrows: false,
  };

  return (
    <div className="row">
      {researchError ? (
        <div className="mb-5 pb-5 position-relative" style={{ zIndex: 9 }}>
          <ErrorComponent />
        </div>
      ) : (
        <>
          {loadingResearchDetails ? (
            <>
              <div className="col-lg-8">
                <div className="container pt-3 pb-5 px-md-5">
                  <AboutResearchCardSkeleton />
                </div>
              </div>
              <div
                className="col-lg-4 d-flex align-items-center"
                style={{ background: "#f7f7f7" }}
              >
                <div className="container pt-3 pb-5 ps-md-5">
                  <h3 className="pb-2" style={{ color: "var(--primary)" }}>
                    <Skeleton width={200} />
                  </h3>
                  {/* <h4 className='pb-2'>Research</h4> */}
                  <Slider {...settings}>
                    <ResearchDetailsCardSkeleton />
                    <ResearchDetailsCardSkeleton />
                    <ResearchDetailsCardSkeleton />
                  </Slider>
                </div>
              </div>
            </>
          ) : (
            <>
              {researchDetails?.research_detail?.length > 0 &&
              researchDetails?.teams_detail?.length > 0 ? (
                <>
                  <div className="col-lg-8">
                    <div className="container pt-3 pb-5 px-md-5">
                      {researchDetails?.research_detail?.map(
                        (item: any, index: any) => (
                          <AboutResearchCard item={item} key={index} />
                        )
                      )}
                    </div>
                  </div>
                  <div
                    className="col-lg-4 d-flex align-items-center"
                    style={{ background: "#f7f7f7" }}
                  >
                    <div className="container pt-3 pb-5 ps-md-5">
                      <h3 className="pb-2" style={{ color: "var(--primary)" }}>
                        Our Team
                      </h3>
                      {/* <h4 className='pb-2'>Research</h4> */}
                      <Slider {...settings}>
                        {researchDetails?.teams_detail?.map(
                          (data: any, index: any) => (
                            <ResearchDetailsCard data={data} key={index} />
                          )
                        )}
                      </Slider>
                    </div>
                  </div>
                </>
              ) : (
                <div className="mb-5 pt-3">
                  <NoDataFound />
                </div>
              )}
            </>
          )}
        </>
      )}
    </div>
  );
}

export default AboutResearch;
