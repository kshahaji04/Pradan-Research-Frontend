import React from 'react'
import Image from 'next/image'
import styles from '@/app/styles/searchPage/searchPage.module.css'
import Link from 'next/link'
import Skeleton from 'react-loading-skeleton'
const SearchPageListCardSkeleton = () => {
  return (
    <div className="row ms-4 mt-4">
      {Array.from({length:6}).map((_, index: any) => (
        <div className="col-12 m-4" key={index}>
          <div className={`card p-4  m-2 cursor d-flex  flex-row ${styles.listCard}`} >
            <Skeleton width={400} height={300}  className={`${styles.listImg}`} />
            <div className="card-body p-4 d-flex  flex-column justify-content-between">
              <div>
              <h5 className="card-title">{
                 <Skeleton width={'100%'} height={30}/>
                 }</h5>
              <div className="card-text">{
                <>
                <Skeleton width={'100%'} height={20} count={2}/>
                <Skeleton width={'50%'} height={20}/>
                </>
                
                }</div>
              </div>
              <div className='row align-items-center'>
              <div className="text-success col-md-6">
                <Skeleton width={100} height={20}/>
                 <span className='mx-2 text-secondary'>
              <Skeleton width={55} height={20}/>
                </span> </div>
              <div className="col-md-6 text-end">
                {
                  <div  className="btn">
                    <>
                    <Skeleton width={100} height={40}/>
                    </>
                  </div>
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

export default SearchPageListCardSkeleton