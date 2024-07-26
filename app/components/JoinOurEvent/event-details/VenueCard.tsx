import Image from 'next/image'
import React from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import dateFormat from '@/app/utils/dateFormat';
import Link from 'next/link';
import { CONSTANTS } from '@/app/services/config/app-config';
const VenueCard = ({vanueData}:any) => {
  const formatDate = (dateString: string) => {
    if (!dateString) return '';
  
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'long' });
    const year = date.getFullYear();
  
    return `${day} ${month} ${year}`;
  };
  return (
    <div className="container pb-5">
      <div className="row">
        <div className="col-12">
          <h3 className="text-center mt-5 mb-5" style={{ color: 'var(--primary)' }}>Vanue</h3>
        </div>
        <div className="col-12">

          <div className='d-flex justify-content-center'>
            <div className="card shadow d-flex flex-row align-items-center py-4" style={{ width: '50rem' }}>
              {
                vanueData && vanueData.map((data: any, index:number) => (
                  <div className="col-12" key={index}>
                    <div className="row">
                      <div className="col-6">
                        <div className="card-body text-center">
                        <h1 className="card-title text-success">{formatDate(data?.date)}</h1>
                          <h1 className="card-title text-success">{data?.state}</h1>
                          <h4 className="card-title ">Timing: {data?.from_time} to {data?.to_time}</h4>
                          <p className="card-text text-secondary">Venue: {data?.address}</p>
                        </div>
                      </div>
                      <div className="col-6  ">
                        <div className="card-body d-flex align-items-center justify-content-center h-100 w-100">
                          <Link href={data?.broucher_pdf && data?.broucher_pdf.includes('/files/') ? ` ${CONSTANTS.API_BASE_URL}/${data?.broucher_pdf}` : data?.broucher_pdf } target='_blank' className='btn btn-outline-success'>Download Event Broucher</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              }
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