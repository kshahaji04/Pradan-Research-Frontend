import Image from 'next/image'
import React from 'react'

const Queries = () => {
  return (
    <div className="container mb-5">
      <div className="row">
        <div className="col-12">
          <h3 className="text-center mt-5 mb-5" style={{ color: 'var(--primary)' }}>Queries</h3>
        </div>
        <div className="col-12">

          <div className='d-flex justify-content-center'>
            <div className="card shadow d-flex flex-row align-items-center py-4" style={{ width: '40rem' }}>
              <div>
                <Image src='/assets/images/query-image.png' height={200} width={200} alt='' />
              </div>
              <div className="card-body">
                <h5 className="card-title">Do you have any query?</h5>
                <p className="card-text">Let&apos;s Discuss click below</p>
                <button type='button' className='btn btn-outline-success'>For Queries</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Queries