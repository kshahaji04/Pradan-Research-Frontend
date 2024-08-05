import React from 'react'
import Research from '../components/research/Research'
import { Metadata } from "next";
import UseMetaData from "@/app/hooks/general_hooks/meta_data_hook";
export async function generateMetadata(): Promise<Metadata> {
 return UseMetaData('research')
}

function page() {
  return (
    <>
      <Research />
    </>
  )
}

export default page