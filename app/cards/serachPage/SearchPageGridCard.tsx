import React from 'react'
import Image from 'next/image'
import styles from '@/app/styles/searchPage/searchPage.module.css'
import Link from 'next/link'
import SearchPageGridCardSkeleton from '@/app/skeletons/cards/serachPage/SearchPageGridCardSkeleton'
import NoDataFound from '@/app/components/NoDataFound'
import img from '@/public/assets/images/no_image.jpg'
import { imageLoader } from '@/app/utils/image_loader_utils'
import { SearchPageGridCardProps } from '@/app/interfaces/search_interface'



const SearchPageGridCard :React.FC<SearchPageGridCardProps>= ({ data,loading }: any) => {
 
    return (
       <>
        <div className="row  mt-4">
       {
        loading ? <SearchPageGridCardSkeleton/> :
        data?.length > 0 ? 
        data?.map((item:any,index:any)=>(
            <div className="col-lg-4 col-sm-6 m-2 mb-5 mx-0" key={index}>
            <div className={`card h-100 text-left cursor ${styles.gridCard}`} >
                <div className={styles.image_container_grid_view}>
                    <Image src={item?.image ? item?.image : img.src}
                        className='card-img-top' 
                        alt="pradan logo" height={200} width={200}
                        loader={imageLoader}
                    />
                </div>
                <div className="card-body d-flex flex-column justify-content-between">
                    <h5 className='card-title'>
                        {
                         item?.title?.length > 50 ? `${item?.title?.slice(0,50)}...` : item?.title
                        }
                        </h5>
                    <p className={styles.grid_description}>
                        { 
                         item?.sub_title?.length > 200 ? `${item?.desc?.slice(0,200)}...` : item?.sub_title
                        } 
                        </p>
                    <div className="row">
                    <div className="col-md-12">
                            <p className="card-text text-success mb-0 mt-2">
                             {item?.type}
                            </p>
                        </div>
                        <div className="col-md-6">
                            <p className="card-text text-secondary mb-0 mt-2">{item?.year}</p>
                        </div>
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
        ) 
              ) : <NoDataFound/>
                   }
        </div>
        </>
    )
}

export default SearchPageGridCard