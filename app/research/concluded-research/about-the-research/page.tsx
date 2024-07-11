import AboutResearch from '@/app/components/research/AboutResearch'
import ConcludeResearchMaster from '@/app/components/research/concluded-research/ConcludeResearchMaster'
import AboutResearchSkeleton from '@/app/skeletons/Research/AboutResearchSkeleton'
import React from 'react'

function page() {
  return (
    <>
    <ConcludeResearchMaster/>
      {/* <AboutResearch title={"About Concluded Research"} /> */}
      {/* <AboutResearchSkeleton /> */}
    </>
  )
}

export default page