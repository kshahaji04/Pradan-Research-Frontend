import Featured from '@/app/components/Home/Featured'
import FeaturedSkeleton from '@/app/skeletons/Home/FeaturedSkeleton'
import React from 'react'

function page() {
  return (
    <div className='pt-5 pb-3'>
      {/* <FeaturedSkeleton /> */}
      <Featured title={'Concluded Publications'} />
    </div>
  )
}

export default page