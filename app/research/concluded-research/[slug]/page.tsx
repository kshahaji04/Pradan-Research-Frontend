// import AboutResearch from '@/app/components/research/AboutResearch'
import ConcludeResearchMaster from '@/app/components/research/concluded-research/ConcludeResearchMaster'
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
    <ConcludeResearchMaster/>
      {/* <AboutResearch title={"About Concluded Research"} /> */}
      {/* <AboutResearchSkeleton /> */}
    </>
  )
}

export default page