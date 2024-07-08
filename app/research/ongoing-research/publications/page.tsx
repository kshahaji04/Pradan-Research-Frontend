import Featured from '@/app/components/Home/Featured'
import PublicationsGallery from '@/app/components/research/PublicationsGallery'
import FeaturedSkeleton from '@/app/skeletons/Home/FeaturedSkeleton'
import PublicationsGallerySkeleton from '@/app/skeletons/Research/PublicationsGallerySkeleton'
import React from 'react'

function page() {
  return (
    <div className='pt-5 pb-3'>
      {/* <FeaturedSkeleton /> */}
      <Featured title={'Ongoing Publications'} />
      <PublicationsGallery />
      {/* <PublicationsGallerySkeleton /> */}
    </div>
  )
}

export default page