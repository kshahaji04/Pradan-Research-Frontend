import React from 'react'
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import styles from '@/app/styles/joinOurEvent/join_our_event.module.css'

const FeaturedEventSkeleton = () => {
  return (
    <>
    {
        Array.from({ length: 1 }).map((_, index) => (
            <div className="container" key={index}>
              <div className="row pointer  justify-content-center">
                <div className="col-xl-4 col-sm-6">
                  <Skeleton height={410} width={300} />
                </div>
                <div className="col-xl-8 col-sm-6 p-4 d-flex flex-column justify-content-center">
                  <div>
                    <h1 className={styles.second}>
                      <Skeleton width={`60%`} />
                    </h1>
                    <p className={styles.third}>
                      <Skeleton count={3} />
                    </p>
                  </div>
                  <div>
                    <h6 className={styles.four}>
                      <Skeleton width={`50%`} />
                    </h6>
                    <h4 className="text-center mt-4">
                      <Skeleton width={`40%`} />
                    </h4>
                  </div>
                  <div>
                    <h4 className="text-center">
                      <Skeleton width={`30%`} />
                    </h4>
                  </div>
                  <div className="text-center mt-3">
                    <Skeleton width={`80px`} height={`35px`} />
                  </div>
                </div>
              </div>
            </div>
          ))
    }
    </>
  )
}

export default FeaturedEventSkeleton