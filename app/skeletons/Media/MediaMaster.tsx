import React from 'react'
import VideoSection from './VideoSectionSkeleton'
import SectionDivider from '@/app/components/SectionDivider'
import AudioSection from './AudioSection'
import PublicationsGallery from './PublicationsGallery'
import ReportMasterSkeleton from './ReportMasterSkeleton'

const MediaMaster = () => {
  return (
    <>
      <ReportMasterSkeleton title={'Reports'} />
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