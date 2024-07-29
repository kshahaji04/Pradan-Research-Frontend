"use client"
import React, { useState } from 'react';
import styles from '@/app/styles/joinOurEvent/join_our_event.module.css'
import Skeleton from 'react-loading-skeleton';
import UpcomingEvents from '@/app/components/JoinOurEvent/Events/UpcomingEvents';


const JoinOurEventMasterSkeleton = () => {
    const [tab, setTab] = useState('upcoming_events');
  return (
    <div className="container mb-4">
      <div className="row pb-4" >
        <div className="container p-4">
          <div className={`row align-items-center justify-content-center ${styles.mainHeader}`} >
            <div style={{width:'fit-content'}}>
                <Skeleton width={150} height={40} />
            </div>
          </div>
          <div className='container position-relative'>
            <div id="exTab3" className="container pt-2">
              <ul className="nav nav-tabs mx-auto my-4" style={{  justifyContent: 'center' }}>
                <li className="nav-item">
                  <button className={`nav-link `} >
                      <Skeleton width={'100%'} height={'100%'}/> 
                  </button>
                </li>
                <li className="nav-item">
                  <button className={`nav-link ${tab === 'past_events' ? 'active' : ''}`} >
                       <Skeleton width={'100%'} height={'100%'} />
                    </button>
                </li>
              </ul>

               <UpcomingEvents /> 

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default JoinOurEventMasterSkeleton
