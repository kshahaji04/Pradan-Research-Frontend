import React from 'react';
import JoinOurEventMaster from '../components/JoinOurEvent/JoinOurEventMaster';
import Image from 'next/image';
import topRoundedBorders from '@/public/assets/images/bg/topRoundedBorders.jpg'
import { Metadata } from "next";
import UseMetaData from "@/app/hooks/general_hooks/meta_data_hook";
export async function generateMetadata(): Promise<Metadata> {
 return UseMetaData('join-our-event')
}

function page() {
  return (
    <>
      {/* <div className="bgImageWrapper"> */}
        {/* <div style={{ zIndex: '2', position: "relative", padding: "0px 0px 160px" }}> */}
          <JoinOurEventMaster />
        {/* </div> */}
              {/* <figure>
                <Image width={1200} height={1200} src={topRoundedBorders} alt="bg" />
              </figure> */}
      {/* </div> */}
    </>
  )
}

export default page