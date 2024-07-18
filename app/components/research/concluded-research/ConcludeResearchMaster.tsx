import React from 'react'
import AboutResearch from './components/AboutResearch'
import Reports from './components/Reports'
import PublicationsGallery from './components/PublicationsGallery'
import Queries from './components/Queries'
import topBorders from "@/public/assets/images/bg/topBorders.jpeg"
import topRoundedBorders from "@/public/assets/images/bg/topRoundedBorders.jpg"
import whiteBannerDots from "@/public/assets/images/bg/whiteBannerDots.jpg"
import Image from 'next/image'

const ConcludeResearchMaster = () => {
  return (
    <>
      {/* <AboutResearch/>
    <Reports/>
    <PublicationsGallery/>
    <Queries/> */}
      <div style={{ backgroundColor: '#f7f7f7', padding: '0px 0 0px' }}>
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
        <div style={{ zIndex: '2', position: "relative", padding: "80px 0px 60px" }}>
          <PublicationsGallery />
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