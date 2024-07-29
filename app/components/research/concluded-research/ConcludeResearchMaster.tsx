import React from 'react'
import AboutResearch from './components/AboutResearch'
import Reports from './components/Reports'
import Queries from './components/Queries'
import topBorders from "@/public/assets/images/bg/topBorders.jpeg"
import topRoundedBorders from "@/public/assets/images/bg/topRoundedBorders.jpg"
import whiteBannerDots from "@/public/assets/images/bg/whiteBannerDots.jpg"
import Image from 'next/image'
import PublicationsGallery from './components/PublicationsGallery'
import Publication from "@/app/components/research/concluded-research/components/Publication";

const ConcludeResearchMaster = () => {
  return (
    <>
      {/* <AboutResearch/>
    <Reports/>
    <PublicationsGallery/>
    <Queries/> */}
      <div style={{ backgroundColor: '#f7f7f7', padding: '40px 0 0px' }}>
        <AboutResearch />
      </div>
      <div className="bgImageWrapper">
        <div style={{ zIndex: '2', position: "relative", padding: "80px 0px 60px" }}>
          <Reports />
        </div>
        <figure>
          <Image width={1200} height={1200} src={whiteBannerDots} alt="bg" />
        </figure>
      </div>
      <div className="bgImageWrapper">
        <div
          style={{ zIndex: "2", position: "relative", padding: "40px 0px 0px" }}
        >
          <Publication />
        </div>
        <figure>
          <Image width={1200} height={1200} src={topRoundedBorders} alt="bg" />
        </figure>
      </div>
      <div className="bgImageWrapper">
        <div style={{ zIndex: '2', position: "relative", padding: "80px 0px 60px" }}>
          <PublicationsGallery title={'Gallery'} />
        </div>
        <figure>
          <Image width={1200} height={1200} src={topBorders} alt="bg" />
        </figure>
      </div>
      <div className="bgImageWrapper">
        <div style={{ zIndex: '2', position: "relative", padding: "40px 0px 0px" }}>
          <Queries />
        </div>
        <figure>
          <Image width={1200} height={1200} src={topRoundedBorders} alt="bg" />
        </figure>
      </div>
    </>
  )
}

export default ConcludeResearchMaster