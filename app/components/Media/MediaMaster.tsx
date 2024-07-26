import React from 'react'
import VideoSection from './VideoSection'
import SectionDivider from '@/app/components/SectionDivider'
import AudioSection from './AudioSection'
import ReportMaster from './ReportMaster'
import PublicationsGallery from './PublicationsGallery'
import Image from 'next/image'
import bannerBg from '@/public/assets/images/bg/bannerBg.jpg';
import whiteBanner from '@/public/assets/images/bg/whiteBanner.jpg';
import whiteBannerDots from '@/public/assets/images/bg/whiteBannerDots.jpg';

const MediaMaster = () => {
  return (
    <>
      <div className="bgImageWrapper">
        <div className='container-fluid' style={{ zIndex: '2', position: "relative", padding: "0px 12px 160px" }}>
          <ReportMaster title={'Reports'} />
        </div>
        <figure>
          <Image width={1200} height={1200} src={bannerBg} alt="bg" />
        </figure>
      </div>
      {/* <SectionDivider /> */}
      <div className="bgImageWrapper">
        <div className='container-fluid' style={{ zIndex: '2', position: "relative", padding: "0px 12px 160px" }}>
          <VideoSection title={'Video'} />
        </div>
        <figure>
          <Image width={1200} height={1200} src={whiteBanner} alt="bg" />
        </figure>
      </div>
      <div className='container-fluid' style={{ backgroundColor: '#f5f5f5', padding: '80px 12px' }}>
        <AudioSection title={'Audio'} />
      </div>
      <div className="bgImageWrapper">
        <div className='container-fluid' style={{ zIndex: '2', position: "relative", padding: "120px 12px 80px" }}>
          <PublicationsGallery title={'Gallery'} />
        </div>
        <figure>
          <Image width={1200} height={1200} src={whiteBannerDots} alt="bg" />
        </figure>
      </div>
    </>
  )
}

export default MediaMaster