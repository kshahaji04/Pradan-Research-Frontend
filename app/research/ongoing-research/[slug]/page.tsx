// import AboutResearch from '@/app/components/research/AboutResearch'
import OnGoingResearchMaster from '@/app/components/research/ongoing-research/OnGoingResearchMaster'
import AboutResearchSkeleton from '@/app/skeletons/Research/AboutResearchSkeleton'
import React from 'react'
import { Metadata } from "next";
import UseMetaData from "@/app/hooks/general_hooks/meta_data_hook";
export async function generateMetadata(): Promise<Metadata> {
 return UseMetaData('research-details')
}

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