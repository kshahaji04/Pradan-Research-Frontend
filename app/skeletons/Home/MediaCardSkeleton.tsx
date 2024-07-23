import React from 'react'
import Skeleton from 'react-loading-skeleton'

function MediaCardSkeleton() {
    return (
        <div className='d-flex align-items-center justify-content-center h-100'>
            <div className={`card h-100 rounded-0`} style={{ width: "90%", maxWidth: "380px", border: 0 }}>
                <div className="w-full d-flex align-items-center justify-content-center position-relative">
                    <Skeleton width={150} height={150} circle />
                </div>
                <div className="card-body position-relative text-decoration-none text-start py-4">
                    <p className={`card-title m-0`}>
                        <Skeleton count={4} />
                        <Skeleton width={'60%'} />
                    </p>
                </div>
                <div className={`card-footer`} style={{ background: 'transparent', border: 0 }}>
                    <div className="row d-flex align-items-center justify-content-center">
                        <div className="col-6">
                            <div>
                                <p className='mb-0'><Skeleton /></p>
                            </div>
                        </div>
                        <div className="col-6 text-end">
                            <Skeleton width={40} height={40} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MediaCardSkeleton