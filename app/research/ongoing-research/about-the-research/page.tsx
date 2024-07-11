import AboutResearch from '@/app/components/research/AboutResearch'
import OnGoingResearchMaster from '@/app/components/research/ongoing-research/OnGoingResearchMaster'
import AboutResearchSkeleton from '@/app/skeletons/Research/AboutResearchSkeleton'
import React from 'react'

function page() {
  return (
    <>
    {/* <AboutResearch title={"About Ongoing Research"} /> */}
      {/* <AboutResearchSkeleton /> */}
      <OnGoingResearchMaster/>
      </>
  )
}

export default page