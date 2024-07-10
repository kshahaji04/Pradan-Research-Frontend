import React from 'react'
import VideoSection from './VideoSection'
import SectionDivider from '@/app/components/SectionDivider'
import AudioSection from './AudioSection'
import PublicationMaster from './PublicationMaster'
import PublicationsGallery from './PublicationsGallery'

const MediaMaster = () => {
  return (
   <>
   <VideoSection  title={'Video'}/>
   <SectionDivider/>
   <AudioSection  title={'Audio'}/>
   <SectionDivider/>
   <PublicationMaster title={'Publication'}/>
   <SectionDivider/>
   <PublicationsGallery title={'Gallery'}/>
   </>
  )
}

export default MediaMaster