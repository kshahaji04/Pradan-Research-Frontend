import Image from 'next/image'
import React from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import dateFormat from '@/app/utils/dateFormat';
import Link from 'next/link';
import { CONSTANTS } from '@/app/services/config/app-config';
const VenueCard = ({ venueData }: any) => {
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
          <h3 className="text-center mt-5 mb-5" style={{ color: 'var(--primary)' }}>Venue</h3>
        </div>
        <div className="col-12">
          <div className="row">
            {
              venueData && venueData.map((data: any, index: number) => (
                <>
                  <div className="col-md-4" key={index}>
                    <div className="card shadow d-flex flex-row align-items-center py-4">
                      <div className="card-body text-center">
                        <h1 className="card-title text-success">{data?.name}</h1>
                        <h4 className="card-title text-secondary">{data?.state}</h4>
                        <h4 className="card-title mb-2">{dateFormat(data?.from_date)} {data?.to_date ? `to  ${dateFormat(data?.to_date)}` : ''}</h4>
                        <h5 className="card-title ">Timing: {data?.from_time} to {data?.to_time}</h5>
                         {data?.address && <p className="card-text text-secondary">Venue: {data?.address}</p>}
                      </div>
                    </div>
                  </div>
                </>
              ))
            }
          </div>

        </div>
      </div>
    </div>
  )
}

export default VenueCard