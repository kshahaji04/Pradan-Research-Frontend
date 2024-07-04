'use client' // Error components must be Client Components
 
import React, { useEffect } from 'react'
 
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error, "error")
  }, [error])
 
  return (
    <div style={{height:'calc(100vh - 76px)', width:'100%'}} className='d-flex align-items-center justify-content-center'>
      <div className="container p-4">
        <div className="row">
          <div className="p-4 d-flex align-center justify-content--center flex-column  align-items-center">
            <h3>Oops! Something went wrong.</h3>
            <div className='p-2'>  We re sorry to encounter an unexpected errorIt appears there was an
              issue with the page you requested. Please try the following:
            </div>
            <button
              className="btn btn-danger btn-lg m-4"
              onClick={() => reset()}
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}