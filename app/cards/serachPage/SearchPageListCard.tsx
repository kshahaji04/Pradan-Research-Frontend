import React from 'react'
import Image from 'next/image'
import styles from '@/app/styles/searchPage/searchPage.module.css'
import Link from 'next/link'
import SearchPageListCardSkeleton from '@/app/skeletons/cards/serachPage/SearchPageListCardSkeleton'
import img from '@/public/assets/images/no_image.jpg'
const SearchPageListCard = ({ data,loading }: any) => {
  return (
    <div className="row ms-4 mt-4">
      {
      loading ? <SearchPageListCardSkeleton/> :
      data.map((item: any, index: any) => (
        <div className="col-11 m-4">
          <div className={`card p-4  m-2 cursor d-flex  flex-row ${styles.listCard}`} key={index}>
            <Image width={400} height={300} src={item?.img ? item?.img : img.src} className={`${styles.listImg}`} alt='image' />
            <div className="card-body p-4 d-flex  flex-column justify-content-between">
              <div>
              <h5 className="card-title">{item?.title}</h5>
              <div className="card-text">{item?.sub_title}</div>
              </div>
              <div className='row align-items-center'>
              <div className="text-success col-md-6">{item?.sub_title} <span className='mx-2 text-secondary'>{item?.year}</span> </div>
              <div className="col-md-6 text-end">
                {
                  <Link href={''} className="btn btn-outline-success">
                    Read More
                  </Link>
                }
              </div>
              </div>
            </div>
          </div>
        </div>
      ))
      }
    </div>
  )
}

export default SearchPageListCard