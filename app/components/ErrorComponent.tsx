// 'use client'
import React from 'react'
import oops from '@/public/assets/images/oops.png'
import Image from 'next/image'
// import Link from 'next/link'
// import { useRouter } from 'next/navigation';
// import { useRouter } from 'next/router';
// import CancelSharpIcon from '@mui/icons-material/CancelSharp';

function ErrorComponent({ title = "" }) {
    return (
        <div className="container">
            <div className="row align-items-center flex-column justify-content-center py-5 pt-0">
                <Image src={oops} width={1200} height={1200} alt='error' style={{ width: '400px', height: 'max-content' }} />
                <h4 style={{ width: '100%', maxWidth: '600px', textAlign: 'center', color: '#222', marginTop: '-30px' }}>
                    {title !== "" ? title === "ECONNABORTED" ? "Request timed out" :
                        title === "ERR_BAD_REQUEST" ? "Bad Request" : title === "ERR_INVALID_URL" ? "Invalid URL"
                            : "Oops! an error occured." : "Oops! an error occured."}
                </h4>
                <p className='text-center'>Please come again later.</p>
                {/* <div className='text-center'>
                    <Link href={'/'}><button className="btn btn-success">Back to home</button></Link>
                </div> */}
            </div>
        </div>
    )
}

export default ErrorComponent