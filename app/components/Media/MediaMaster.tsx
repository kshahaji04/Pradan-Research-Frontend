import React from 'react'
import VideoSection from './VideoSection'
import SectionDivider from '@/app/components/SectionDivider'
import AudioSection from './AudioSection'
import ReportMaster from './ReportMaster'
import PublicationsGallery from './PublicationsGallery'

const MediaMaster = () => {
  return (
    <>
      <ReportMaster title={'Reports'} />
      <SectionDivider />
      <VideoSection title={'Video'} />
      <SectionDivider />
      <AudioSection title={'Audio'} />
      <SectionDivider />
      <PublicationsGallery title={'Gallery'} />
    </>
  )
}

export default MediaMaster