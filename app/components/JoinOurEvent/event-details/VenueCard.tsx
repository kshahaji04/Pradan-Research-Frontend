import Image from 'next/image'
import React from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
const VenueCard = () => {
  return (
    <div className="container pb-5">
      <div className="row">
        <div className="col-12">
          <h3 className="text-center mt-5 mb-5" style={{ color: 'var(--primary)' }}>Vanue</h3>
        </div>
        <div className="col-12">

          <div className='d-flex justify-content-center'>
            <div className="card shadow d-flex flex-row align-items-center py-4" style={{ width: '50rem' }}>
              <div className="col-12">
                <div className="row">
                  <div className="col-6">
                    <div className="card-body text-center">
                      <h1 className="card-title text-success">18 July 2024</h1>
                      <h1 className="card-title text-success">Delhi</h1>
                      <h4 className="card-title ">Timing: 9am to 6pm </h4>
                      <p className="card-text text-secondary">Venue: Atal Bihari Vajpayee Institute of Good Governance and Policy Analysis (AIGGPA), Bhopal</p>
                    </div>
                  </div>
                  <div className="col-6  ">
                    <div className="card-body d-flex align-items-center justify-content-center h-100 w-100">
                      <button type='button' className='btn btn-outline-success'>Download Event Broucher</button>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div>
                <Image src='/assets/images/query-image.png' height={200} width={200} alt='' />
              </div> */}

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VenueCard