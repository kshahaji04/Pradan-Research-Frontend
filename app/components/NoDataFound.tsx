import React from 'react'
import noDataImg from '@/public/assets/images/noDataImg.png'
import Image from 'next/image'
// import { useRouter } from 'next/router'
// import CancelSharpIcon from '@mui/icons-material/CancelSharp';

function NoDataFound() {

    // const router = useRouter()

    return (
        <div className="container">
            <div className="row align-items-center flex-column justify-content-center pt-3 pb-5">
                <Image src={noDataImg} width={1200} height={1200} alt='no-data' style={{ width: '400px', height: 'max-content' }} />
                <h4 style={{ width: '100%', maxWidth: '600px', textAlign: 'center', color: '#222', marginTop: '30px' }}>
                    No data found.
                </h4>
                <p className='text-center'>Please come again later.</p>
                {/* <div className='text-center'>
                    <button onClick={() => router.reload()} className="btn btn-success">Refresh</button>
                </div> */}
            </div>
        </div>
    )
}

export default NoDataFound