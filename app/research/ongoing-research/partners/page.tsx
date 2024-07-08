import Partners from '@/app/components/research/ongoing-research/Partners'
import PartnersSkeleton from '@/app/skeletons/Research/PartnersSkeleton'
import React from 'react'

function page() {
  return (
    <>
    <Partners />
    <PartnersSkeleton />
    </>
  )
}

export default page