import React from 'react'
import Image from 'next/image'
import styles from '@/app/styles/searchPage/searchPage.module.css'
import Link from 'next/link'
import Skeleton from 'react-loading-skeleton'
const SearchPageGridCardSkeleton = () => {
  
    return (
       <>
        <div className="row ms-4 mt-4">
       {
        Array.from({length:3})?.map((item:any,index:any)=>(
            <div className="col-lg-4 m-2 mb-5 mx-0" key={index}>
            <div className={`card h-100 text-left cursor ${styles.gridCard}`} >
                <div className={styles.image_container_grid_view}>
                    <Skeleton 
                        style={{width:'100%'}}
                         height={200} width={'100%'}
                    />
                </div>
                <div className="card-body d-flex flex-column justify-content-between">
                    <h5 className='card-title'>
                        {
                         <Skeleton width={'100%'} height={40}/>
                        }
                        </h5>
                    <p className={styles.grid_description}>
                        { 
                        <>
                          <Skeleton width={'100%'} height={20} count={2}/>
                          <Skeleton width={'50%'}  height={20} />
                        </>
                     
                        } 
                        </p>
                    <div className="row">
                    <div className="col-md-12">
                            <p className="card-text text-success mb-0 mt-2">
                              <Skeleton width={100} height={20}/>
                            </p>
                        </div>
                        <div className="col-md-6">
                            <p className="card-text text-secondary mb-0 mt-2">
                                <Skeleton width={50} height={20}/>
                            </p>
                        </div>
                        <div className="col-md-6 text-end">
                            {

                                <div  className="btn">
                                <Skeleton width={50} height={30}/>
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
        </>
    )
}

export default SearchPageGridCardSkeleton