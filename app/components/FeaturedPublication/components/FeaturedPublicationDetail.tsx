'use client'
import React from 'react'
import styles from '@/app/styles/FeaturedPublication/featured_publication_detail.module.css'
import Link from 'next/link'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import DownloadIcon from '@mui/icons-material/Download';
import Tooltip from '@mui/material/Tooltip';
import useFeaturedPublicationDetail from '@/app/hooks/featured_publication_hooks/featured_publication_detail';
import { CONSTANTS } from '@/app/services/config/app-config';
import ErrorComponent from '@/app/components/ErrorComponent';
import NoDataFound from '@/app/components/NoDataFound';
import PublicationDetailsSkeleton from '@/app/skeletons/MediaPage/MediaSectionCardsSkeleton/PublicationCardsSkeleton/PublicationDetailsSkeleton';
// import PublicationDetailsSkeleton from '@/skeletons/MediaPage/PublicationDetailsSkeleton/PublicationDetailsSkeleton';

const FeaturedPublicationDetail = () => {

  const { featuredPublicationDetailData, featuredPublicationDetailError, featuredPublicationDetailLoading } = useFeaturedPublicationDetail();

  console.log("???", featuredPublicationDetailData)
  let loadingPublicationDetails = false
  return (
    <>{featuredPublicationDetailError ? <ErrorComponent /> : <div className='container'>
      <div className={`${styles.media_details_wrapper}`}>
        {featuredPublicationDetailLoading ? <PublicationDetailsSkeleton /> :
          <div className="row">
            {featuredPublicationDetailData && Object.keys(featuredPublicationDetailData)?.length > 0 ? <>
              <div className="col-12 mb-4">
                <div className="row">
                  <div className="col-6">
                    <div>
                      <Link href={`/media`} className='btn btn-outline-success'>See More Media</Link>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className={`${styles.author_detail}`}>
                      <p>{featuredPublicationDetailData?.authors?.length > 0 && featuredPublicationDetailData?.authors?.map((info: any) => info?.author_name)} . {featuredPublicationDetailData?.creation}</p>
                      <Link href={`${!featuredPublicationDetailData?.pdf?.includes('pradan') ? `${CONSTANTS.API_BASE_URL}${featuredPublicationDetailData?.pdf}` : `${featuredPublicationDetailData?.pdf}`}`} target='_blank'>
                        <p className='ms-4 text-danger cursor'>
                          <Tooltip title="download this publication">
                            <DownloadIcon />
                          </Tooltip>
                        </p>
                      </Link>
                    </div>
                  </div>
                </div>

              </div>
              <div className="col-12">
                <div className={`${styles.media_content_wrapper}`}>
                  <h1 className='mb-3'>{featuredPublicationDetailData?.title}</h1>
                  <div className='innerHtml' dangerouslySetInnerHTML={{
                    __html: featuredPublicationDetailData?.description
                  }}></div>
                </div>
              </div>
            </> : <NoDataFound />}

          </div>}
      </div>
    </div>}</>
  )
}

export default FeaturedPublicationDetail

