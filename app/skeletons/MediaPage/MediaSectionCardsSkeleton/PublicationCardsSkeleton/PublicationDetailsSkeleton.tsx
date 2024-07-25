import React from 'react'
import styles from '@/app/styles/joinOurEvent/media_details.module.css'
import Link from 'next/link'
import DownloadIcon from '@mui/icons-material/Download';
import Tooltip from '@mui/material/Tooltip';
import Skeleton from 'react-loading-skeleton';
import { useMediaQuery } from '@mui/material';

const PublicationDetailsSkeleton = () => {
  const isSmallScreen = useMediaQuery('(max-width:600px)');

  return (
    <div className='container'>
      <div className={`${styles.media_details_wrapper}`}>
        <div className="row">
          <div className="col-12 mb-4">
            <div className="row">
              <div className="col-sm-6"><Skeleton width={240} height={38} />
              </div>
              <div className="col-sm-6">
                <div className={`${styles.author_detail}`}>
                  {isSmallScreen ? <p style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent:'flex-start', marginBottom:'0' }}>
                    <Skeleton width={120} />{" "} . <Skeleton width={90} />
                  </p> :<p style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent:'flex-end', marginBottom:'0' }}>
                    <Skeleton width={120} />{" "} . <Skeleton width={90} />
                  </p>}
                  <div className='ms-4'>
                    <Skeleton width={24} height={24} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className={`${styles.media_content_wrapper}`}>
              <h1 className='mb-3'><Skeleton /><Skeleton width={'60%'} /></h1>
              <p><Skeleton /></p>
              <p><Skeleton /><Skeleton width={'20%'} /></p>
              <Skeleton width={'100%'} height={500} />
              <h3 className='mt-3'><Skeleton width={240} /></h3>
              <p><Skeleton count={2} /><Skeleton width={'40%'} /></p>
              <h5><Skeleton width={260} /></h5>
              <h4><Skeleton width={220} /></h4>
              <p><Skeleton width={'70%'} /></p>
              <h4><Skeleton width={220} /></h4>
              <p><Skeleton width={'40%'} /></p>
              <h4><Skeleton width={220} /></h4>
              <p><Skeleton width={'90%'} /></p>
              <h4><Skeleton width={220} /></h4>
              <p><Skeleton /></p>
              <Skeleton width={'100%'} height={500} />
              <h3 className='mt-3'><Skeleton width={240} /></h3>
              <p><Skeleton count={2} /><Skeleton width={'40%'} /></p>
              <h5><Skeleton width={260} /></h5>
              <h4><Skeleton width={220} /></h4>
              <p><Skeleton width={'70%'} /></p>
              <h4><Skeleton width={220} /></h4>
              <p><Skeleton width={'40%'} /></p>
              <h4><Skeleton width={220} /></h4>
              <p><Skeleton width={'90%'} /></p>
              <h4><Skeleton width={220} /></h4>
              <p><Skeleton /></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PublicationDetailsSkeleton
