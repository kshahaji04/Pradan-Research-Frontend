import React from 'react';
import Skeleton from 'react-loading-skeleton';

const NavbarmobileSkeleton = () => {
    return (
        <>
            <div className='container-fluid pb-2 pt-1' style={{position:'fixed', top:'0', zIndex:'99999', backgroundColor:'#fff'}}>
                <div className='row'>
                    <div className='col-9'>
                        <div className='d-flex align-items-center'>
                            <div>
                                <Skeleton width={140} height={60} />
                            </div>
                            <div className='ms-3'>
                                <h5><Skeleton width={120} /></h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NavbarmobileSkeleton
